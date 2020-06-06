import React from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import App from "./App.js";

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("hi", () => {
  expect(1).toBe(1);
});
test("app renders test with react DOM", () => {
  const container = document.createElement("div");
  ReactDOM.render(<App />, container);
});

test("app says hello", () => {
  const container = document.createElement("div");
  ReactDOM.render(<App />, container);
  // expect(container.innerHTML).toBe("hello")Il
  expect(container.textContent).toBe("hello")

});

test("app renders test with testing-library render", () => {
  render(<App />);
});