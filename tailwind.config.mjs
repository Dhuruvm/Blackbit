import defaultTheme from 'tailwindcss/defaultTheme';
import typography from '@tailwindcss/typography';
import tokens from './src/styles/design-tokens.json';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: tokens.colors.primary,
        accent: tokens.colors.accent,
        neutral: tokens.colors.neutral,
      },
      spacing: tokens.spacing,
      fontSize: tokens.typography.fontSize,
      fontWeight: tokens.typography.fontWeight,
      lineHeight: tokens.typography.lineHeight,
      borderRadius: tokens.borderRadius,
      boxShadow: tokens.shadows,
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        display: ['Space Grotesk', ...defaultTheme.fontFamily.sans],
      },
      transitionDuration: {
        fast: tokens.transitions.duration.fast,
        base: tokens.transitions.duration.base,
        medium: tokens.transitions.duration.medium,
        slow: tokens.transitions.duration.slow,
      },
      transitionTimingFunction: {
        'ease-default': tokens.transitions.easing.default,
        'ease-in': tokens.transitions.easing.in,
        'ease-out': tokens.transitions.easing.out,
        'ease-in-out': tokens.transitions.easing['in-out'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'slide-down': 'slideDown 0.4s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [typography],
};
