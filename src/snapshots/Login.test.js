import React from "react";
import Login from "./Login";
import { render, fireEvent, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("is falsy", () => {
  expect(0).toBeFalsy();
});

// test("snapshot", () => {
//   const { container } = render(<Login />);
//   expect(container.firstChild).toMatchSnapShot();
// });
