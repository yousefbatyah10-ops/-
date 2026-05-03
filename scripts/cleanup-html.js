// Cleanup: remove old inline articles data and patch scripts from HTML files
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

function cleanHtml(filePath) {
  let html = fs.readFileSync(filePath, 'utf-8');
  const name = path.basename(filePath);
  
  // Remove old inline articles data: everything from the orphaned article objects to the closing of getRelatedArticles
  // After our edit, there's an orphaned block starting with {id:1,... through </script>
  // followed by content-patch scripts
  // We need to remove: the old data + helper functions + content-patch scripts
  
  // Pattern: match from orphaned article data to end of content-patch8
  const oldDataRegex = /\s*\{id:1,slug:"invest-saudi-stocks"[\s\S]*?<\/script>\s*<script src="js\/content-patch\.js"[\s\S]*?<script src="js\/content-patch8\.js"[^>]*><\/script>\s*/;
  
  if (oldDataRegex.test(html)) {
    html = html.replace(oldDataRegex, '\n');
    console.log(`${name}: Removed old inline data + patch scripts`);
  } else {
    console.log(`${name}: Pattern not found, trying alternate approach...`);
    
    // Try to find and remove just the content-patch scripts
    const patchRegex = /<script src="js\/content-patch\d?\.js"[^>]*><\/script>\s*/g;
    const patchCount = (html.match(patchRegex) || []).length;
    html = html.replace(patchRegex, '');
    console.log(`${name}: Removed ${patchCount} patch script tags`);
  }
  
  // Make sure articles-data.js is loaded
  if (!html.includes('articles-data.js')) {
    // Add it before main.js
    html = html.replace(
      '<script src="js/main.js"',
      '<script src="js/articles-data.js" charset="utf-8"></script>\n<script src="js/main.js"'
    );
    console.log(`${name}: Added articles-data.js reference`);
  }
  
  fs.writeFileSync(filePath, html, 'utf-8');
  console.log(`${name}: Saved (${(fs.statSync(filePath).size / 1024).toFixed(0)} KB)`);
}

cleanHtml(path.join(ROOT, 'index.html'));
cleanHtml(path.join(ROOT, 'article.html'));
console.log('Done!');
