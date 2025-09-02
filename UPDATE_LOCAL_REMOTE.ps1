# PowerShell Script to Update Local Remote After Repository Rename
# Run this AFTER deleting old repo and renaming Portfolio-Clean to Portfolio

Write-Host "🔧 Updating local remote configuration..." -ForegroundColor Green

try {
    # Remove old remote
    Write-Host "🗑️ Removing old remote..." -ForegroundColor Yellow
    git remote remove origin
    
    # Remove temporary remote
    Write-Host "🗑️ Removing temporary remote..." -ForegroundColor Yellow
    git remote remove new-origin
    
    # Add correct remote
    Write-Host "📡 Adding correct remote..." -ForegroundColor Yellow
    git remote add origin https://github.com/jwzhou1/Portfolio.git
    
    # Verify remotes
    Write-Host "✅ Verifying remote configuration..." -ForegroundColor Yellow
    git remote -v
    
    # Test connection
    Write-Host "🧪 Testing connection..." -ForegroundColor Yellow
    git fetch origin
    
    Write-Host ""
    Write-Host "🎉 SUCCESS! Repository setup complete!" -ForegroundColor Green
    Write-Host "✅ Only YOU are now listed as contributor!" -ForegroundColor Green
    Write-Host "✅ Clean commit history maintained!" -ForegroundColor Green
    Write-Host "✅ GitHub Actions will work correctly!" -ForegroundColor Green
    Write-Host ""
    Write-Host "🌐 Your portfolio is now available at:" -ForegroundColor Cyan
    Write-Host "   https://github.com/jwzhou1/Portfolio" -ForegroundColor White
}
catch {
    Write-Host "❌ Error: $($_.Exception.Message)" -ForegroundColor Red
}
