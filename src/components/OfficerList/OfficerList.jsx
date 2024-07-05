import OfficerProfile from "../OfficerProfile/OfficerProfile";

export default function OfficerList({ items }) {
  return (
    <div>
      <h2>The list of officers</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <OfficerProfile officer={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
