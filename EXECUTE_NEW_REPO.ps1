# PowerShell Script to Create Clean Repository
# Run this AFTER creating Portfolio-Clean repository on GitHub

Write-Host "🚀 Starting clean repository creation process..." -ForegroundColor Green

try {
    # Step 1: Add new remote
    Write-Host "📡 Adding new remote repository..." -ForegroundColor Yellow
    git remote add new-origin https://github.com/jwzhou1/Portfolio-Clean.git
    
    # Step 2: Push main branch to new repository
    Write-Host "📤 Pushing main branch to new repository..." -ForegroundColor Yellow
    git push new-origin main
    
    # Step 3: Push gh-pages branch to new repository
    Write-Host "📤 Pushing gh-pages branch to new repository..." -ForegroundColor Yellow
    git push new-origin gh-pages
    
    Write-Host "✅ SUCCESS! Your clean repository is ready!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🔥 NEXT STEPS:" -ForegroundColor Red
    Write-Host "1. Go to https://github.com/jwzhou1/Portfolio/settings" -ForegroundColor White
    Write-Host "2. Scroll to 'Danger Zone' and DELETE the old repository" -ForegroundColor White
    Write-Host "3. Go to https://github.com/jwzhou1/Portfolio-Clean/settings" -ForegroundColor White
    Write-Host "4. Rename 'Portfolio-Clean' to 'Portfolio'" -ForegroundColor White
    Write-Host "5. Run the second script: UPDATE_LOCAL_REMOTE.ps1" -ForegroundColor White
    Write-Host ""
    Write-Host "🎉 After these steps, you'll have ZERO contributors except YOU!" -ForegroundColor Green
}
catch {
    Write-Host "❌ Error: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Make sure you created Portfolio-Clean repository on GitHub first!" -ForegroundColor Yellow
}
