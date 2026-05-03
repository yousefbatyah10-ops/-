/**
 * Smart Wealth Blog - Core Rendering Logic
 */

function getArticleById(id) {
  if (typeof ARTICLES === 'undefined') return null;
  return ARTICLES.find(a => a.id === parseInt(id));
}

function getRelatedArticles(ids) {
  if (typeof ARTICLES === 'undefined') return [];
  return ids.map(id => ARTICLES.find(a => a.id === id)).filter(Boolean);
}

// Grid Map for Categories (Unicode protected)
const CAT_MAP = {
  'stocks': '\u0627\u0644\u0623\u0633\u0647\u0645',
  'realestate': '\u0627\u0644\u0639\u0642\u0627\u0631\u0627\u062a',
  'gold': '\u0627\u0644\u0630\u0647\u0628 \u0648\u0627\u0644\u0645\u0639\u0627\u062f\u0646',
  'crypto': '\u0627\u0644\u0639\u0645\u0644\u0627\u062a \u0627\u0644\u0631\u0642\u0645\u064a\u0629',
  'startup': '\u0631\u064a\u0627\u062f\u0629 \u0627\u0644\u0623\u0639\u0645\u0627\u0644',
  'passive': '\u0627\u0644\u062f\u062e\u0644 \u0627\u0644\u0633\u0644\u0628\u064a',
  'personal': '\u0627\u0644\u0645\u0627\u0644\u064a\u0629 \u0627\u0644\u0634\u062e\u0635\u064a\u0629',
  'tech': '\u062a\u0642\u0646\u064a\u0629 \u0648\u062b\u0631\u0648\u0629'
};

// --- Homepage Logic ---
function initHomepage() {
  const grid = document.getElementById('articlesGrid');
  if (!grid) return;

  const BATCH = 6;
  let shown = 0;
  let currentFilter = 'all';

  function render(append = false) {
    if (!append) { grid.innerHTML = ''; shown = 0; }
    if (typeof ARTICLES === 'undefined') return;
    
    const filtered = currentFilter === 'all' 
      ? ARTICLES 
      : ARTICLES.filter(a => a.category === CAT_MAP[currentFilter]);
    
    const slice = filtered.slice(shown, shown + BATCH);
    slice.forEach(art => {
      const card = document.createElement('article');
      card.className = 'article-card';
      const bgText = art.title.split(' ').slice(0, 2).join(' ');
      card.innerHTML = `
        <div class="card-header-visual">
          <div class="card-img-placeholder" style="background: ${art.gradient || 'var(--navy-mid)'}">
            <div class="placeholder-bg-text" style="font-size: 2rem;">${bgText}</div>
            <img src="${art.image}" alt="${art.title}">
          </div>
        </div>
        <div class="card-content">
          <div class="card-badge-row">
            <span class="card-cat">${art.category}</span>
          </div>
          <div class="card-meta">
            <span>${art.date}</span>
            <span class="card-dot">•</span>
            <span>${art.readTime || '5'} \u062f\u0642\u064a\u0642\u0629</span>
          </div>
          <h3 class="card-title">${art.title}</h3>
          <p class="card-excerpt">${art.excerpt}</p>
          <div class="card-footer">
            <div class="card-author">
              <div class="author-avatar">${art.authorInitial || 'A'}</div>
              <span class="author-name">${art.author || 'Wealth Forum'}</span>
            </div>
          </div>
        </div>
      `;
      grid.appendChild(card);
    });
    shown += slice.length;
    const btn = document.getElementById('loadMoreBtn');
    if (btn) btn.style.display = shown >= filtered.length ? 'none' : 'block';
  }

  // Filter Bar
  const filterBar = document.getElementById('categoryFilter');
  if (filterBar) {
    filterBar.addEventListener('click', (e) => {
      if (e.target.classList.contains('filter-btn')) {
        filterBar.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        currentFilter = e.target.dataset.category;
        render();
      }
    });
  }

  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (loadMoreBtn) loadMoreBtn.onclick = () => render(true);

  render();
}

// --- Article Page Logic ---
function initArticlePage() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  if (!id || typeof ARTICLES === 'undefined') return;

  const art = ARTICLES.find(a => a.id === parseInt(id));
  if (!art) return;

  const map = {
    'articleTitle': 'title',
    'articleDate': 'date',
    'articleCategory': 'category',
    'articleAuthor': 'author',
    'articleHero': 'image',
    'articleBody': 'content'
  };

  for (let [elId, key] of Object.entries(map)) {
    const el = document.getElementById(elId);
    if (el) {
      if (key === 'image') el.src = art[key];
      else if (key === 'content') el.innerHTML = art[key];
      else el.textContent = art[key] || '';
    }
  }
}

// Global Launcher
window.addEventListener('load', () => {
  if (document.getElementById('articlesGrid')) initHomepage();
  if (document.getElementById('articleBody')) initArticlePage();
});
