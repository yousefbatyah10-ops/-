
# Fix ARTICLES scope - make it global window.ARTICLES
# Also fix the check to not fail

$html = [System.IO.File]::ReadAllText((Join-Path (Get-Location) 'index.html'), [System.Text.Encoding]::UTF8)

# 1. Replace const ARTICLES with window.ARTICLES in index.html
$html2 = $html.Replace('const ARTICLES = [', 'window.ARTICLES = window.ARTICLES || [')
if ($html2.Length -ne $html.Length) {
    Write-Host "OK: Replaced const ARTICLES with window.ARTICLES in index.html"
} else {
    Write-Host "WARN: const ARTICLES not found in index.html"
}

# 2. Fix the typeof check to handle both old and new
$html2 = $html2.Replace(
    "if (typeof ARTICLES === 'undefined') {",
    "if (typeof window.ARTICLES === 'undefined' || !window.ARTICLES) {"
)

# 3. Fix references from ARTICLES to window.ARTICLES in the rendering block
$html2 = $html2.Replace('return ARTICLES;', 'return window.ARTICLES;')
$html2 = $html2.Replace('return ARTICLES.filter', 'return window.ARTICLES.filter')
$html2 = $html2.Replace('const sorted = [...ARTICLES]', 'const sorted = [...window.ARTICLES]')
$html2 = $html2.Replace('ARTICLES.filter(a =>', 'window.ARTICLES.filter(a =>')
$html2 = $html2.Replace('ARTICLES.length', 'window.ARTICLES.length')

[System.IO.File]::WriteAllText((Join-Path (Get-Location) 'index.html'), $html2, [System.Text.Encoding]::UTF8)
Write-Host ("index.html updated: " + (Get-Item 'index.html').Length + " bytes")

# 4. Same for articles.js
$js = [System.IO.File]::ReadAllText((Join-Path (Get-Location) 'js\articles.js'), [System.Text.Encoding]::ASCII)
$js2 = $js.Replace('const ARTICLES = [', 'window.ARTICLES = [')
if ($js2.Length -ne $js.Length) {
    [System.IO.File]::WriteAllText((Join-Path (Get-Location) 'js\articles.js'), $js2, [System.Text.Encoding]::ASCII)
    Write-Host "Updated articles.js"
}

# 5. Same for article.html
$art = [System.IO.File]::ReadAllText((Join-Path (Get-Location) 'article.html'), [System.Text.Encoding]::UTF8)
$art2 = $art.Replace('const ARTICLES = [', 'window.ARTICLES = window.ARTICLES || [')
$art2 = $art2.Replace('return ARTICLES.find', 'return window.ARTICLES.find')
if ($art2.Length -ne $art.Length) {
    [System.IO.File]::WriteAllText((Join-Path (Get-Location) 'article.html'), $art2, [System.Text.Encoding]::UTF8)
    Write-Host ("article.html updated: " + (Get-Item 'article.html').Length + " bytes")
}

Write-Host "All done."
