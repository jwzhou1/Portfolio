# How to Remove All Contributors from GitHub Repository

## Method 1: Repository Settings (Recommended)

1. **Go to your repository on GitHub**: https://github.com/jwzhou1/Portfolio
2. **Click on "Settings"** tab (you need to be the repository owner)
3. **Scroll down to "Manage access"** section
4. **Remove collaborators one by one** by clicking the "Remove" button next to each collaborator

## Method 2: Transfer Repository Ownership (Nuclear Option)

If you want to completely start fresh:

1. **Create a new repository** with a different name
2. **Push your code to the new repository**
3. **Delete the old repository**
4. **Rename the new repository** to "Portfolio"

## Method 3: Using GitHub CLI (if you have it installed)

```bash
# List all collaborators
gh api repos/jwzhou1/Portfolio/collaborators

# Remove a specific collaborator (replace USERNAME)
gh api --method DELETE repos/jwzhou1/Portfolio/collaborators/USERNAME
```

## Method 4: Rewrite Git History (Advanced)

⚠️ **WARNING**: This will rewrite all commit history and remove all contributor information from commits.

```bash
# Create a new branch with clean history
git checkout --orphan clean-main

# Add all files
git add .

# Create initial commit with only your authorship
git commit -m "Initial commit"

# Delete old main branch
git branch -D main

# Rename clean branch to main
git branch -m main

# Force push to overwrite remote
git push -f origin main
```

## Important Notes:

- **Repository Settings method** is the safest and recommended approach
- **History rewrite** will permanently remove all contributor information
- **Make sure to backup your repository** before making drastic changes
- **Contributors will lose access** but commit history may still show their names unless you rewrite history

## For Your Current Issue:

The GitHub Actions deployment error is due to permissions. The scripts I created (create-gh-pages.ps1) will help create the gh-pages branch, and the updated workflow file now has proper permissions configured.
