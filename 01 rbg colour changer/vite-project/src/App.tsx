import { useState } from "react";
import "./App.css";

export default function App() {
  const [color, setColor] = useState("#242424");
  return (
    <>
      <main>
        <section className="change__color" style={{ backgroundColor: color }}>
          <p>Select a background color: </p>
          <button
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")}
          >
            Green
          </button>
          <button
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
        </section>
      </main>
    </>
  );
}
