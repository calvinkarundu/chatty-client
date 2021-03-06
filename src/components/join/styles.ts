import { style, media, keyframes } from 'typestyle';

import {
  rgba,
  em,
  px,
  white,
  red,
  translateX,
  translateY,
  percent,
  linearGradient,
  important,
} from 'csx'; 

import * as config from '../../utilities/styleConfig';

export const fullHeight = style({
  height: percent(100),
});

export const show = style({
  display: 'block',
});

export const hide = style({
  display: 'none',
});

export const page = style({
  height: percent(100),
  width: percent(100),
});

export const pageBackground = style({
  height: percent(100),
  width: percent(100),
  position: 'fixed',
  zIndex: 1,
  top: 0,
  left: 0,
  background: linearGradient('90deg', '#67b26f', '#4ca2cd'),
});

export const joinCard = style({
  position: 'relative',
  left: percent(50),
  transform: `${translateX(percent(-50))}`,
  zIndex: 2,
  overflow: 'hidden',
  marginTop: em(7),
  marginBottom: em(3),
  backgroundColor: config.colors.primaryLight,
}, media(config.mediaQueries.medium, {
  marginTop: em(12),
}));

export const joinCardHeader = style({
  paddingTop: px(16),
  paddingBottom: px(8),
  paddingLeft: px(16),
  paddingRight: px(16),
});

export const joinCardTitle = style(
  config.baseHeaderFontStyles,
  {
    color: config.colors.primary,
    textTransform: 'uppercase',
    letterSpacing: px(2),
    fontSize: em(1.2),
    textAlign: 'center',
    margin: 0,
  }
);

export const joinCardBody = style({
  paddingTop: px(8),
  paddingBottom: px(8),
  paddingLeft: px(16),
  paddingRight: px(16),
});

export const joinForm = style({
  margin: 0,
  padding: 0,
});

export const joinInput = style(
  config.baseInputStyles,
  {
    borderRight: important('none'),
    borderTopRightRadius: px(0),
    borderBottomRightRadius: px(0),
  }
);

const borderAnimation = keyframes({
  'to': { borderColor: config.colors.alert },
});

export const inputErr = style({
  animationName: borderAnimation,
  animationDuration: '.3s',
  animationFillMode: 'forwards',
});

export const joinButton = style({
  borderLeft: 'none',
  backgroundColor: config.colors.primary,
  outline: 'none',
  paddingLeft: em(2),
  paddingRight: em(2),
  borderColor: important(`${config.colors.primary}`),
  borderTopLeftRadius: important('0'),
  borderBottomLeftRadius: important('0'),
});

export const joinFormResponseWrapper = style({
  textAlign: 'center',
  position: 'relative',
  top: px(-5),
});

export const joinFormResponse = style(
  config.baseBodyFontStyles,
  {
    color: config.colors.alert,
    fontSize: em(0.875),
  }
);

export const joinCardFooter = style({
  paddingTop: px(10),
  paddingBottom: px(10),
  paddingLeft: px(16),
  paddingRight: px(16),
  backgroundColor: config.colors.secondary,
  textAlign: 'center',
});

export const footerText = style(
  config.baseBodyFontStyles,
  {
    fontSize: em(0.875),
    color: config.colors.bodyFontLight,
    margin: px(0),
    $nest: {
      '> a': {
        color: 'inherit',
        borderBottom: '1px dotted',
        borderColor: config.colors.bodyFontLight,
        $nest: {
          '&:hover': {
            color: config.colors.primary,
            borderColor: config.colors.primary,
          }
        }
      }
    }
  }
);
