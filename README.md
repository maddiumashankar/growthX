# ELEVATE Animation

A clean, minimalist SVG animation for the ELEVATE logo built with React, TypeScript and Vite.

## Brief Overview

This project showcases an animated logo sequence with synchronized movements of star and curved elements, followed by text reveal and fade-out effects. The animation is built entirely with CSS keyframes and SVG elements.

## Requirements

- Node.js v18+ 
- npm v9+

## Versions

- React: ^18.2.0
- TypeScript: ^5.0.0
- Vite: ^5.0.0

## How to Run

### Development Mode

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The dev server will start at http://localhost:5173/

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## Component Usage

```tsx
<ElevateAnimation 
  autoplay={true} 
  onAnimationComplete={() => console.log('Animation complete')}
/>
```

## Animation Features

- Star entrance with rotation and scaling
- SVG stroke drawing animations
- Diagonal fill effect for bottom shape
- Text scale-up animation
- Synchronized fade-out of all elements
```
