# PowerShell script to add favicon to HTML files
$faviconHTML = @"
    <link rel="icon" href="favicon.png" type="image/png">
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <link rel="apple-touch-icon" href="favicon.png">
"@

Get-ChildItem -Path "." -Filter "*.html" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    
    # Check if favicon is already present
    if ($content -notmatch "favicon\.png") {
        Write-Host "Processing $($_.Name)..."
        
        # Add favicon links before the title tag
        $newContent = $content -replace "(<title>)", "$faviconHTML`r`n    `$1"
        
        Set-Content -Path $_.FullName -Value $newContent -NoNewline
        Write-Host "Updated $($_.Name)"
    } else {
        Write-Host "$($_.Name) already has favicon"
    }
}

Write-Host "Done!"