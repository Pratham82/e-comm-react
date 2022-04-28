import { useContext, useEffect, useReducer } from "react";
import { LOG_IN, LOG_OUT } from "types/auth";
import AuthContext from "./indext";

const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
        user: "",
      };
    default:
      return state;
  }
};

const initialAuthState = {
  isAuthenticated: false,
  user: "",
  isLoading: false,
};

export default function AuthProvider({ children }: any) {
  const [authState, dispatchAuth] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const payload = JSON.parse(user);
      dispatchAuth({
        type: LOG_IN,
        payload,
      });
    }
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <AuthContext.Provider value={{ authState, dispatchAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
