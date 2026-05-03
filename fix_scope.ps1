
# Fix: replace const ARTICLES with window.ARTICLES to guarantee global scope
# And remove the old error block

$html = [System.IO.File]::ReadAllText((Join-Path (Get-Location) 'index.html'), [System.Text.Encoding]::UTF8)

# Replace const ARTICLES = with window.ARTICLES =
$old1 = 'const ARTICLES = ['
$new1 = 'window.ARTICLES = window.ARTICLES || ['
$html2 = $html.Replace($old1, $new1)
if ($html2.Length -eq $html.Length) {
    Write-Host "WARNING: could not replace const ARTICLES"
} else {
    Write-Host "Replaced const ARTICLES with window.ARTICLES"
}

# Also fix the check block: remove the old verbose error check 
$badCheck = "  if (!grid) { console.error('Articles grid not found'); return; }`r`n  if (typeof ARTICLES === 'undefined') {`r`n    console.error('ARTICLES data not loaded. Check js/articles.js path and encoding.');`r`n    // Try to recover by showing an error message to the user`r`n    grid.innerHTML = '<p style=""color:var(--gold-light); text-align:center; padding:2rem;"">عذراً، لم نتمكن من تحميل المقالات. يرجى التأكد من تشغيل الموقع من مجلد صحيح.</p>';`r`n    return;`r`n  }"
$goodCheck = "  if (!grid || typeof ARTICLES === 'undefined') return;"

$html3 = $html2.Replace($badCheck, $goodCheck)
if ($html3.Length -eq $html2.Length) {
    Write-Host "WARNING: Could not remove old error block (string mismatch), keeping verbose version"
    $html3 = $html2
} else {
    Write-Host "Removed old verbose error block"
}

[System.IO.File]::WriteAllText((Join-Path (Get-Location) 'index.html'), $html3, [System.Text.Encoding]::UTF8)
Write-Host ("Done. index.html size: " + (Get-Item 'index.html').Length + " bytes")

# Do the same for articles.js standalone file
$articlesJs = [System.IO.File]::ReadAllText((Join-Path (Get-Location) 'js\articles.js'), [System.Text.Encoding]::ASCII)
$articlesJs2 = $articlesJs.Replace('const ARTICLES = [', 'window.ARTICLES = window.ARTICLES || [')
if ($articlesJs2.Length -ne $articlesJs.Length) {
    [System.IO.File]::WriteAllText((Join-Path (Get-Location) 'js\articles.js'), $articlesJs2, [System.Text.Encoding]::ASCII)
    Write-Host "Updated articles.js to use window.ARTICLES"
}

# Do the same for article.html
$articleHtml = [System.IO.File]::ReadAllText((Join-Path (Get-Location) 'article.html'), [System.Text.Encoding]::UTF8)
$articleHtml2 = $articleHtml.Replace('const ARTICLES = [', 'window.ARTICLES = window.ARTICLES || [')
if ($articleHtml2.Length -ne $articleHtml.Length) {
    [System.IO.File]::WriteAllText((Join-Path (Get-Location) 'article.html'), $articleHtml2, [System.Text.Encoding]::UTF8)
    Write-Host "Updated article.html to use window.ARTICLES"    
}
