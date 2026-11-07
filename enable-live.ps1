# Automation script to restore the full live website for axonpetro.in
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " Restoring Full Live Website for axonpetro.in " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

if (Test-Path "index.live.html") {
    Copy-Item "index.live.html" "index.html" -Force
    Write-Host "[OK] Restored original index.html from backup" -ForegroundColor Green
} else {
    Write-Host "[NOTE] index.live.html not found, using existing index.html" -ForegroundColor Yellow
}

git add index.html CNAME
git commit -m "Restore full live website on axonpetro.in"
git checkout gh-pages
git merge main --no-edit
git push origin main
git push origin gh-pages
git checkout main

Write-Host ""
Write-Host "[SUCCESS] Full website is restored and LIVE on axonpetro.in!" -ForegroundColor Green
Write-Host "To switch back to maintenance mode at any time, run: .\enable-maintenance.ps1" -ForegroundColor Yellow
