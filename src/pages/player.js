import { useState } from "react";

const players = [
  {
    id: 1,
    playerName: "John Cena",
    playerScore: 10,
  },
  {
    id: 2,
    playerName: "John John",
    playerScore: 8,
  },
  {
    id: 3,
    playerName: "John Kena",
    playerScore: 5,
  },
];

const PlayerScore = () => {
  const [scores, setScores] = useState([...players]);

  const increase = (index) => {
    setScores((prevScores) => {
      const updatedScores = [...prevScores];

      updatedScores[index] = {
        ...updatedScores[index],
        playerScore: updatedScores[index].playerScore + 1,
      };
      console.log(updatedScores);
      return updatedScores;
    });
  };

  const decrease = (index) => {
    setScores((prevScores) => {
      const updatedScores = [...prevScores];
      updatedScores[index] = {
        ...updatedScores[index],
        playerScore: updatedScores[index].playerScore - 1,
      };
      return updatedScores;
    });
  };
  const resetScores = () => {
    setScores([...players]);
    console.log([...players]);
  };
  return (
    <div>
      {scores.map((player, index) => (
        <div key={index}>
          <button onClick={() => increase(index)}>+</button>
          <span>
            {player.playerName}: {player.playerScore}
          </span>
          <button onClick={() => decrease(index)}>-</button>
        </div>
      ))}
      <div>
        <button onClick={resetScores}>Reset</button>
      </div>
    </div>
  );
};
export default PlayerScore;
