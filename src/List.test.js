import React from "react";
import ReactDOM from "react-dom";
import List from "./List";
// import {render} from "@testing-library/react"
test("list displays list Props", () => {
  const container = document.createElement("div");
  ReactDOM.render(<List list={["apple", "banana", "orange"]} />, container);
  expect(container.textContent).toMatch(/apple/);
  expect(container.textContent).toMatch(/banana/);
  expect(container.textContent).toMatch(/orange/);
});

