import { useContext } from "react";
import { AuthContext, AuthContextProps } from "../providers/AuthProvider";

const useAuth = (): AuthContextProps | null => {
  const auth = useContext(AuthContext);
  return auth;
};

export default useAuth;
