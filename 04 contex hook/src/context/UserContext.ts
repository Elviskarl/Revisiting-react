import { createContext } from "react";

interface AuthContextProps {
  user: string;
  setUser: (name: string) => void;
}

const UserContext = createContext<AuthContextProps | undefined>(undefined);

export default UserContext;
