import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          light: '#FFFFFF',
          dark: '#121212'
        },
        secondary: {
          light: '#F7F9FB',
          dark: '#1E1E1E'
        },
        text: {
          primary: '#222222',
          secondary: '#555555',
          light: '#F2F2F2',
          muted: '#CCCCCC'
        },
        brand: {
          primary: '#C5A572',    // Sioufi gold
          secondary: '#1D1D1B',  // Sioufi dark gray
          dark: '#B39361',       // Darker gold for hover
          accent: '#D4B483'      // Lighter gold for accents
        },
        status: {
          success: '#28A745',
          warning: '#FFC107',
          error: '#DC3545'
        },
        gold: {
          400: '#FFD700',
          500: '#D4AF37',
          600: '#B8860B',
        }
      }
    },
  },
  plugins: [],
} satisfies Config;