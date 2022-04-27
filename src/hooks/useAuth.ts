import AuthContext from "contexts/auth/indext";
import { useContext } from "react";

const useAuth = () => useContext(AuthContext);

export default useAuth;
