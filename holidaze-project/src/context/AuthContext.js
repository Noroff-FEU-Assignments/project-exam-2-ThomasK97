import { createContext } from "react";
import { useLocalStorage } from "../hooks/localStorage";

const AuthContext = createContext([null, () => {}]);

export const AuthProvider = (props) => {
  const [auth, setAuth] = localStorage('jwt', null);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;