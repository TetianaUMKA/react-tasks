export default function OfficerProfile({
  officer: { name, rank, age, spec, status },
}) {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Rank: {rank}</p>
      <p>Age: {age}</p>
      <p>Spec: {spec}</p>
      <p>
        Status:{" "}
        {status === "Active" ? "available for hire" : "not available for hire"}
      </p>
    </div>
  );
}
