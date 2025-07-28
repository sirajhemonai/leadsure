# LeadSure - Premium Lead Generation Service

A high-converting landing page for lead generation services that provides fresh, targeted Apollo data to customers. Built with React, Node.js, and PostgreSQL for reliable performance and scalability.

![LeadSure Landing Page](https://github.com/yourusername/leadsure/raw/main/preview.png)

## Features

- **Fresh Apollo Data**: Real-time lead scraping from Apollo using customer's custom filters
- **Order Management**: Complete order processing with pricing calculator (starting at $5/1000 leads)
- **Free Trial System**: 100 free leads for new customers to test service quality
- **Payment Integration**: Multiple payment methods (Wise, Binance, Bank Transfer)
- **WhatsApp Integration**: Direct customer communication for payment and support
- **Responsive Design**: Mobile-first approach optimized for conversions
- **Legal Compliance**: GDPR-compliant privacy policy and impressum for UK business
- **Fast Delivery**: Lead delivery within hours, not days

## Tech Stack

### Frontend
- **React 18** with TypeScript for type safety
- **Tailwind CSS** with shadcn/ui components for modern design
- **Vite** for fast development and optimized builds
- **TanStack Query** for efficient API state management
- **React Hook Form** with Zod validation
- **Wouter** for lightweight client-side routing
- **Framer Motion** for smooth animations

### Backend
- **Node.js 20+** with Express.js framework
- **TypeScript** for full-stack type safety
- **Drizzle ORM** with PostgreSQL database
- **ESBuild** for production bundling
- **Express Session** for user management

### Database
- **PostgreSQL** (Neon Database recommended for serverless)
- **Drizzle Kit** for schema migrations
- **Connection pooling** for optimal performance

### UI/UX
- **77 Production Dependencies** including Radix UI components
- **Mobile-responsive** design with touch-friendly forms
- **Dark/Light mode** support with theme persistence
- **Accessibility** compliant with WCAG guidelines

## 🚀 Quick Start

### Prerequisites

- **Node.js 20+** (18+ minimum)
- **PostgreSQL database** (Neon Database recommended for serverless deployment)
- **Git** for version control

### Local Development Setup

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/leadsure.git
cd leadsure
```

2. **Install all dependencies** (77 production + dev packages)
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` with your database credentials:
```bash
# Required: PostgreSQL connection string
DATABASE_URL=postgresql://username:password@host:port/database

# Environment setting
NODE_ENV=development

# Optional: Individual connection details (auto-extracted from DATABASE_URL)
PGHOST=your-db-host
PGPORT=5432
PGUSER=your-username
PGPASSWORD=your-password
PGDATABASE=leadsure
```

4. **Initialize database schema**
```bash
npm run db:push
```

5. **Start development server**
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

### Verify Installation

- ✅ Frontend loads without errors
- ✅ Order form validation works
- ✅ Trial form submits successfully
- ✅ Database connection established
- ✅ API endpoints respond correctly

## 📋 Available Scripts

| Script | Description | Usage |
|--------|-------------|--------|
| `npm run dev` | Start development server with hot reload | Development |
| `npm run build` | Build frontend + backend for production | Pre-deployment |
| `npm run start` | Start production server | Production |
| `npm run check` | TypeScript type checking | CI/CD |
| `npm run db:push` | Push database schema changes | Database updates |

## 🌍 Production Deployment

### Option 1: Vercel (Recommended)

**Prerequisites:**
- GitHub repository
- Neon Database (or other PostgreSQL provider)

**Steps:**

1. **Prepare your repository**
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

2. **Create production database**
- Sign up at [Neon](https://neon.tech)
- Create new project
- Copy the DATABASE_URL from connection details

3. **Deploy to Vercel**
- Visit [vercel.com](https://vercel.com)
- Import your GitHub repository
- Configure environment variables:
  ```
  DATABASE_URL=postgresql://user:pass@host/db?sslmode=require
  NODE_ENV=production
  ```

4. **Initialize database**
```bash
# After deployment, run once to create tables
npm run db:push
```

5. **Verify deployment**
- Test order form submission
- Verify trial form functionality
- Check WhatsApp integration links

### Option 2: Railway

**Quick Deploy:**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway add --database postgresql
railway up
```

**Environment Setup:**
- Railway auto-provisions PostgreSQL
- Add any additional environment variables in dashboard
- Run `railway run npm run db:push` for schema

### Option 3: Render

**Manual Deploy:**
1. Connect GitHub repository to Render
2. Choose "Web Service"
3. Configure:
   - **Build Command:** `npm run build`
   - **Start Command:** `npm run start`
   - **Environment:** Add DATABASE_URL

**Database Setup:**
- Create PostgreSQL instance on Render
- Connect via internal DATABASE_URL
- Run migrations via Render Shell

### Option 4: Custom VPS/Server

**Server Requirements:**
- Ubuntu 20.04+ or similar
- Node.js 20+
- PostgreSQL 13+
- Nginx (recommended)
- SSL certificate

**Deployment Script:**
```bash
# Server setup
sudo apt update && sudo apt install -y nodejs npm postgresql nginx
sudo ufw allow 80,443,22

# Application setup
git clone https://github.com/yourusername/leadsure.git
cd leadsure
npm install
npm run build

# Database setup
sudo -u postgres createdb leadsure
sudo -u postgres createuser --pwprompt leadsure_user

# Environment setup
cp .env.example .env
# Edit .env with production values

# Initialize database
npm run db:push

# Start with PM2
npm install -g pm2
pm2 start dist/index.js --name leadsure
pm2 startup
pm2 save
```

## 📁 Project Structure

```
leadsure/
├── 📂 client/                    # React frontend application
│   ├── 📂 src/
│   │   ├── 📂 components/        # Reusable UI components
│   │   ├── 📂 pages/            # Route-based page components
│   │   ├── 📂 hooks/            # Custom React hooks
│   │   ├── 📂 lib/              # Utility functions and configs
│   │   ├── App.tsx              # Main app component with routing
│   │   ├── main.tsx             # React app entry point
│   │   └── index.css            # Global styles and Tailwind
│   └── index.html               # HTML template
├── 📂 server/                   # Express.js backend API
│   ├── index.ts                 # Main server entry point
│   ├── routes.ts                # API route definitions
│   ├── storage.ts               # Database interface and implementation
│   ├── db.ts                    # Database connection setup
│   └── vite.ts                  # Vite development integration
├── 📂 shared/                   # Shared TypeScript types
│   └── schema.ts                # Database schema and validation
├── 📂 dist/                     # Production build output
│   ├── 📂 public/              # Built frontend assets
│   └── index.js                 # Built backend server
├── 📂 attached_assets/          # User-provided assets
├── components.json              # shadcn/ui configuration
├── drizzle.config.ts           # Database ORM configuration
├── vercel.json                  # Vercel deployment config
├── package.json                 # Dependencies and scripts
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── .env.example                 # Environment variables template
```

## 🔧 Database Schema

The application uses PostgreSQL with Drizzle ORM:

```sql
-- Orders table: Customer order tracking
CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  whatsapp_number VARCHAR(20) NOT NULL,
  apollo_filter_link TEXT NOT NULL,
  number_of_leads INTEGER NOT NULL,
  payment_method VARCHAR(50) NOT NULL,
  additional_requirements TEXT,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Trials table: Free trial request tracking
CREATE TABLE trials (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  whatsapp_number VARCHAR(20) NOT NULL,
  apollo_filter_link TEXT NOT NULL,
  business_type VARCHAR(255) NOT NULL,
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

## 🐛 Troubleshooting

### Common Issues

**Database Connection Failed**
```bash
# Check your DATABASE_URL format
DATABASE_URL=postgresql://username:password@host:port/database?sslmode=require

# Test connection
npm run db:push
```

**Build Errors**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Check TypeScript errors
npm run check
```

**Production Deployment Issues**
```bash
# Verify all environment variables are set
echo $DATABASE_URL
echo $NODE_ENV

# Check build output
npm run build
ls -la dist/
```

**WhatsApp Links Not Working**
- Verify phone number format: +44XXXXXXXXXX
- Test WhatsApp Business API compatibility
- Check URL encoding in contact links

## 🔐 Environment Variables Reference

| Variable | Required | Description | Example |
|----------|----------|-------------|---------|
| `DATABASE_URL` | ✅ | PostgreSQL connection string | `postgresql://user:pass@host:5432/db` |
| `NODE_ENV` | ✅ | Environment mode | `production` or `development` |
| `PGHOST` | ⚪ | Database host (auto-extracted) | `ep-cool-math-123456.us-east-1.aws.neon.tech` |
| `PGPORT` | ⚪ | Database port (auto-extracted) | `5432` |
| `PGUSER` | ⚪ | Database username (auto-extracted) | `username` |
| `PGPASSWORD` | ⚪ | Database password (auto-extracted) | `password123` |
| `PGDATABASE` | ⚪ | Database name (auto-extracted) | `leadsure` |

## 📈 Performance & Scaling

- **Frontend**: Static files served via CDN
- **Backend**: Stateless API designed for horizontal scaling
- **Database**: Connection pooling enabled for high concurrency
- **Caching**: TanStack Query provides client-side caching
- **Build Size**: Optimized bundle with tree-shaking

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow TypeScript strict mode
- Use Prettier for code formatting
- Write meaningful commit messages
- Test thoroughly before submitting PR
- Update documentation for new features

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 📞 Support

**Business Inquiries:**
- WhatsApp: +44 19192 01192
- Email: support@leadsure.uk

**Technical Support:**
- GitHub Issues: [Create Issue](https://github.com/yourusername/leadsure/issues)
- Documentation: [Wiki](https://github.com/yourusername/leadsure/wiki)

---

Built with ❤️ for lead generation professionals. Ready to deploy to production!