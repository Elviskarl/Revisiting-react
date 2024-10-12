import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const user = useContext(UserContext)!;
  return (
    <>
      <aside>
        <p>{user.user === "" ? "Please log in" : `I am ${user.user}`}</p>
      </aside>
    </>
  );
}

export default Profile;
