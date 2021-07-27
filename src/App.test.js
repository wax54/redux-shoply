import { render } from '@testing-library/react';
import { renderWithRedux } from './testHelpers';
import App from './App';

test("doesn't Blow Up", () => {
  renderWithRedux(<App />);
});

test("Matches Snapshot", () => {
  const { asFragment } = renderWithRedux(<App />);
  expect(asFragment()).toMatchSnapshot();
});
