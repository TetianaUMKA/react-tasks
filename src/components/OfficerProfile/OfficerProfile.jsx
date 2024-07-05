export default function OfficerProfile({
  officer: { name, rank, age, spec, status, skills },
}) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Rank: {rank}</p>
      <p>Age: {age}</p>
      <p>Spec: {spec}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <p>
        Status:{" "}
        {status === "Active" ? "available for hire" : "not available for hire"}
      </p>
    </div>
  );
}
