import React from "react";
import * as api from "./utils/api"


export default function List(props) {
  const [form, setForm] = React.useState({});
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
      
      e.preventDefault()
      
      const newPost = {
          ...form,
          date: new Date().toISOString(),
          id: Math.round(Math.random() * 10)
      }
      api.posts.create(newPost)
      props.history.push("/")
  }
  return (
    <form onSubmit={handleSubmit}>
      {console.log(form)}
      <input
        onChange={handleChange}
        placeholder="Title"
        name="title"
        value={form.title || ""}
      ></input>
      <input
        onChange={handleChange}
        placeholder="Sub Title"
        name="subTitle"
        value={form.subTitle || ""}
      ></input>
      <input
        onChange={handleChange}
        placeholder="Body"
        name="body"
        value={form.body || ""}
      ></input>
      <button>submit</button>
    </form>
  );
}
