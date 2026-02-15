# PinSoft - Complete Software Solutions

Professional software development studio building custom applications and scalable solutions.

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- MongoDB (local or cloud instance)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pinsoft
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
# Edit .env.local with your actual values
```

4. Run the development server:
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the application.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Database**: MongoDB
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── api/            # API routes
│   ├── contact/        # Contact page
│   ├── products/       # Products page
│   ├── projects/       # Projects page
│   ├── solutions/      # Solutions page
│   └── layout.tsx      # Root layout
├── components/         # Reusable UI components
├── lib/               # Utility functions
└── styles/            # Global styles
```

## 🗂️ Pages

- **Home** (`/`) - Main landing page
- **Solutions** (`/solutions`) - Overview of services
- **Products** (`/products`) - Pre-built solutions
- **Projects** (`/projects`) - Case studies
- **About** (`/about`) - Company information
- **Contact** (`/contact`) - Contact form

## 📞 Contact

- Email: mahendra.mk174@gmail.com
- Phone: +91 7905069943

## 🚀 Deployment

This application is optimized for deployment on Vercel. Simply connect your GitHub repository to Vercel and it will automatically deploy on pushes to main branch.

### Environment Variables Required

- `MONGODB_URI` - MongoDB connection string
- `NEXT_PUBLIC_SITE_URL` - Production URL

### Custom Headers

Security headers are configured in `vercel.json`:
- Content Security Policy
- XSS Protection
- Frame Options
- Referrer Policy

## 🔐 Security

- API routes protected with validation
- Environment variables for sensitive data
- Secure headers configured
- Input sanitization

## 📊 SEO

- Optimized metadata for all pages
- Sitemap generation
- Open Graph tags
- Twitter Card tags