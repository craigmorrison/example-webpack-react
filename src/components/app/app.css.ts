import { style } from '@vanilla-extract/css';

export const siteWrapper = style({
  background: '#eee',
  fontFamily: 'sans-serif'
});

export const banner = style({
  padding: '1rem',
  background: '#333',
  color: '#ee3'
});

export const bannerTitle = style({
  margin: 0
});

export const siteMain = style({
  padding: '1rem'
});

export const contentInfo = style({
  padding: '1rem',
  background: '#333',
  color: '#fff'
});

export const contentInfoLink = style({
  color: '#0df',
  ':hover': {
    color: '#33f3ff'
  }
});
