// Build script: merges base articles + content patches into a single file
// Run with: node scripts/build-articles.js

const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');

// 1. Load base articles from index.html
console.log('Reading index.html...');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf-8');

// Extract the script block containing window.ARTICLES
const scriptMatch = html.match(/window\.ARTICLES\s*=\s*window\.ARTICLES\s*\|\|\s*\[[\s\S]*?\];\s*function getArticleById/);
if (!scriptMatch) {
  console.error('Could not find ARTICLES block in index.html');
  process.exit(1);
}

const articlesCode = scriptMatch[0].replace('function getArticleById', '');

// Create a sandbox to execute the code
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(articlesCode, sandbox);

const articles = sandbox.window.ARTICLES;
console.log(`Loaded ${articles.length} base articles`);

// 2. Apply content patches
for (let i = 1; i <= 8; i++) {
  const suffix = i === 1 ? '' : String(i);
  const patchFile = path.join(ROOT, 'js', `content-patch${suffix}.js`);
  if (fs.existsSync(patchFile)) {
    console.log(`Applying content-patch${suffix}.js...`);
    const patchCode = fs.readFileSync(patchFile, 'utf-8');
    // The patches are IIFEs that modify window.ARTICLES
    const patchSandbox = { window: { ARTICLES: articles } };
    vm.createContext(patchSandbox);
    vm.runInContext(patchCode, patchSandbox);
  }
}

console.log('All patches applied.');

// 3. Generate articles-data.js
let output = `// Auto-generated articles data file
// Last updated: ${new Date().toISOString().split('T')[0]}
// Total articles: ${articles.length}
// DO NOT EDIT MANUALLY - use scripts/generate-article.js to add new articles

window.ARTICLES = `;

output += JSON.stringify(articles, null, 2);

output += `;\n\nfunction getArticleById(id) {
  return ARTICLES.find(a => a.id === parseInt(id));
}

function getRelatedArticles(ids) {
  if (!ids) return [];
  return ids.map(id => ARTICLES.find(a => a.id === id)).filter(Boolean);
}
`;

const outPath = path.join(ROOT, 'js', 'articles-data.js');
fs.writeFileSync(outPath, output, 'utf-8');
console.log(`Written to ${outPath} (${(fs.statSync(outPath).size / 1024).toFixed(0)} KB)`);
console.log('Done!');
