#!/bin/bash

# Script to create gh-pages branch for GitHub Pages deployment

echo "Creating gh-pages branch..."

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

echo "gh-pages branch created successfully!"
echo "You can now run your GitHub Actions workflow."
