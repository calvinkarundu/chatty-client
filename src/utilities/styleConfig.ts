import { em } from 'csx'; 

export const borderRadius = { borderRadius: em(0.3) };

export const colors = {
  primary: '#4ca2cd',
  primaryLight: '#fff',
  secondary: '#eaf0f3',
  secondaryDark: '#888',
  alert: '#e7202a',
  success: '#2c963f',
};

export const fonts = {
  family: {
    roboto: `'Roboto', sans-serif`,
    sourceSansPro: `'Source Sans Pro', sans-serif`,
  },
};

export const baseHeaderFontStyles = {
  fontWeight: 900,
  fontFamily: fonts.family.roboto,
};

export const baseBodyFontStyles = {
  fontWeight: 400,
  fontFamily: fonts.family.sourceSansPro,
};

export const mediaQueries = {
  small: {
    minWidth: 0,
    maxWidth: em(39.9375),
  },
  medium: {
    minWidth: em(34),
  },
  large: {
    minWidth: em(64),
  },
};
