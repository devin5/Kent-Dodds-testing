import React from "react";
import ReactDOM from "react-dom";
import Test1 from "./test1";
import * as api from "./utils/api";

//creates a mocked verison from api in utils
jest.mock("./utils/api", () => {
  return {
    posts: {
      //   create: (post) => console.log("mocked post haha"),
      create: jest.fn(() => {
        console.log("mocked post haha");
      }),
    },
  };
});

test("is falsy", () => {
  expect(0).toBeFalsy();
});

test("calls onSubmit with th eusername and password when submitted", () => {
  const container = document.createElement("div");
  const fakeHistory = {
    push: jest.fn(),
  };
  ReactDOM.render(<Test1 history={fakeHistory} />, container);
  const form = container.querySelector("form");
  //   const title = form.elements.title  ====> non destructuring
  const { title, subTitle, body } = form.elements;
  title.value = "I am the title";
  subTitle.value = "I am the subTitle";
  body.value = "I am the body";

  const submit = new window.Event("submit");
  form.dispatchEvent(submit);
  expect(fakeHistory.push).toHaveBeenCalledTimes(1);
  form.dispatchEvent(submit);
  expect(fakeHistory.push).toHaveBeenCalledTimes(2);
  expect(fakeHistory.push).toHaveBeenCalledWith("/");
  expect(api.posts.create).toHaveBeenCalledTimes(2);
  expect(api.posts.create).toHaveBeenCalledWith({
    date: expect.any(String),
    id: expect.any(Number)
  });
});
