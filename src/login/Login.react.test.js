import React from "react";
import ReactDom from "react-dom";
import Login from "./Login";
import { render, fireEvent } from "@testing-library/react";

// test("calls onsubmit when user submits", () => {
//   //Arrange
//   const handleSubmit = jest.fn();
//   const container = document.createElement("div");
//   ReactDom.render(<Login onSubmit={handleSubmit} />, container);
//   const form = container.querySelector("form");
//   const { username, password } = form.elements;
//   username.value = "devin";
//   password.value = "ssshhh";

//   form.dispatchEvent(new window.Event("submit"));

//   expect(handleSubmit).toHaveBeenCalledTimes(1);
//   expect(handleSubmit).toHaveBeenCalledWith({username: "devin", password: "ssshhh"});

// });

test("calls onsubmit when user submits", () => {
  //Arrange
  const fakeUser = { username: "devin", password: "pass123" };
  const handleSubmit = jest.fn();

  const { container, getByPlaceholderText, getByText } = render(
    <Login onSubmit={handleSubmit} />
  );

  const username = getByPlaceholderText("Username");
  const password = getByPlaceholderText("Password");

  const form = container.querySelector("form");
  const button = getByText("submit");

  username.value = fakeUser.username;
  password.value = fakeUser.password;
  //ACT
  fireEvent.submit(form)

  //ASSERT
  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser);
  expect(button.type).toBe("submit");
});
