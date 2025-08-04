#!/bin/bash

# Build the project
echo "Building project..."
npm run build

# Add all changes
echo "Adding changes to git..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Update portfolio with latest changes"

# Push to GitHub
echo "Pushing to GitHub..."
git push origin liquid-glass-portfolio

echo "Deployment initiated! Check GitHub Actions for deployment status."
echo "Your portfolio will be available at: https://soham-chousalkar.github.io/Portfolio/" 