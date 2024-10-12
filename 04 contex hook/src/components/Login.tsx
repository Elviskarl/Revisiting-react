import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext)!;
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = {
      userName,
      password,
    };
    setUser(userName);
    console.log(data);
    setUserName("");
    setPassword("");
  }
  return (
    <>
      <header>
        <h1>Log in to the site</h1>
      </header>
      <main>
        <section>
          <form
            action=""
            onSubmit={(e) => handleSubmit(e)}
            className="form--submission"
          >
            <label htmlFor="userName">Username: </label>
            <input
              type="text"
              name="userName"
              id="userName"
              value={userName}
              placeholder="Enter your user name"
              onChange={(e) => setUserName(e.target.value)}
            />
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Submit</button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Login;
