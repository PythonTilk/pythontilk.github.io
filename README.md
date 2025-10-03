# Tilk's Portfolio

A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a sleek dark theme with animated grid background, smooth transitions, and responsive design.

## 🚀 Live Site

Visit: [tilk.tech](https://tilk.tech)

## ✨ Features

- **Modern Design**: Clean, professional layout with dark theme
- **Animated Grid Background**: Dynamic grid pattern with smooth animations
- **Responsive**: Optimized for desktop, tablet, and mobile
- **Smooth Animations**: Framer Motion powered transitions
- **Fast Loading**: Static site generation with Next.js
- **SEO Optimized**: Meta tags and structured data
- **GitHub Pages Ready**: Automatic deployment configured

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: DevIcons CDN
- **Deployment**: GitHub Pages / Vercel

## 🏃‍♂️ Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
├── public/              # Static assets (images, icons)
├── src/
│   ├── components/      # React components
│   │   ├── sections/    # Page sections (Hero, About, Projects)
│   │   └── ...          # Reusable components
│   ├── lib/            # Utility functions
│   ├── pages/          # Next.js pages
│   └── styles/         # Global styles
├── .github/workflows/   # GitHub Actions for deployment
└── ...                 # Config files
```

## 🚀 Deployment

### GitHub Pages (Automatic)
This site is configured for automatic deployment to GitHub Pages:

1. Push changes to the `main` branch
2. GitHub Actions automatically builds and deploys
3. Site is live at your GitHub Pages URL

### Manual Deployment
```bash
npm run build  # Creates static files in 'out' folder
```

## 🎨 Customization

### Update Content
- **Personal Info**: Edit `src/components/sections/index/Hero.tsx`
- **About Section**: Modify `src/components/sections/index/About.tsx`
- **Projects**: Update `src/components/sections/index/Projects.tsx`

### Styling
- **Colors**: Edit `tailwind.config.ts`
- **Fonts**: Modify `src/styles/globals.css`
- **Layout**: Adjust component files

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

Issues and pull requests are welcome!
