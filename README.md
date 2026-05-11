
  # Portfolio UI for Web

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. This project is a Figma-to-code implementation of a professional portfolio design.

## 📋 Overview

This is a complete portfolio web application featuring multiple sections to showcase your skills, projects, experience, and contact information. The application is built using modern web technologies and follows best practices for performance and accessibility.

**Original Figma Design:** [Portfolio UI for Web](https://www.figma.com/design/4vMNAoMQhMpxbJZs36tZ0Z/Portfolio-UI-for-Web)

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 18 |
| **Build Tool** | Vite 6 |
| **Styling** | Tailwind CSS 4 |
| **UI Components** | Radix UI Primitives |
| **Animations** | Motion (Framer Motion) |
| **Icons** | Lucide React |
| **Forms** | React Hook Form |
| **Routing** | React Router |
| **Package Manager** | pnpm |

## 📁 Project Structure

```
portfolio-ui-for-web/
├── src/
│   ├── app/
│   │   ├── App.tsx                 # Main application component
│   │   └── components/
│   │       ├── Navigation.tsx      # Navigation header
│   │       ├── Hero.tsx            # Hero/landing section
│   │       ├── About.tsx           # About me section
│   │       ├── Skills.tsx          # Skills showcase
│   │       ├── Projects.tsx        # Projects portfolio
│   │       ├── Experience.tsx      # Work experience
│   │       ├── Contact.tsx         # Contact form
│   │       ├── Footer.tsx          # Footer section
│   │       └── ui/                 # Reusable UI components
│   │           ├── button.tsx
│   │           ├── card.tsx
│   │           ├── dialog.tsx
│   │           ├── accordion.tsx
│   │           └── ... (30+ Radix UI components)
│   ├── styles/
│   │   ├── index.css               # Global styles
│   │   ├── tailwind.css            # Tailwind imports
│   │   ├── theme.css               # Theme variables
│   │   └── fonts.css               # Font definitions
│   └── main.tsx                    # Application entry point
├── index.html                      # HTML entry point
├── vite.config.ts                  # Vite configuration
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.mjs              # PostCSS configuration
└── package.json                    # Dependencies
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Install dependencies using pnpm (recommended)
pnpm install

# Or using npm
npm install
```

### Development

```bash
# Start development server
pnpm dev

# Or using npm
npm run dev
```

The development server will start at `http://localhost:5173`

### Build

```bash
# Build for production
pnpm build

# Or using npm
npm run build
```

## 📱 Features

- **Responsive Design** - Works on all screen sizes (mobile, tablet, desktop)
- **Smooth Animations** - Fluid transitions using Motion library
- **Accessible Components** - Built with Radix UI for accessibility
- **Modern UI** - Clean, professional design with Tailwind CSS
- **Interactive Elements** - Hover effects, transitions, and micro-interactions

## 🎨 UI Components

The project includes 30+ pre-built UI components from Radix UI:

- Buttons, Cards, Badges
- Dialogs, Modals, Drawers
- Forms, Inputs, Labels
- Navigation menus
- Accordions, Tabs, Toggles
- Sliders, Progress bars
- And many more...

## 📄 License

This project is for demonstration purposes. The original design belongs to Figma.

---

Built with ❤️ using React, Vite, and Tailwind CSS
  