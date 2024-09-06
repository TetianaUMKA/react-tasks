import css from "./ControlledInput.module.css";

export default function ControlledInput({ value, onUpdate }) {
  const handleChange = (event) => {
    onUpdate(event.target.value);
  };
  return (
    <div className={css.container}>
      <input
        type="text"
        name="neededData"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
