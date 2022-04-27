import "css/header.css";
import "css/auth/auth.css";
import { useState } from "react";
import { capitalize } from "utils";
import { login } from "services/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "contexts/auth/authState";
import useCart from "hooks/useCart";
import useWishlist from "hooks/useWishlist";

const initialLoginState = {
  email: "",
  password: "",
};
const initialSignInState = {
  firstName: "",
  lastName: "",
  newEmail: "",
  newPassword: "",
};
const TEST_CREDENTIALS: any = {
  email: process.env.REACT_APP_TEST_EMAIL,
  password: process.env.REACT_APP_TEST_PASSWORD,
};

let initialErrors = {
  email: "",
  password: "",
};
export default function Login() {
  const [tabs, setTabs] = useState("login");
  const [loginCred, setLoginCred] = useState(initialLoginState);
  const [signInCred, setSignInCred] = useState(initialSignInState);
  const [errors, setErrors] = useState(initialErrors);
  const { dispatchAuth } = useAuth();
  const { email, password } = loginCred;
  const { firstName, lastName, newEmail, newPassword } = signInCred;
  const { dispatchCart } = useCart();
  const { wishlistDispatch } = useWishlist();
  const navigate = useNavigate();
  const location: any = useLocation();
  const from = location.state?.from?.pathname || "/";

  const validate = () => {
    let flag = false;
    Object.entries(loginCred).map(([name, value]: any) => {
      const errors2 =
        value === "" || value < 1 ? `${capitalize(name)} cannot be empty` : "";
      initialErrors = { ...initialErrors, [name]: errors2 };
      const validCheck = Object.values(initialErrors)
        .map((err) => err)
        .every((err) => err === "");
      flag = validCheck;
      return flag;
    });
    setErrors(initialErrors);
    return flag;
  };

  const handleSignIn = async (e: any) => {
    e.preventDefault();
    const {
      target: { value, name },
    } = e;
    setSignInCred({
      ...signInCred,
      [name]: value,
    });
  };

  const handleChange = (e: any) => {
    const {
      target: { value, name },
    } = e;
    setLoginCred({
      ...loginCred,
      [name]: value,
    });
  };

  const handleFormSubmit = (event: any) => {
    if (tabs === "login") {
      event.preventDefault();
      validate();
      setLoginCred(loginCred);
      login(
        dispatchAuth,
        dispatchCart,
        wishlistDispatch,
        loginCred,
        navigate,
        from,
      );
      // navigate(location?.state?.from?.pathname);
      navigate(from);
      setErrors(initialErrors);
    } else {
      console.log("sign in");
    }
  };

  const handleTestCredentials = (e: any) => {
    e.preventDefault();
    setLoginCred(TEST_CREDENTIALS);
    login(
      dispatchAuth,
      dispatchCart,
      wishlistDispatch,
      TEST_CREDENTIALS,
      navigate,
      from,
    );
  };

  return (
    <div className="auth-wrapper">
      <section className="auth-section">
        <div className="auth">
          <ul className="tabs">
            <button
              type="button"
              id="login"
              name="login"
              className={`tabLinks ${tabs === "login" && "active"}`}
              onClick={() => setTabs("login")}
            >
              Login
            </button>
            <button
              type="button"
              id="signUp"
              name="signUp"
              className={`tabLinks ${tabs === "signUp" && "active"}`}
              onClick={() => setTabs("signUp")}
            >
              Sign Up
            </button>
          </ul>
          <div className="auth-content text-left">
            {tabs === "login" ? (
              <form>
                <div id="login" className="content">
                  <h4 className="h4 text-center">Login</h4>
                  <div className="flex flex-col pr-32 pl-32 pb-20">
                    <span>Email</span>
                    <input
                      className="input-default"
                      name="email"
                      type="email"
                      value={email}
                      required
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter email"
                    />
                    <span className="text-danger">{errors.email}</span>
                  </div>
                  <div className="flex flex-col pr-32 pl-32">
                    <span>Password</span>
                    <input
                      className="input-default"
                      name="password"
                      type="password"
                      value={password}
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter password"
                    />
                    <span className="text-danger">{errors.password}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center pt-20 pb-14 pr-32 pl-32">
                    <button
                      className="btn primary-filled-btn"
                      type="submit"
                      // onClick={handleLogin}
                      onClick={handleFormSubmit}
                    >
                      Login
                    </button>
                    <button
                      className="btn primary-outlined-btn"
                      type="button"
                      onClick={(e) => handleTestCredentials(e)}
                    >
                      Use Guest login
                    </button>
                  </div>
                </div>
              </form>
            ) : (
              <div id="signup" className="content">
                <h4 className="h4 text-center">Sign Up</h4>
                <div className="flex flex-col pr-32 pl-32 pb-14">
                  <span>First name</span>
                  <input
                    className="input-default"
                    name="firstName"
                    type="text"
                    value={firstName}
                    onChange={(e) => handleSignIn(e)}
                    placeholder="Enter first name"
                    required
                  />
                </div>
                <div className="flex flex-col pr-32 pl-32 pb-14">
                  <span>Last name</span>
                  <input
                    className="input-default"
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => handleSignIn(e)}
                    placeholder="Enter last name"
                    required
                  />
                </div>
                <div className="flex flex-col pr-32 pl-32 pb-14">
                  <span>Email</span>
                  <input
                    className="input-default"
                    name="newEmail"
                    type="text"
                    value={newEmail}
                    onChange={(e) => handleSignIn(e)}
                    placeholder="Enter email"
                    required
                  />
                </div>
                <div className="flex flex-col pr-32 pl-32 pb-14">
                  <span>Password</span>
                  <input
                    className="input-default"
                    name="newPassword"
                    type="password"
                    value={newPassword}
                    onChange={(e) => handleSignIn(e)}
                    placeholder="Enter password"
                    required
                  />
                </div>
                <div className="flex justify-center pt-20 pb-14 pr-32 pl-32">
                  <button
                    className="btn primary-filled-btn"
                    type="button"
                    onClick={handleFormSubmit}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
