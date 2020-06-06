import React from "react";
import ReactDom from "react-dom";
import Login from "./Login";

test("calls onsubmit when user submits", () => {
  //Arrange
  const handleSubmit = jest.fn();
  const container = document.createElement("div");
  ReactDom.render(<Login onSubmit={handleSubmit} />, container);
  const form = container.querySelector("form");
  const { username, password } = form.elements;
  username.value = "devin";
  password.value = "ssshhh";

  form.dispatchEvent(new window.Event("submit"));
  
  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith({username: "devin", password: "ssshhh"});

});
