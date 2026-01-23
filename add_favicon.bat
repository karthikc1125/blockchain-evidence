@echo off
echo Adding favicon to all HTML files...

for %%f in (*.html) do (
    findstr /C:"favicon.png" "%%f" >nul
    if errorlevel 1 (
        echo Processing %%f...
        powershell -Command "(Get-Content '%%f') -replace '<title>', '<link rel=\"icon\" href=\"favicon.png\" type=\"image/png\"><link rel=\"shortcut icon\" href=\"favicon.png\" type=\"image/png\"><title>' | Set-Content '%%f'"
    ) else (
        echo %%f already has favicon
    )
)

echo Done!
pause