import { render} from '@testing-library/react';
import App from './App';

test("doesn't Blow Up", () => {
  render(<App/>);
});

test("Matches Snapshot", () => {
  const { asFragment } = render(<App />);
  expect(asFragment()).toMatchSnapshot();
});
