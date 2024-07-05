import AppBar from "../AppBar/AppBar";
import OfficerProfile from "../OfficerProfile/OfficerProfile";
import OfficerList from "../OfficerList/OfficerList";
import Unit from "../Unit/Unit";
import officers from "../../officers.json";

const firstOfficer = {
  id: 1,
  name: "Jacob Mercer",
  rank: "Commander",
  age: 42,
  spec: "Fighter Pilot",
  skills: ["Combat Maneuvers", "Navigation", "Strategic Planning"],
  status: "Active",
};
const secondOfficer = {
  id: 3,
  name: "Olawande Brawar",
  rank: "Captain",
  age: 50,
  spec: "Transport Pilot",
  skills: ["Astrogation", "Cargo Handling", "Emergency Response"],
  status: "Retired",
};

const isModalOpen = true;
const isUserOnline = true;

export default function App() {
  return (
    <div>
      {isModalOpen ? <p>Modal is open</p> : <span>Modal is closed</span>}
      <p>{isUserOnline ? "Active" : "Not active"}</p>

      <p>
        Is anybody here? Answer: {(isUserOnline && "Officer") || "Nobody"} is
        here.
      </p>

      {isModalOpen && <p>Modal HTML</p>}

      <AppBar />
      <Unit unitName="the falcon" numberOfficers={9} mission="defense" />
      <OfficerList items={officers} />
      <OfficerProfile officer={firstOfficer} />
      <OfficerProfile officer={secondOfficer} />
    </div>
  );
}
