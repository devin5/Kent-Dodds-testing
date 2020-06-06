import React from "react";

export default function Login({onSubmit}) {

  const submit = (e) => {
    e.preventDefault();
    const {username, password} = e.target.elements
    onSubmit({username: username.value, password: password.value})
  };

  return(
    <form onSubmit={(e) => submit(e)}>
    <input
      placeholder="Username"
      name="username"
    ></input>
  <input
      placeholder="Password"
      type="password"
      name="password"
    ></input>
    <button>submit</button>
  </form>
  )
}
