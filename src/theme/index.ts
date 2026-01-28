import { createSystem, defaultConfig, defineRecipe } from "@chakra-ui/react";

const headingRecipe = defineRecipe({
  variants: {
    as: {
      h1: { fontSize: { base: "3xl", md: "5xl" }, lineHeight: "1.2" }, // 30 → 60
      h2: { fontSize: { base: "3xl", md: "4xl" }, lineHeight: "1.2" }, // 30 → 48
      h3: { fontSize: { base: "2xl", md: "3xl" }, lineHeight: "1.2" }, // 24 → 30
      h4: { fontSize: { base: "xl", md: "2xl" }, lineHeight: "1.2" }, // 20 → 24
      h5: { fontSize: { base: "lg", md: "xl" }, lineHeight: "1.2" }, // 18 → 20
      h6: { fontSize: { base: "md", md: "lg" }, lineHeight: "1.2" }, // 16 → 18
    },
  },
});

const textRecipe = defineRecipe({
  variants: {
    textStyle: {
      "size-3xl": { fontSize: { base: "xl", md: "3xl" }, lineHeight: "base" }, // Defined: 20px - 30px
      "size-2xl": { fontSize: { base: "lg", md: "2xl" }, lineHeight: "base" }, // Defined: 18px - 24px
      "size-xl": { fontSize: { base: "md", md: "xl" }, lineHeight: "base" }, // Defined: 16px - 20px
      "size-lg": { fontSize: { base: "sm", md: "lg" }, lineHeight: "base" }, // Defined: 14px - 18px
      "size-md": { fontSize: "md", lineHeight: "shorter" }, // Fixed: 16px
      "size-sm": { fontSize: "sm", lineHeight: "shorter" }, // Fixed: 14px
      "size-xs": { fontSize: "xs", lineHeight: "shorter" }, // Fixed: 12px
    },
  },
});

const system = createSystem(defaultConfig, {
  globalCss: {
    body: {
      bg: "brand.bgGray",
      color: "brand.secondary",
      fontFamily: "body",
      margin: 0,
      padding: 0,
    },
  },

  theme: {
    tokens: {
      colors: {
        brand: {
          primary: { value: "#266F5D" },
          secondary: { value: "#1f1e23" },
          warning: { value: "#ffd70a" },
          bgGray: { value: "#f2f2f2" },
          black: { value: "#000000" },
          white: { value: "#ffffff" },
        },
      },

      fonts: {
        heading: {
          value: "ui-sans-serif, system-ui, sans-serif",
        },
        body: {
          value: "ui-sans-serif, system-ui, sans-serif",
        },
      },

      fontSizes: {
        xs: { value: "12px" },
        sm: { value: "14px" },
        md: { value: "16px" },
        lg: { value: "18px" },
        xl: { value: "20px" },
        "2xl": { value: "24px" },
        "3xl": { value: "30px" },
        "4xl": { value: "48px" },
        "5xl": { value: "60px" },
      },
    },

    recipes: {
      heading: headingRecipe,
      text: textRecipe,
    },
  },
});

export default system;
