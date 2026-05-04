// Article Generation Script using Gemini API
// Usage: GEMINI_API_KEY=your_key node scripts/generate-article.js
// Or set GEMINI_API_KEY as environment variable

const fs = require('fs');
const path = require('path');
const https = require('https');

const ROOT = path.join(__dirname, '..');
const ARTICLES_FILE = path.join(ROOT, 'js', 'articles-data.js');
const TOPICS_FILE = path.join(__dirname, 'topics.json');

// --- Configuration ---
const API_KEY = process.env.GEMINI_API_KEY;
const MODEL = 'gemini-2.5-flash';
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;
const MAX_RETRIES = 3;

// Authors pool
const AUTHORS = [
  { ar: 'محمد العمري', en: 'Mohammed Al-Omari', initial: 'M' },
  { ar: 'خالد المحسن', en: 'Khalid Al-Muhsen', initial: 'K' },
  { ar: 'د. سامي القحطاني', en: 'Dr. Sami Al-Qahtani', initial: 'S' },
  { ar: 'فاطمة الشهري', en: 'Fatima Al-Shahri', initial: 'F' },
  { ar: 'عمر الخالدي', en: 'Omar Al-Khalidi', initial: 'O' },
  { ar: 'ليلى القحطاني', en: 'Layla Al-Qahtani', initial: 'L' },
  { ar: 'أحمد بن علي', en: 'Ahmed Bin Ali', initial: 'A' },
  { ar: 'مروان العمودي', en: 'Marwan Al-Amoudi', initial: 'M' },
  { ar: 'د. هند التويجري', en: 'Dr. Hind Al-Tuwaijri', initial: 'H' }
];

const GRADIENTS = [
  'linear-gradient(135deg,#0A1628,#1A3A5C)',
  'linear-gradient(135deg,#1A2040,#2A3A6C)',
  'linear-gradient(135deg,#2D1B00,#8B6914)',
  'linear-gradient(135deg,#1a0a00,#4a2800)',
  'linear-gradient(135deg,#112244,#1a3a5c)',
  'linear-gradient(135deg,#0A1628,#112244)',
  'linear-gradient(135deg,#1A3A5C,#2A5A8C)',
  'linear-gradient(135deg,#201040,#402080)'
];

// --- Helpers ---
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function makeRequest(url, data) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify(data);
    const urlObj = new URL(url);
    const options = {
      hostname: urlObj.hostname,
      path: urlObj.pathname + urlObj.search,
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(body) }
    };
    const req = https.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); }
        catch(e) { reject(new Error('Invalid JSON: ' + data.substring(0, 200))); }
      });
    });
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

function slugify(text) {
  return text.toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

function getToday() {
  const d = new Date();
  const months = ['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر'];
  const monthsEn = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  return {
    ar: `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`,
    en: `${monthsEn[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`,
    iso: d.toISOString().split('T')[0]
  };
}

function loadArticles() {
  const content = fs.readFileSync(ARTICLES_FILE, 'utf-8');
  const match = content.match(/window\.ARTICLES\s*=\s*(\[[\s\S]*?\]);\s*\n\s*function/);
  if (!match) throw new Error('Could not parse articles-data.js');
  return JSON.parse(match[1]);
}

function saveArticles(articles) {
  let output = `// Auto-generated articles data file
// Last updated: ${new Date().toISOString().split('T')[0]}
// Total articles: ${articles.length}
// DO NOT EDIT MANUALLY - use scripts/generate-article.js to add new articles

window.ARTICLES = ${JSON.stringify(articles, null, 2)};

function getArticleById(id) {
  return ARTICLES.find(a => a.id === parseInt(id));
}

function getRelatedArticles(ids) {
  if (!ids) return [];
  return ids.map(id => ARTICLES.find(a => a.id === id)).filter(Boolean);
}
`;
  fs.writeFileSync(ARTICLES_FILE, output, 'utf-8');
}

function pickTopic(articles) {
  const topics = JSON.parse(fs.readFileSync(TOPICS_FILE, 'utf-8'));
  const usedTitles = articles.map(a => a.title);
  const available = topics.filter(t => !usedTitles.includes(t.title));
  if (available.length === 0) {
    console.log('All topics used! Recycling...');
    return topics[Math.floor(Math.random() * topics.length)];
  }
  return available[Math.floor(Math.random() * available.length)];
}

// --- Main ---
async function generateArticle() {
  if (!API_KEY) {
    console.error('ERROR: Set GEMINI_API_KEY environment variable first!');
    console.error('Get a free key at: https://aistudio.google.com/apikey');
    process.exit(1);
  }

  const articles = loadArticles();
  const topic = pickTopic(articles);
  const newId = Math.max(...articles.map(a => a.id)) + 1;
  const author = AUTHORS[Math.floor(Math.random() * AUTHORS.length)];
  const today = getToday();

  console.log(`Generating article #${newId}: "${topic.title}"`);

  const prompt = `You are a financial content writer for an Arabic investment blog. Write an article about: "${topic.title}"

IMPORTANT: Keep content concise. Each section should have exactly 1-2 short paragraphs.

RESPOND IN VALID JSON ONLY (no markdown wrapping):
{
  "summary": "Arabic summary in 1 sentence",
  "summaryEn": "English summary in 1 sentence",
  "excerpt": "Arabic excerpt in 1 sentence",
  "excerptEn": "English excerpt in 1 sentence",
  "content": "<h2 id='s1'>عنوان1</h2><p>فقرة عربية</p><h2 id='s2'>عنوان2</h2><p>فقرة</p><h2 id='s3'>عنوان3</h2><p>فقرة</p><h2 id='s4'>عنوان4</h2><p>فقرة</p>",
  "contentEn": "<h2 id='s1'>Title1</h2><p>English paragraph</p><h2 id='s2'>Title2</h2><p>paragraph</p><h2 id='s3'>Title3</h2><p>paragraph</p><h2 id='s4'>Title4</h2><p>paragraph</p>",
  "toc": [{"id":"s1","text":"عنوان1"},{"id":"s2","text":"عنوان2"},{"id":"s3","text":"عنوان3"},{"id":"s4","text":"عنوان4"}],
  "tocEn": [{"id":"s1","text":"Title1"},{"id":"s2","text":"Title2"},{"id":"s3","text":"Title3"},{"id":"s4","text":"Title4"}]
}`;

  let generated = null;

  for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
    console.log(`  Attempt ${attempt}/${MAX_RETRIES}...`);
    
    try {
      const response = await makeRequest(API_URL, {
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { 
          temperature: 0.7, 
          maxOutputTokens: 16000,
          responseMimeType: 'application/json'
        }
      });

      if (response.error) {
        console.log(`  API Error: ${response.error.message}`);
        if (attempt < MAX_RETRIES) {
          console.log(`  Waiting 30s before retry...`);
          await sleep(30000);
          continue;
        }
        console.error('All retries failed.');
        process.exit(1);
      }

      let text = response.candidates[0].content.parts[0].text;
      text = text.replace(/```json\s*/g, '').replace(/```\s*/g, '').trim();
      
      generated = JSON.parse(text);
      console.log('  ✓ Article content generated successfully');
      break;
    } catch(e) {
      console.log(`  Parse error: ${e.message}`);
      if (attempt < MAX_RETRIES) {
        console.log(`  Waiting 15s before retry...`);
        await sleep(15000);
      }
    }
  }

  if (!generated) {
    console.error('Failed to generate article after all retries.');
    process.exit(1);
  }

  // Find a related article in the same category
  const sameCategory = articles.filter(a => a.category === topic.category);
  const relatedId = sameCategory.length > 0 
    ? sameCategory[Math.floor(Math.random() * sameCategory.length)].id 
    : articles[articles.length - 1].id;

  const newArticle = {
    id: newId,
    slug: slugify(topic.titleEn),
    title: topic.title,
    titleEn: topic.titleEn,
    summary: generated.summary,
    summaryEn: generated.summaryEn,
    excerpt: generated.excerpt,
    excerptEn: generated.excerptEn,
    category: topic.category,
    categoryEn: topic.categoryEn,
    categoryIcon: topic.categoryIcon,
    author: author.ar,
    authorEn: author.en,
    authorInitial: author.initial,
    date: today.ar,
    dateEn: today.en,
    dateISO: today.iso,
    readTime: String(Math.floor(Math.random() * 5) + 8),
    views: String(Math.floor(Math.random() * 5000) + 1000),
    emoji: topic.categoryIcon,
    gradient: GRADIENTS[Math.floor(Math.random() * GRADIENTS.length)],
    image: `images/article${newId}.jpg`,
    featured: false,
    breadcrumb: topic.category,
    breadcrumbEn: topic.categoryEn,
    breadcrumbHref: 'index.html#strategies',
    toc: generated.toc,
    tocEn: generated.tocEn,
    related: [relatedId],
    content: generated.content,
    contentEn: generated.contentEn
  };

  articles.push(newArticle);
  saveArticles(articles);

  console.log(`✅ Article #${newId} added successfully!`);
  console.log(`   Title: ${topic.title}`);
  console.log(`   Category: ${topic.category}`);
  console.log(`   Author: ${author.ar}`);
  console.log(`   Total articles: ${articles.length}`);
}

generateArticle().catch(err => {
  console.error('Fatal error:', err.message);
  process.exit(1);
});
