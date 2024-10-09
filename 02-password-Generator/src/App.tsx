import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const passwordRef = useRef(null);

  useEffect(() => {
    generatePassword();
  }, [length, isNumberAllowed, isCharacterAllowed]);

  const generatePassword = useCallback(() => {
    let pass = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    isNumberAllowed && (string += "0123456789");
    isCharacterAllowed && (string += "!@#$%^&*()_+-");
    for (let i = 1; i < length; i++) {
      const index = Math.floor(Math.random() * string.length + 1);
      pass += string.charAt(index);
    }
    setPassword(pass);
  }, [isNumberAllowed, isCharacterAllowed, length]);

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  }
  return (
    <>
      <header>
        <h1>Password Generator</h1>
      </header>
      <main>
        <section>
          <div className="password__generator">
            <label htmlFor="passGen">Password: </label>
            <input
              type="text"
              name="passGen"
              id="passGen"
              value={password}
              ref={passwordRef}
              readOnly
            />
            <button onClick={copyToClipboard}>copy</button>
          </div>
          <div className="password__params">
            <input
              type="range"
              name="password_range"
              id="password_range"
              max={16}
              min={8}
              value={length}
              onChange={(e) => setLength(+e.target.value)}
            />
            <label htmlFor="password_range"> Length: {length}</label>
            <input
              type="checkbox"
              name="nums"
              id="nums"
              defaultChecked={isNumberAllowed}
              onClick={() => setIsNumberAllowed((prevValue) => !prevValue)}
            />
            <label htmlFor="nums">Numbers</label>
            <input
              type="checkbox"
              name="char"
              id="char"
              defaultChecked={isCharacterAllowed}
              onClick={() => setIsCharacterAllowed((prevValue) => !prevValue)}
            />
            <label htmlFor="char">Characters</label>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
