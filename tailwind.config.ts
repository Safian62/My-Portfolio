import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // 👇 Add your custom screen here
    screens: {
      sm: "640px",
      md: "768px",
      custom: "880px", // 👈 Custom breakpoint (min-width: 880px)
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },

    extend: {
      keyframes: {
        "rotate-line": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "rotate-line": "rotate-line 3s linear infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        "background-color": ({ opacityValue }: { opacityValue?: string }) => {
          if (opacityValue !== undefined) {
            return `rgba(var(--background-color-rgb) / ${opacityValue})`;
          }
          return `rgb(var(--background-color-rgb))`;
        },
        "primary-color": ({ opacityValue }: { opacityValue?: string }) => {
          if (opacityValue !== undefined) {
            return `rgb(6 182 212 /  ${opacityValue})`;
          }
          return `var(--primary-color)`;
        },
        "primary-dark-color": ({ opacityValue }: { opacityValue?: string }) => {
          if (opacityValue !== undefined) {
            return `rgb(19 155 145 / ${opacityValue})`;
          }
          return `var(--primary-dark-color)`;
        },
        "secondary-color": "var(--secondary-color)",

        card: "var(--card)",
        "card-foreground": "var(--card-foreground)",
        popover: "var(--popover)",
        "popover-foreground": "var(--popover-foreground)",

        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",

        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",

        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",

        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",

        destructive: "var(--destructive)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",

        "chart-1": "var(--chart-1)",
        "chart-2": "var(--chart-2)",
        "chart-3": "var(--chart-3)",
        "chart-4": "var(--chart-4)",
        "chart-5": "var(--chart-5)",

        sidebar: "var(--sidebar)",
        "sidebar-foreground": "var(--sidebar-foreground)",
        "sidebar-primary": "var(--sidebar-primary)",
        "sidebar-primary-foreground": "var(--sidebar-primary-foreground)",
        "sidebar-accent": "var(--sidebar-accent)",
        "sidebar-accent-foreground": "var(--sidebar-accent-foreground)",
        "sidebar-border": "var(--sidebar-border)",
        "sidebar-ring": "var(--sidebar-ring)",
      } as any,

      borderRadius: {
        sm: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 2px)",
        lg: "var(--radius)",
        xl: "calc(var(--radius) + 4px)",
      },
    },
  },
  plugins: [animate],
};

export default config;
