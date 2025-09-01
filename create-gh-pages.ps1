# PowerShell script to create gh-pages branch for GitHub Pages deployment

Write-Host "Creating gh-pages branch..." -ForegroundColor Green

try {
    # Create and switch to orphan gh-pages branch
    git checkout --orphan gh-pages
    
    # Remove all files from the branch
    git rm -rf .
    
    # Create initial commit
    git commit --allow-empty -m "Initialize gh-pages branch"
    
    # Push the branch to origin
    git push origin gh-pages
    
    # Switch back to main branch
    git checkout main
    
    Write-Host "gh-pages branch created successfully!" -ForegroundColor Green
    Write-Host "You can now run your GitHub Actions workflow." -ForegroundColor Yellow
}
catch {
    Write-Host "Error creating gh-pages branch: $($_.Exception.Message)" -ForegroundColor Red
}
