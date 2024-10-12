import { ReactNode, useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
