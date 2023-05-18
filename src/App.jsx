import { useState } from "react";
import AddScore from "./components/Exam/AddScore";
import ScoreList from "./components/Exam/ScoreList";

function App() {
  const [workers, setWorkers] = useState([]);
  return (
    <div className="App">
      <h1 className=" text-cyan-700 font-bold text-center mt-6 text-4xl">
        List of exam scores
      </h1>
      <AddScore setWorkers={setWorkers} />
      <ScoreList workers={workers} setWorkers={setWorkers} />
    </div>
  );
}

export default App;
