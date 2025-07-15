# LeadSure - Premium Lead Generation Service

A high-converting landing page for lead generation services that provides fresh, targeted Apollo data to customers.

## Features

- **Fresh Apollo Data**: Up-to-date lead information directly from Apollo's database
- **Order Management**: Complete order processing system with multiple payment options
- **Free Trial System**: 10 free leads for new customers
- **Responsive Design**: Mobile-first approach with modern UI
- **WhatsApp Integration**: Direct customer communication
- **Legal Compliance**: Privacy policy and impressum pages for UK business

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL with Drizzle ORM
- **UI Components**: Radix UI with shadcn/ui
- **State Management**: TanStack Query
- **Build Tool**: Vite
- **Deployment**: Ready for Vercel, Railway, or Render

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL database (we recommend Neon)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/leadsure.git
cd leadsure
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cp .env.example .env
# Add your DATABASE_URL and other required variables
```

4. Run database migrations
```bash
npm run db:push
```

5. Start development server
```bash
npm run dev
```

Visit `http://localhost:5000` to see the application.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run db:push` - Push database schema changes

## Environment Variables

Create a `.env` file with:

```
DATABASE_URL=your_postgresql_connection_string
NODE_ENV=development
```

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables
4. Deploy

### Railway

1. Connect GitHub repository
2. Add environment variables
3. Deploy automatically

### Render

1. Connect GitHub repository
2. Configure build and start commands
3. Add environment variables
4. Deploy

## Project Structure

```
├── client/          # React frontend
├── server/          # Express.js backend
├── shared/          # Shared types and schemas
├── dist/            # Production build files
└── package.json
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

MIT License - see LICENSE file for details

## Support

For support, contact us via WhatsApp: +44 7537 149777