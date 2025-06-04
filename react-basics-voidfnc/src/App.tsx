import Welcome from "./components/Welcome";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Counter from "./components/Counter";
import { Routes, Route } from "react-router";

type Teacher = {
  name: string;
  job: string;
  year: number;
  id: number;
};

const teachers: Teacher[] = [
  {
    job: "Dosen",
    name: "Pak Dika",
    year: 1995,
    id: 1,
  },
  {
    name: "Theo",
    job: "Creator",
    year: 2000,
    id: 2,
  },
  {
    name: "pak eko",
    job: "tech lead",
    year: 2000,
    id: 3,
  },
  {
    name: "Nurzaman",
    job: "pengangguran",
    year: 2000,
    id: 4,
  },
];

// component
function App() {
  return (
    <>
      <Routes>
        <Route />
      </Routes>
    </>
  );
}

export default App;
