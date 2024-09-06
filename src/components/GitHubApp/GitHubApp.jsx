import { Field, Form, Formik } from "formik";
// import * as Yup from "yup";
import { useState } from "react";

import { fetchUser } from "../../services/github-api";

export default function GitHubApp() {
  // About the initial value of useState 💡
  // boolean 👉 true false
  // 123 👉 0
  // [1,2,3] 👉 []
  // {} 👉 null

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // way 1
  // const handleSubmit = async (values, actions) => {
  //   console.log(values);

  //   const response = await axios.get(
  //     `https://api.github.com/users/${values.username}`
  //   );
  //   console.log(response);
  //   console.log(response.data);
  //   setUser(response.data);
  // };

  //way 2 (output the function with axios into another file with name github-api.js)
  const handleSubmit = async (values, actions) => {
    try {
      setLoading(true);
      setUser(null); //if it is necessary for cleaning previous data
      setError(false);
      const fetchedUser = await fetchUser(values.username);
      setUser(fetchedUser);
      actions.resetForm();
    } catch (error) {
      console.log("HTTPS ERROR");
      setError(true);
    } finally {
      setLoading(false);
    }
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
      {loading && <b>Loading user data, please wait...</b>}
      {error && <b>Oops... there was an error, please try again</b>}
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.name} />
          <p>{user.name}</p>
          <a href={user.html_url} target="_blank">
            GitHub Page
          </a>
          <p>Followers: {user.followers}</p>
          <p>{user.bio}</p>
        </div>
      )}
    </div>
  );
}

// from response.data:
// name
// avatar_url
// html_url
// followers
// bio
