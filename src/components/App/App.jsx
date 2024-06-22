import AppBar from "../AppBar/AppBar";
import OfficerProfile from "../OfficerProfile/OfficerProfile";
// import "./App.css";

const firstOfficer = {
  id: 1,
  name: "Jacob Mercer",
  rank: "Commander",
  age: 42,
  spec: "Fighter Pilot",
  skills: ["Combat Maneuvers", "Navigation", "Strategic Planning"],
  status: "Active",
};

const isModalOpen = true;
const isUserOnline = false;

export default function App() {
  return (
    <div>
      {isModalOpen ? <p>Modal is open</p> : <span>Modal is closed</span>}
      <p>{isUserOnline ? "Active" : "Not active"}</p>

      {isModalOpen && <p>Modal HTML</p>}

      <AppBar />
      <OfficerProfile officer={firstOfficer} />
    </div>
  );
}
