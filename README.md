# SaferStrays - Local Development Setup

## Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   - The app will be available at `http://localhost:5173`
   - The terminal will show the exact URL

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ReportForm.tsx
│   ├── Dashboard.tsx
│   ├── ResourceMap.tsx
│   ├── WhatsAppIntegration.tsx
│   └── Footer.tsx
├── App.tsx             # Main app component
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## Features

- **Animal Emergency Reporting** - Report stray animals with location and photos
- **Resource Mapping** - Find local animal welfare organizations
- **Impact Dashboard** - View rescue statistics and analytics
- **WhatsApp Integration** - Multi-language emergency reporting
- **Responsive Design** - Works on all devices

## Technology Stack

- React 18 with TypeScript
- Vite for fast development
- Tailwind CSS for styling
- Lucide React for icons

## Troubleshooting

### White/Blank Page Issues
- Make sure you ran `npm install` first
- Use `npm run dev` instead of VS Code's "Go Live"
- Check the browser console for any errors
- Ensure Node.js version is 16 or higher

### Port Issues
- If port 5173 is busy, Vite will automatically use the next available port
- Check the terminal output for the correct URL

### Build Issues
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Try `npm run build` to check for any build errors

## Contact

For issues or questions about SaferStrays, contact the development team.