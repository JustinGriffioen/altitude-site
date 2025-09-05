# Altitude Intelligence - Intelligence-as-a-Service Platform

A modern Next.js application for Altitude Intelligence, providing flexible Intelligence-as-a-Service (IaaS) solutions for defense, security, commercial, and humanitarian sectors.

## 🚀 Features

- **Modern Next.js 14** with App Router and TypeScript
- **Responsive Design** with Tailwind CSS
- **Advanced Animations** using Framer Motion
- **SEO Optimized** with metadata and sitemap
- **Performance Optimized** with Next.js best practices
- **Accessibility** compliant design
- **Mobile-First** responsive approach

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & Space Grotesk

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd altitude-intelligence
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Build & Deployment

### Development
```bash
npm run dev
```

### Production Build
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Static Export (for hosting)
```bash
npm run export
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── iaas/              # IaaS solutions page
│   ├── case-studies/      # Case studies page
│   ├── careers/           # Careers page
│   ├── contact/           # Contact page
│   ├── loading.tsx        # Loading component
│   ├── not-found.tsx      # 404 page
│   ├── sitemap.ts         # Sitemap generation
│   └── robots.ts          # Robots.txt
├── components/            # Reusable components
│   ├── Navigation.tsx     # Main navigation
│   ├── Footer.tsx         # Site footer
│   ├── AnimatedCounter.tsx # Animated counter
│   ├── ScrollReveal.tsx   # Scroll animations
│   ├── HoverCard.tsx      # Hover effects
│   ├── ParallaxSection.tsx # Parallax effects
│   └── LoadingSpinner.tsx # Loading spinner
└── lib/                   # Utility functions
    └── utils.ts           # Common utilities
```

## 🎨 Design System

### Colors
- **Primary**: Blue gradient (#0284c7 to #0ea5e9)
- **Secondary**: Teal gradient (#0d9488 to #14b8a6)
- **Accent**: Yellow (#eab308)
- **Brand**: Gray scale (#0f172a to #f8fafc)

### Typography
- **Headings**: Space Grotesk
- **Body**: Inter

### Components
- **Buttons**: Primary, Secondary variants with hover effects
- **Cards**: Hover animations and gradient overlays
- **Navigation**: Sticky with backdrop blur
- **Animations**: Scroll-triggered and hover effects

## 🚀 Performance Features

- **Image Optimization**: Next.js Image component
- **Font Optimization**: Google Fonts with display swap
- **Code Splitting**: Automatic route-based splitting
- **Static Generation**: Pre-rendered pages for better SEO
- **Caching**: Optimized cache headers
- **Bundle Analysis**: Built-in bundle analyzer

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Optimized for touch interactions
- **Accessibility**: WCAG 2.1 compliant

## 🔧 Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add `page.tsx` with your component
3. Update navigation in `src/components/Navigation.tsx`
4. Add route to sitemap in `src/app/sitemap.ts`

### Styling
- Use Tailwind CSS classes
- Custom styles in `src/app/globals.css`
- Component-specific styles with CSS modules if needed

### Animations
- Use Framer Motion for complex animations
- ScrollReveal component for scroll-triggered animations
- HoverCard for interactive hover effects

## 📈 SEO Features

- **Metadata**: Dynamic meta tags for each page
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine directives
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for rich snippets

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Deploy automatically on push
3. Environment variables in Vercel dashboard

### Netlify
1. Build command: `npm run build`
2. Publish directory: `out`
3. Deploy from Git

### Static Hosting
1. Run `npm run export`
2. Upload `out` folder to your hosting provider

## 📄 License

This project is proprietary to Altitude Intelligence.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For technical support or questions, contact:
- Email: contact@altitude-intelligence.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ by the Altitude Intelligence team