# LeadSure - Lead Generation Service

## Overview

LeadSure is a lead generation service that provides fresh, targeted Apollo data to customers. The application is built as a full-stack web application with a React frontend and Express backend, designed to handle orders for lead generation services and free trials.

**Status**: Deployed and running on Replit with database integration. Custom domain `leadsure.uk` configured with verified DNS. Comprehensive deployment documentation completed for external hosting migration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React Hook Form for form handling, TanStack Query for server state
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Storage**: In-memory storage class for development, with interface for database implementation

## Key Components

### Database Schema
- **Orders Table**: Stores customer orders with fields for contact info, Apollo filter links, lead quantities, payment methods, and pricing
- **Trials Table**: Stores free trial requests with customer contact information and business type
- Both tables include status tracking and timestamp fields

### API Endpoints
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get specific order
- `POST /api/trials` - Create trial request
- `GET /api/trials` - Get all trials
- `GET /api/trials/:id` - Get specific trial

### Frontend Components
- **Landing Page**: Single-page marketing site with sections for hero, pain points, solutions, pricing, forms, and FAQ
- **Order Form**: Collects customer information and order details with validation
- **Trial Form**: Simplified form for free trial requests
- **UI Components**: Comprehensive shadcn/ui component library for consistent design

## Data Flow

1. **Customer Journey**: Landing page → Order/Trial form → Form submission → Backend processing
2. **Form Validation**: Client-side validation using react-hook-form with Zod schemas
3. **API Communication**: TanStack Query handles API requests with error handling and loading states
4. **Data Persistence**: Orders and trials stored in PostgreSQL via Drizzle ORM
5. **Response Handling**: Toast notifications for success/error feedback

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: Serverless PostgreSQL database connection
- **drizzle-orm**: Type-safe database ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Headless UI components for accessibility
- **react-hook-form**: Form handling with validation
- **zod**: Schema validation for type safety

### Development Tools
- **Vite**: Build tool with React plugin and development server
- **TypeScript**: Static type checking
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast bundling for production builds

## Deployment Strategy

### Development
- **Local Development**: Vite dev server with HMR for frontend, tsx for backend hot reload
- **Database**: Uses DATABASE_URL environment variable for PostgreSQL connection
- **Build Process**: Separate builds for client (Vite) and server (ESBuild)

### Production
- **Frontend**: Static files served from dist/public directory
- **Backend**: Bundled Node.js application with ESM modules
- **Database**: Serverless PostgreSQL (Neon) with connection pooling
- **Environment**: Production mode with optimized builds
- **SSL/HTTPS**: Configured for custom domain SSL with automatic HTTPS redirect and security headers
- **Proxy Trust**: Enabled for SSL termination handling
- **Custom Domain**: leadsure.uk configured with verified DNS
- **Deployment**: Live on Replit with autoscale

### Key Configuration
- **Monorepo Structure**: Client, server, and shared code in separate directories
- **Path Aliases**: Configured for clean imports (@/, @shared/)
- **Database Migrations**: Drizzle Kit for schema management
- **Type Safety**: Shared TypeScript types between frontend and backend

The application follows a modern full-stack architecture with emphasis on type safety, developer experience, and scalable data handling. The business model focuses on providing fresh Apollo lead data with a simple ordering system and trial offerings.