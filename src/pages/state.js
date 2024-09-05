import { useState } from "react";

const userList = ["Tergeltengis", "Dashnyam", "Dashnyam1", "Dashnyam2"];

export default function App() {
  const [index, setIndex] = useState(0);
  const [user, setUser] = useState(userList);

  const [dark, setDark] = useState("white");

  const handlePlus = () => {
    setIndex(index + 1);
  };

  const handleMinus = () => {
    setIndex(index - 1);
  };
  const handleDarkMode = () => {
    if (dark === "black") {
      setDark("white");
    } else {
      setDark("black");
    }
  };
  console.log(dark);
  return (
    <div class={`bg-${dark} dark:bg-black`}>
      <button onClick={handlePlus}>nemeh</button>
      <p>{index}</p>

      <button onClick={handleMinus}>hasah</button>
      <div>
        <button onClick={handleDarkMode}>darkMode</button>
      </div>
    </div>
  );
}
