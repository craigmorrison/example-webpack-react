import { style } from '@vanilla-extract/css';

// People
export const sectionHeading = style({
  fontSize: '2rem',
  margin: '0 0 1rem 0'
});

export const peopleHeading = style({
  fontSize: '1.25rem',
  marginBottom: '0.75rem'
});

export const peopleList = style({
  listStyle: 'none',
  paddingLeft: 0,
  display: 'grid',

  '@media': {
    'screen and (min-width: 40em)': {
      gridTemplateColumns: '1fr 1fr',
      gridGap: '1rem'
    },
    'screen and (min-width: 60em)': {
      gridTemplateColumns: '1fr 1fr 1fr',
      gridGap: '1rem'
    }
  }
});

export const peopleItem = style({
  background: '#fff',
  borderRadius: '6px',
  border: '1px solid #ccc',
  padding: '1rem 1rem 0.5rem 1rem',
  marginBottom: '0.5rem'
});

// Definition List
export const definitionList = style({
  margin: '0',
  color: '#222'
});

export const defintionListItem = style({
  display: 'grid',
  gridTemplateColumns: '7em 1fr',
  margin: '0 0 0.5rem 0'
});

export const defintionListKey = style({
  margin: 0
});

export const defintionListValue = style({
  fontWeight: 'bold',
  margin: 0
});
