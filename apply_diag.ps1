
# Diagnostic and Scope Fix for index.html
$html = [System.IO.File]::ReadAllText((Join-Path (Get-Location) 'index.html'), [System.Text.Encoding]::UTF8)

# 1. Update the data definition block
# First, add a start log
$html = $html.Replace('<script>', '<script>console.log("Inlined script starting..."); try {')

# Change window.ARTICLES = or const ARTICLES = to var ARTICLES =
$html = $html.Replace('window.ARTICLES = window.ARTICLES || [', 'var ARTICLES = [')
$html = $html.Replace('const ARTICLES = [', 'var ARTICLES = [')

# Add end log and closing try-catch after the array
$oldEnd = "];"
$newEnd = "]; console.log('ARTICLES defined successfully, count:', (typeof ARTICLES !== 'undefined' ? ARTICLES.length : 'undefined')); } catch(e) { console.error('Data script error:', e); window.loadingError = e; }"
$html = $html.Replace($oldEnd, $newEnd)

# 2. Update the check block
$checkStart = "if (typeof window.ARTICLES === 'undefined' || !window.ARTICLES) {"
$html = $html.Replace($checkStart, "if (typeof ARTICLES === 'undefined' || !ARTICLES) { console.error('Missing ARTICLES global');")

# Update the on-screen error message to show technical details
$oldMsg = "عذراً، لم نتمكن من تحميل المقالات. يرجى التأكد من تشغيل الموقع من مجلد صحيح."
$newMsg = "عذراً، لم نتمكن من تحميل المقالات. الخطأ: " + " + (window.loadingError ? window.loadingError.message : 'Missing ARTICLES data')"
$html = $html.Replace($oldMsg, $newMsg)

[System.IO.File]::WriteAllText((Join-Path (Get-Location) 'index.html'), $html, [System.Text.Encoding]::UTF8)
Write-Host "Diagnostics applied to index.html"
