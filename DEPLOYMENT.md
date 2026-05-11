# 📝 Deployment Guide

Complete guide to deploy your portfolio website to various platforms.

## 🚀 Vercel (Recommended - Fastest Setup)

### Method 1: GitHub Integration (Automatic Deployment)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Sign Up" → Connect GitHub
   - Click "New Project"
   - Select your portfolio repository
   - Accept default settings
   - Click "Deploy"

3. **Add Custom Domain**
   - Go to project settings
   - Click "Domains"
   - Add your custom domain
   - Update DNS records (Vercel will provide instructions)

### Method 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from project directory
cd portfolio
vercel

# Follow the prompts and select your settings
```

## 🌐 Netlify

### Method 1: Drag & Drop

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Upload to Netlify**
   - Go to [netlify.com/drop](https://netlify.com/drop)
   - Drag and drop the `build/` folder
   - Your site is live!

### Method 2: GitHub Integration

1. **Push to GitHub** (see Vercel steps)

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub
   - Choose your repository
   - Use these build settings:
     - Build command: `npm run build`
     - Publish directory: `build`
   - Click "Deploy"

3. **Configure**
   - Go to Site settings
   - Under "Build & deploy" → "Edit settings"
   - Verify build settings
   - Click "Deploy site"

## 🔗 GitHub Pages

### Setup Steps

1. **Update package.json**
   ```json
   "homepage": "https://yourusername.github.io/portfolio",
   ```

2. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Update Scripts in package.json**
   ```json
   "scripts": {
     "start": "react-scripts start",
     "build": "react-scripts build",
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **GitHub Settings**
   - Go to repository → Settings → Pages
   - Under "Source" select `gh-pages` branch
   - Your site will be available at `https://yourusername.github.io/portfolio`

## ☁️ AWS S3 + CloudFront

### Steps

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Create S3 bucket**
   - Go to [AWS S3](https://s3.console.aws.amazon.com)
   - Create new bucket with your domain name
   - Enable static website hosting
   - Set index document to `index.html`

3. **Upload files**
   - Upload all files from `build/` folder
   - Make files public

4. **Setup CloudFront** (optional, for HTTPS)
   - Go to CloudFront
   - Create distribution pointing to S3 bucket
   - Set default root object to `index.html`

5. **Route 53** (optional, for custom domain)
   - Go to Route 53
   - Create hosted zone
   - Add DNS records

## 💻 Shared Hosting (cPanel)

### Steps

1. **Build locally**
   ```bash
   npm run build
   ```

2. **Connect via FTP**
   - Use FileZilla or similar FTP client
   - Connect with credentials from hosting provider

3. **Upload files**
   - Go to `public_html/` directory
   - Upload all files from `build/` folder
   - Make sure `index.html` is in `public_html/`

4. **Configure .htaccess**
   Create `.htaccess` file in `public_html/`:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

## 🐳 Docker Deployment

### Dockerfile

Create `Dockerfile`:
```dockerfile
# Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/build ./build
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
```

### Build and Run

```bash
# Build image
docker build -t my-portfolio .

# Run container
docker run -p 3000:3000 my-portfolio
```

### Deploy to Container Registry

```bash
# Tag image
docker tag my-portfolio:latest yourusername/my-portfolio:latest

# Push to Docker Hub
docker push yourusername/my-portfolio:latest
```

## 📦 Environment-Specific Builds

### Production Build

```bash
npm run build
```

This creates an optimized build with:
- Minified JavaScript and CSS
- Optimized images
- Dead code elimination
- Hash-based file caching

### Development Build (local testing)

```bash
npm start
```

For testing production build locally:
```bash
npm run build
npx serve -s build
```

## 🔍 Pre-Deployment Checklist

- [ ] All personal information updated
- [ ] All links tested and working
- [ ] Mobile responsive on all devices
- [ ] Images optimized (< 500KB each)
- [ ] No console errors
- [ ] Meta tags updated in `public/index.html`
- [ ] Favicon configured
- [ ] Performance tested (Lighthouse)
- [ ] Build completes without errors
- [ ] Contact form tested

## 📊 Performance Optimization

### Image Optimization

```bash
# Install image optimization tool
npm install -D sharp-cli

# Optimize images
sharp public/images/*.png -o optimized/
```

### Bundle Analysis

```bash
npm install -D source-map-explorer

# Analyze bundle
npm run build
npx source-map-explorer 'build/static/js/*.js'
```

### Lighthouse Testing

1. Open DevTools (F12)
2. Go to Lighthouse tab
3. Click "Analyze page load"
4. Fix issues reported

## 🛡️ Security Best Practices

1. **Update Dependencies**
   ```bash
   npm audit
   npm audit fix
   ```

2. **HTTPS**
   - Always use HTTPS
   - Vercel/Netlify provide free SSL

3. **Environment Variables**
   - Never commit `.env` files
   - Use `.env.example` as template
   - Store sensitive data securely

4. **Headers**
   Add `vercel.json` for security headers:
   ```json
   {
     "headers": [
       {
         "source": "/(.*)",
         "headers": [
           {
             "key": "X-Content-Type-Options",
             "value": "nosniff"
           }
         ]
       }
     ]
   }
   ```

## 🐛 Troubleshooting Deployment

### Issue: Build fails
**Solution:**
```bash
rm -rf build node_modules
npm install
npm run build
```

### Issue: Blank page after deployment
**Solution:**
- Check browser console for errors
- Verify `public/index.html` exists
- Check `homepage` in package.json
- Verify all imports are correct

### Issue: Images not loading
**Solution:**
- Ensure images in `public/` folder
- Use absolute paths starting with `/`
- Check file paths are case-sensitive

### Issue: Routing issues
**Solution:**
- Create `_redirects` file:
  ```
  /* /index.html 200
  ```
- Or create `vercel.json` with rewrites

### Issue: Slow performance
**Solution:**
- Optimize images
- Analyze bundle size
- Enable caching
- Use CDN

## 📱 Testing Before Deployment

### Local Testing
```bash
npm run build
npm install -g serve
serve -s build -l 3000
```

### Device Testing
- Test on actual mobile devices
- Test on different browsers
- Test on different screen sizes
- Test all interactive features

### Network Testing
- Test on slow 3G (DevTools)
- Test with images disabled
- Test with JavaScript disabled

## 📈 Post-Deployment

### Monitor Performance
- Set up Google Analytics
- Monitor error tracking
- Watch loading times
- Track user behavior

### Maintenance
- Regular dependency updates
- Security patches
- Content updates
- Backup regularly

### Analytics Setup
1. Create Google Analytics account
2. Get tracking ID
3. Add to `public/index.html`:
   ```html
   <!-- Google Analytics -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'YOUR_ID');
   </script>
   ```

---

**Your portfolio is now live! Keep it updated with new projects and achievements! 🎉**
