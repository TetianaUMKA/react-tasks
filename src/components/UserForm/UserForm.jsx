import { useId } from "react";

import css from "./UserForm.module.css";

export default function UserForm({ onAddNewUser }) {
  const id = useId();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(
      event.target.elements,
      event.target.elements.username.value,
      event.target.elements.role.value
    ); // It gives us opportunity to get values from the form
    onAddNewUser({
      username: event.target.elements.username.value,
      role: event.target.elements.role.value,
    });

    event.target.reset(); // for resetting data in form after submitting
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div className={css.group}>
        <label htmlFor={id + "user"}>Username</label>
        <input type="text" name="username" id={id + "user"} />
      </div>

      <div className={css.group}>
        <label htmlFor={`${id}-role`}>Role:</label>
        <select name="role" id={`${id}-role`}>
          <option value="guest">Guest</option>
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}
