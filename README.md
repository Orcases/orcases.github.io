# Frame Foundry Website

Modern, high-performance website for Frame Foundry - a creative agency specializing in brand identity, digital design, and innovative creative solutions. Built with cutting-edge technologies for optimal performance and user experience.

## 🚀 Tech Stack

- **Framework**: Astro (Static Site Generator with zero JS by default)
- **Styling**: Tailwind CSS v4
- **Components**: shadcn/ui + Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Cloudflare Pages

## 🏗️ Project Structure

```text
/
├── src/
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   └── sections/     # Page sections (Hero, Services, Contact)
│   ├── lib/              # Utilities
│   ├── pages/            # Astro pages
│   └── styles/           # Global CSS
├── public/               # Static assets
├── vc/                   # Project documentation & workspace
├── _headers              # Cloudflare Pages headers
├── wrangler.toml         # Cloudflare configuration
└── package.json
```

## 🧞 Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`       |
| `npm run build`   | Build production site to `./dist/`         |
| `npm run preview` | Preview build locally                       |

## 🚀 Deployment

### Cloudflare Pages

1. **Connect Repository**: Link your GitHub repository to Cloudflare Pages
2. **Build Settings**:
   - Build command: `npm run build`
   - Output directory: `dist`
   - Node.js version: 18+
3. **Custom Domain**: Configure `framefoundry.io` in Cloudflare Pages dashboard
4. **Auto-deploy**: Pushes to main branch automatically deploy

### Environment Variables

No environment variables required for basic deployment.

## 🎨 Brand Guidelines

- **Primary Color**: `#2563eb` (blue-600)
- **Typography**: Inter font family
- **Style**: Modern, bold, creative-forward
- **Messaging**: "Where Creativity Meets Innovation"

## 📱 Features

- ✅ **Zero JS by default** (Astro's static generation)
- ✅ **Mobile-first responsive design**
- ✅ **Smooth animations** with Framer Motion
- ✅ **Accessible components** via shadcn/ui + Radix
- ✅ **SEO optimized** with proper meta tags
- ✅ **Performance optimized** for 95+ Lighthouse scores
- ✅ **Modern UI/UX** following current design trends

## 🔧 Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Build for production: `npm run build`

## 📄 Content Management

Page content is managed through:
- **Astro components** in `src/components/sections/`
- **Static content** in component files
- **Future**: Markdown/MDX for blog posts and case studies

## 🔗 Links

- **Live Site**: https://framefoundry.io
- **Repository**: https://github.com/your-username/framefoundry.io
- **Documentation**: See `vc/docs/` directory
- **Progress Tracking**: See `vc/workspace/progress.md`

---

**Frame Foundry** - Crafting bold creative solutions that elevate brands and captivate audiences.
