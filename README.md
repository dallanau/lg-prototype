# Shipping Container Management Prototype

This is a prototype for a shipping container management system based on the provided design. It uses Ant Design components and Storybook for component development and visualization.

## Features

- Container shipping management interface
- CRUD operations for shipping items
- Status tracking and filtering
- Responsive design

## Technology Stack

- React
- TypeScript
- Ant Design
- Storybook
- Vite

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

```bash
npm install
```

### Development

```bash
# Start development server
npm run dev

# Start Storybook
npm run storybook
```

### Building

```bash
# Build the application
npm run build

# Build Storybook
npm run build-storybook
```

## Project Structure

The project follows atomic design principles:

- `atoms`: Basic building blocks like buttons, inputs, etc.
- `molecules`: Combinations of atoms like forms, search bars, etc.
- `organisms`: Complex UI components composed of molecules and atoms
- `templates`: Page layouts without specific content
- `pages`: Complete pages composed of organisms, molecules, and atoms

## Deployment

The project is configured to automatically deploy the Storybook to GitHub Pages when changes are pushed to the main branch.
