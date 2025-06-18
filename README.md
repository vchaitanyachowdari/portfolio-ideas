# Portfolio Ideas 💜

<img width="1470" alt="Screenshot 2025-06-18 at 11 26 31 AM" src="https://github.com/user-attachments/assets/cea62459-3a72-4443-9778-af30a795d9f7" />

A curated collection of 130+ stunning developer and designer portfolios to inspire your next project.

## 🌟 Features

- **Curated Collection**: Over 130 handpicked portfolio websites from top developers and designers worldwide
- **Technology Filters**: Filter portfolios by technology stack to find inspiration relevant to your skills
- **Source Code Access**: Direct links to GitHub repositories to study the code behind these amazing portfolios
- **Regular Updates**: New portfolios added weekly to keep the inspiration fresh and current
- **Responsive Design**: Beautiful, mobile-first design that works on all devices
- **Modern Tech Stack**: Built with Next.js, TailwindCSS, and Framer Motion

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/your-username/portfolio-ideas.git
cd portfolio-ideas
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

\`\`\`
portfolio-ideas/
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   ├── contact/                  # Contact page with form
│   ├── documentation/            # Documentation page
│   ├── portfolio-table/          # Portfolio collection page
│   ├── privacy-policy/           # Privacy policy page
│   ├── terms-of-service/         # Terms of service page
│   ├── contribution-guidelines/  # Contribution guidelines page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Landing page
├── components/                   # Reusable React components
│   ├── ui/                      # shadcn/ui components
│   ├── header.tsx               # Navigation header
│   ├── hero-section.tsx         # Landing page hero
│   ├── feature-section.tsx      # Features showcase
│   ├── cta-section.tsx          # Call-to-action section
│   ├── footer.tsx               # Site footer
│   └── portfolio-table.tsx      # Portfolio grid/table
├── lib/                         # Utility functions and data
│   ├── mock-data.ts            # Sample portfolio data
│   └── utils.ts                # Utility functions
├── public/                      # Static assets
└── tailwind.config.ts          # Tailwind CSS configuration
\`\`\`

## 🎨 Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **TypeScript**: Full type safety
- **Deployment**: [Vercel](https://vercel.com/)

## 📱 Pages

### Landing Page (`/`)
- Hero section with animated elements
- Feature showcase
- Call-to-action section
- Responsive design with smooth animations

### Portfolio Collection (`/portfolio-table`)
- Filterable grid of portfolio websites
- Search functionality
- Technology-based filtering
- Pagination support
- Direct links to live sites and source code

### About (`/about`)
- Team member profiles with social links
- Company story and mission
- Interactive animations

### Contact (`/contact`)
- Contact form with validation
- Contact information
- FAQ section
- Form submission handling

### Documentation (`/documentation`)
- Comprehensive usage guide
- API reference
- Code examples
- Tabbed interface for easy navigation

### Legal Pages
- Privacy Policy (`/privacy-policy`)
- Terms of Service (`/terms-of-service`)
- Contribution Guidelines (`/contribution-guidelines`)

## 🤝 Contributing

We welcome contributions from developers of all skill levels! Here's how you can help:

### Submitting Portfolios

1. Visit our [Contact page](/contact)
2. Select "Portfolio Submission" as the subject
3. Include:
   - Portfolio owner's name
   - Live URL
   - GitHub repository (if available)
   - Technologies used
   - Brief description

### Code Contributions

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

### Reporting Issues

Found a bug or have a feature request? Please [open an issue](https://github.com/your-username/portfolio-ideas/issues) on GitHub.

## 📋 Submission Criteria

We're looking for portfolios that demonstrate:

- **Design Quality**: Good design principles and visual appeal
- **Technical Implementation**: Well-structured code and best practices
- **Originality**: Creative and unique approaches
- **Accessibility**: Following accessibility best practices
- **Performance**: Fast loading and optimized

## 🔧 Development

### Available Scripts

\`\`\`bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Type checking
npm run type-check
\`\`\`

### Environment Variables

Create a `.env.local` file in the root directory:

\`\`\`env
# Add any environment variables here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

## 🌐 API Reference

Portfolio Ideas provides a public API for developers:

### Endpoints

- `GET /api/portfolios` - Get all portfolios with pagination
- `GET /api/portfolios/:id` - Get specific portfolio details
- `GET /api/technologies` - Get available technology filters

### Example Usage

\`\`\`javascript
// Fetch all portfolios
const response = await fetch('/api/portfolios');
const portfolios = await response.json();

// Filter by technology
const reactPortfolios = await fetch('/api/portfolios?tech=React');
\`\`\`

## 📊 Analytics & Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for excellent user experience
- **SEO**: Fully optimized with meta tags and structured data
- **Accessibility**: WCAG 2.1 AA compliant

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Deploy to Other Platforms

The app can be deployed to any platform that supports Next.js:

- [Netlify](https://netlify.com)
- [Railway](https://railway.app)
- [DigitalOcean App Platform](https://www.digitalocean.com/products/app-platform)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- All the amazing developers and designers whose portfolios inspire us
- The open-source community for the incredible tools and libraries
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Framer Motion](https://www.framer.com/motion/) for smooth animations

## 📞 Support

- 📧 Email: hello@portfolioideas.com
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/portfolio-ideas/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/your-username/portfolio-ideas/discussions)

## 🗺️ Roadmap

- [ ] User authentication and profiles
- [ ] Portfolio submission dashboard
- [ ] Advanced filtering options
- [ ] Portfolio rating system
- [ ] Blog section with design articles
- [ ] Mobile app
- [ ] API rate limiting and authentication
- [ ] Portfolio analytics

---

<div align="center">
  <p>Made with 💜 by the Portfolio Ideas team</p>
  <p>
    <a href="https://github.com/your-username/portfolio-ideas">⭐ Star us on GitHub</a> •
    <a href="/contact">📧 Get in touch</a> •
    <a href="https://twitter.com/portfolioideas">🐦 Follow us</a>
  </p>
</div>
