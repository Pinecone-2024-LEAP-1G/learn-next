import React, { useState } from "react";

function generateCustomId() {
  const now = new Date();

  // Get the date parts
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed in JavaScript
  const day = String(now.getDate()).padStart(2, "0");

  // Get the time parts
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // Format the date and time
  const formattedDate = `${year}/${month}/${day}`;
  const formattedTime = `${hours} min ${minutes} seconds ${seconds}`;

  // Combine date and time to create the ID
  const customId = `${formattedDate} ${formattedTime}`;

  return customId;
}

function CounterApp() {
  // State to manage an array of counters
  const [counters, setCounters] = useState([]);

  // Function to add a new counter
  const addCounter = () => {
    setCounters([...counters, { id: generateCustomId(), count: 0 }]);
  };

  // Function to increment a counter's value
  const incrementCounter = (id) => {
    setCounters(
      counters.map((counter) =>
        counter.id === id ? { ...counter, count: counter.count + 1 } : counter
      )
    );
  };

  // Function to decrement a counter's value
  const decrementCounter = (id) => {
    setCounters(
      counters.map((counter) =>
        counter.id === id && counter.count > 0
          ? { ...counter, count: counter.count - 1 }
          : counter
      )
    );
  };

  // Styles
  const appContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const buttonStyle = {
    padding: "10px 20px",
    margin: "10px",
    fontSize: "16px",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
  };

  const counterContainerStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "20px",
    margin: "10px",
    width: "300px",
    textAlign: "center",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  };

  const counterButtonStyle = {
    padding: "8px 16px",
    margin: "5px",
    fontSize: "14px",
    cursor: "pointer",
    backgroundColor: "#008CBA",
    color: "white",
    border: "none",
    borderRadius: "5px",
  };

  const counterTextStyle = {
    fontSize: "20px",
    margin: "10px 0",
  };

  return (
    <div style={appContainerStyle}>
      <h1>Counter App</h1>
      {/* Render Add Counter Button */}
      <button style={buttonStyle} onClick={addCounter}>
        Add Counter
      </button>

      {/* Render List of Counters */}
      <div className="flex flex-wrap">
        {counters.map((counter) => (
          <div key={counter.id} style={counterContainerStyle}>
            <h2>Counter {counter.id}</h2>
            <p style={counterTextStyle}>Count: {counter.count}</p>
            <button
              style={counterButtonStyle}
              onClick={() => incrementCounter(counter.id)}
            >
              Increment
            </button>
            <button
              style={counterButtonStyle}
              onClick={() => decrementCounter(counter.id)}
            >
              Decrement
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default CounterApp;
