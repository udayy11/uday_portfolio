#!/bin/bash

# 🚀 Quick Start Script for Portfolio Development

echo "======================================"
echo "🚀 Developer Portfolio - Quick Start"
echo "======================================"
echo ""

# Check Node.js installation
echo "✓ Checking Node.js installation..."
node --version

# Check npm installation
echo "✓ Checking npm installation..."
npm --version

# Install dependencies if not already installed
if [ ! -d "node_modules" ]; then
  echo ""
  echo "📦 Installing dependencies..."
  npm install
else
  echo "✓ Dependencies already installed"
fi

echo ""
echo "======================================"
echo "🎉 Setup Complete!"
echo "======================================"
echo ""
echo "📝 Next Steps:"
echo "1. Start the development server: npm start"
echo "2. Open http://localhost:3000 in your browser"
echo "3. Edit files in src/ to customize your portfolio"
echo "4. Changes will reload automatically"
echo ""
echo "📚 Documentation:"
echo "• GETTING_STARTED.md - Quick start guide"
echo "• SETUP.md - Detailed setup guide"
echo "• README.md - Complete documentation"
echo "• DEPLOYMENT.md - How to deploy"
echo ""
echo "🎨 Key Files to Edit:"
echo "• src/components/Hero.jsx - Your name and intro"
echo "• src/components/Projects.jsx - Your projects"
echo "• src/components/Experience.jsx - Your experience"
echo ""
echo "🚀 Ready to start?"
echo "Run: npm start"
echo ""
