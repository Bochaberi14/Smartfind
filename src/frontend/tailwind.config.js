import plugin from 'tailwindcss/plugin'

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",
        accent: "#2563EB",
        muted: "#64748B",
        surface: "#F8FAFC",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        rem: ["REM", "sans-serif"],
        oxygen: ["Oxygen", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin(({ addBase, theme }) => {
      const customColors = ['primary', 'accent', 'muted', 'surface']
      const cssVars = {}

      customColors.forEach(key => {
        const value = theme(`colors.${key}`, undefined) // <- get each color safely
        if (value) {
          cssVars[`--${key}`] = value
        }
      })

      addBase({ ':root': cssVars })
    })
  ],
}
