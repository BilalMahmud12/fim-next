export const deviceSize = {
  xs: 425,
  sm: 768,
  md: 1024,
  lg: 1440,
};

export const media = {
  mobile: `@media only screen and (min-width: ${deviceSize.xs}px)`,
  tablet: `@media only screen and (min-width: ${deviceSize.sm}px)`,
  desktop: `@media only screen and (min-width: ${deviceSize.md}px)`,
  largeDesktop: `@media only screen and (min-width: ${deviceSize.lg}px)`,
};

export const layoutConstant = {
  headerHeight: "80px",
  mobileNavHeight: "64px",
  containerWidth: "1200px",
  mobileHeaderHeight: "64px",
  grocerySidenavWidth: "280px",
};