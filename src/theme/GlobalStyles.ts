import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  /* Custom Scrollbar Styles for the entire website */
  ::-webkit-scrollbar {
    width: 12px; /* Width of the scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors.darkOlive2}; /* Track of the scrollbar */
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.beige}; /* Color of the scroll thumb */
    border-radius: 10px; /* Make the scrollbar thumb round */
    border: 3px solid ${({ theme }) => theme.colors.darkOlive2}; /* Space around the thumb for better visuals */
  }

  /* For Firefox */
  scrollbar-width: thin; /* Defines the width of the scrollbar in Firefox */
  scrollbar-color: ${({ theme }) => theme.colors.beige} ${({ theme }) => theme.colors.darkOlive2}; /* Thumb and track colors */

  /* Styles applied to the whole page */
  html {
    scroll-behavior: smooth; /* Enable smooth scrolling */
  }

  
  @font-face {
    font-family: 'CustomFont';
    src: url('/fonts/CustomFont.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  :root {
    --darkGrey: ${({ theme }) => theme.colors.darkGrey};
    --beige: ${({ theme }) => theme.colors.beige};
    --darkOlive: ${({ theme }) => theme.colors.darkOlive};
    --mutedBrown: ${({ theme }) => theme.colors.mutedBrown};
    --darkOlive2: ${({ theme }) => theme.colors.darkOlive2};
    --lightGrey: ${({ theme }) => theme.colors.lightGrey};
  }

  body {
    background: var(--darkOlive2);
    font-family: ${({ theme }) => theme.fonts.montserrat};
    margin: 0;
  }

  .font-montserrat {
    font-family: ${({ theme }) => theme.fonts.montserrat};
  }

  .font-poppins {
    font-family: ${({ theme }) => theme.fonts.poppins};
  }
`;

export default GlobalStyles;
