import { Field, Form, Formik } from "formik";
// import * as Yup from "yup";
import axios from "axios";
import { useState } from "react";

export default function GitHubApp() {
  const [user, setUser] = useState(null);

  const handleSubmit = async (values, actions) => {
    console.log(values);

    const response = await axios.get(
      `https://api.github.com/users/${values.username}`
    );
    console.log(response);
    console.log(response.data);
  };
  return (
    <div>
      <h1>HTTP requests in React</h1>
      <Formik initialValues={{ username: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field type="text" name="username" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
}
