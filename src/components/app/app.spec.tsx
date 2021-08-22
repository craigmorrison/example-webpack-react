import { render } from '@testing-library/react';
import App from './app';

describe('app', () => {
  it('matches the snapshot', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toMatchSnapshot();
  });
});
