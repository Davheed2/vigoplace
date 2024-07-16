/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        benefit: "800px",
        benefit2: "806px",
        benefit3: "866px",
        benefit4: "900px",
        benefit5: "1030px",
        benefit6: "1265px",
        benefit7: "1365px",
        benefit8: "1508px",
        custom: "900px",
        hero: "1450px",
        hero2: "1740px",
      },
      backgroundImage: {
        "hero-pattern":
          // "url('/img/noise-pattern-with-subtle-cross-lines.png')",
          "url('/img/BG.png')",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        theme: "hsl(var(--theme))",
        white: "hsl(var(--white))",
        black: "hsl(var(--black))",
        heading: "hsl(var(--heading))",
        businessimage: "hsl(var(--businessimage))",
        financeimage: "hsl(var(--financeimage))",
        howcard1: "hsl(var(--howcard1))",
        howcard2: "hsl(var(--howcard2))",
        howcard3: "hsl(var(--howcard3))",
        social: "hsl(var(--social))",
        socialbackground: "hsl(var(--socialbackground))",
        pricingbackground1: "hsl(var(--pricingbackground1))",
        pricingbackground2: "hsl(var(--pricingbackground2))",
        pricingbackground3: "hsl(var(--pricingbackground3))",
        pricingbackground4: "hsl(var(--pricingbackground4))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        ubuntu: ["var(--font-ubuntu)"],
        nunito: ["var(--font-nunito)"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
