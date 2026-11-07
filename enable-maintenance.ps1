# Automation script to switch axonpetro.in into Maintenance Mode
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " Activating Maintenance Mode for axonpetro.in " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

if (-not (Test-Path "index.live.html")) {
    Copy-Item "index.html" "index.live.html" -Force
    Write-Host "[OK] Backed up original index.html to index.live.html" -ForegroundColor Green
}

Copy-Item "maintenance.html" "index.html" -Force
Write-Host "[OK] Replaced index.html with branded maintenance page" -ForegroundColor Green

git add index.html index.live.html maintenance.html CNAME
git commit -m "Switch to scheduled maintenance mode"
git checkout gh-pages
git merge main --no-edit
git push origin main
git push origin gh-pages
git checkout main

Write-Host ""
Write-Host "[SUCCESS] Maintenance mode is now active on axonpetro.in!" -ForegroundColor Green
Write-Host "To restore the full live website at any time, run: .\enable-live.ps1" -ForegroundColor Yellow
