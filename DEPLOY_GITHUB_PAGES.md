# Deploy to GitHub Pages 🚀

Yes! Your site is now configured to run on GitHub Pages. I've set everything up for you.

## What I Changed:

✅ **next.config.mjs** - Added static export configuration
✅ **package.json** - Added export script
✅ **.github/workflows/deploy.yml** - Created automatic deployment workflow
✅ **public/.nojekyll** - Prevents Jekyll processing

## Deployment Steps:

### Option 1: Automatic Deployment (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Setup portfolio site"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **GitHub Actions**
   - Save

3. **Wait for deployment:**
   - Go to the **Actions** tab
   - Watch the deployment workflow run
   - Once complete, your site will be live!

4. **Your site URL:**
   ```
   https://[your-username].github.io/[repo-name]/
   ```
   Or if using custom domain with CNAME:
   ```
   https://tilk.tech
   ```

### Option 2: Manual Deployment

1. **Build the site:**
   ```bash
   npm install
   npm run build
   ```

2. **The static files will be in the `out` folder**

3. **Deploy the `out` folder to GitHub Pages manually**

## Using Your Custom Domain (tilk.tech)

Since you have a CNAME file, your custom domain should work automatically!

1. **Make sure your CNAME file contains:**
   ```
   tilk.tech
   ```

2. **In your domain registrar (where you bought tilk.tech):**
   - Add a CNAME record pointing to: `[your-username].github.io`
   - Or add A records pointing to GitHub's IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```

3. **In GitHub Settings → Pages:**
   - Enter your custom domain: `tilk.tech`
   - Enable "Enforce HTTPS"

## Troubleshooting:

### Site not loading?
- Check the Actions tab for build errors
- Make sure GitHub Pages is enabled in Settings
- Wait a few minutes for DNS propagation

### Images not showing?
- Make sure images are in the `public` folder
- Check that image paths start with `/` (e.g., `/pfp.png`)

### 404 errors?
- Make sure you're using the correct URL
- Check that the build completed successfully

### Custom domain not working?
- Verify DNS settings in your domain registrar
- Wait up to 24 hours for DNS propagation
- Check that CNAME file exists in the repository root

## Testing Locally Before Deploy:

```bash
# Build the static site
npm run build

# The output will be in the 'out' folder
# You can test it with any static server, like:
npx serve out
```

## Automatic Deployments:

Every time you push to the `main` branch, GitHub Actions will:
1. Install dependencies
2. Build your site
3. Deploy to GitHub Pages
4. Your site updates automatically!

## Build Time:

- First build: ~2-3 minutes
- Subsequent builds: ~1-2 minutes

## Advantages of GitHub Pages:

✅ **Free hosting**
✅ **Automatic HTTPS**
✅ **Custom domain support**
✅ **Automatic deployments**
✅ **Fast CDN**
✅ **No server management**

## Alternative: Vercel (Even Easier!)

If you want even simpler deployment:

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Import your repository
4. Click Deploy
5. Done! (Vercel handles everything automatically)

Vercel advantages:
- Faster builds
- Better Next.js optimization
- Automatic preview deployments
- Built-in analytics

---

**Your site is ready for GitHub Pages! Just push to GitHub and enable Pages in settings.** 🎉
