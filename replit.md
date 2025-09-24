# Overview

This is a full-stack personal portfolio website for a UX/UI designer named Alex Chen. The application showcases the designer's work, experience, and provides a contact form for potential clients. It's built as a modern single-page application with a React frontend and Express backend, featuring smooth animations, responsive design, and a clean, professional aesthetic.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming and shadcn/ui components for consistent UI elements
- **Animations**: Framer Motion for smooth page transitions and scroll-triggered animations
- **State Management**: TanStack Query for server state management and form handling with React Hook Form
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture
- **Framework**: Express.js with TypeScript for the REST API server
- **Storage**: Memory-based storage implementation with interface abstraction for future database migration
- **Validation**: Zod schemas for request validation and type safety
- **Development**: Hot module replacement and error overlay integration for development experience

## Data Layer
- **Schema Definition**: Drizzle ORM schemas defined in shared directory for type consistency
- **Database Ready**: PostgreSQL schema defined with Drizzle but currently using memory storage
- **Validation**: Shared Zod schemas between frontend and backend for consistent validation

## Component Architecture
- **Design System**: shadcn/ui component library with Radix UI primitives
- **Layout**: Modular section-based components (Hero, About, Portfolio, Experience, Contact)
- **Forms**: React Hook Form with Zod validation for the contact form
- **Responsive Design**: Mobile-first approach with Tailwind responsive utilities

## API Design
- **Contact Endpoint**: POST /api/contact for form submissions
- **Admin Endpoint**: GET /api/contact-messages for retrieving messages
- **Error Handling**: Centralized error handling with proper HTTP status codes
- **Request Logging**: Custom middleware for API request logging

## Development Features
- **Hot Reload**: Vite dev server with React Fast Refresh
- **Error Boundaries**: Runtime error modal for development debugging
- **TypeScript**: Strict type checking across the entire codebase
- **Path Aliases**: Organized imports with @ aliases for cleaner code structure

# External Dependencies

## UI and Styling
- **Tailwind CSS**: Utility-first CSS framework with custom theme configuration
- **shadcn/ui**: Pre-built component library based on Radix UI primitives
- **Radix UI**: Headless UI components for accessibility and functionality
- **Framer Motion**: Animation library for smooth transitions and interactions
- **React Icons**: Icon library for social media and interface icons

## Data and Forms
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with validation
- **Zod**: Schema validation for both frontend and backend
- **Drizzle ORM**: Type-safe database toolkit (ready for PostgreSQL integration)

## Backend Services
- **Express.js**: Web application framework for Node.js
- **Neon Database**: Serverless PostgreSQL (configured but not yet connected)
- **Connect PG Simple**: PostgreSQL session store (ready for session management)

## Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Autoprefixer

## Potential Integrations
- **Email Service**: Ready for integration with contact form submissions
- **Analytics**: Structure supports analytics integration
- **CMS**: Portfolio content could be moved to a headless CMS
- **Authentication**: Basic user schema exists for future admin features