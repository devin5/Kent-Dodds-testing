import React from "react";
import ReactDom from "react-dom";
import Login from "./Login";
import { render, fireEvent, cleanup } from "@testing-library/react";

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
afterEach(cleanup)
test("calls onsubmit when user submits", () => {
  //Arrange
  const fakeUser = { username: "devin", password: "pass123" };
  const handleSubmit = jest.fn();

  const { container, getByPlaceholderText, getByText } = render(
    <Login onSubmit={handleSubmit} />
  );
// could also use getByLabelText
  const username = getByPlaceholderText("Username");
  const password = getByPlaceholderText("Password");

  const form = container.querySelector("form");
  const button = getByText("submit");

  username.value = fakeUser.username;
  password.value = fakeUser.password;
  //ACT
  fireEvent.submit(form)
button.click()
  //ASSERT
  expect(handleSubmit).toHaveBeenCalledTimes(2);
  expect(handleSubmit).toHaveBeenCalledWith(fakeUser);
  expect(button.type).toBe("submit");
});


test("inner html" , () => {
    console.log("body", document.body.innerHTML)
})