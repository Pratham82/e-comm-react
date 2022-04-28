import "css/header.css";
import "css/auth/auth.css";
import { useEffect, useState } from "react";
import { login, signUp } from "services/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "contexts/auth/authState";
import useCart from "hooks/useCart";
import useWishlist from "hooks/useWishlist";
import { authState, validateCredentials } from "services/auth/auth-utils";

const TEST_CREDENTIALS: any = {
  email: process.env.REACT_APP_TEST_EMAIL,
  password: process.env.REACT_APP_TEST_PASSWORD,
};
export default function Login() {
  const [tabs, setTabs] = useState("login");
  const [loginCred, setLoginCred] = useState(authState.loginState);
  const [signInCred, setSignInCred] = useState(authState.signUpState);
  const [errors, setErrors] = useState(authState.loginErrors);
  const [newErrors, setSignUpErrors] = useState(authState.signUpErrors);
  const { dispatchAuth } = useAuth();
  const { email, password } = loginCred;
  const { firstName, lastName } = signInCred;
  const { dispatchCart } = useCart();
  const { wishlistDispatch } = useWishlist();
  const navigate = useNavigate();
  const location: any = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleChange = (e: any, type: string) => {
    const {
      target: { value, name },
    } = e;
    if (type === "login")
      setLoginCred({
        ...loginCred,
        [name]: value,
      });
    else
      setSignInCred({
        ...signInCred,
        [name]: value,
      });
  };

  const handleFormSubmit = (event: any) => {
    if (tabs === "login") {
      event.preventDefault();
      if (validateCredentials(loginCred, authState.loginErrors, setErrors)) {
        setLoginCred(loginCred);
        login(
          dispatchAuth,
          dispatchCart,
          wishlistDispatch,
          loginCred,
          navigate,
          from,
        );
      }
    } else if (
      validateCredentials(signInCred, authState.signUpErrors, setSignUpErrors)
    ) {
      setSignInCred(signInCred);
      signUp(dispatchAuth, signInCred, navigate, from);
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

  useEffect(() => {
    setErrors(authState.loginErrors);
    setSignUpErrors(authState.signUpErrors);
  }, [tabs]);

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
                      onChange={(e) => handleChange(e, "login")}
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
                      onChange={(e) => handleChange(e, "login")}
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
                    onChange={(e) => handleChange(e, "signIn")}
                    placeholder="Enter first name"
                    required
                  />
                  <span className="text-danger">{newErrors.firstName}</span>
                </div>
                <div className="flex flex-col pr-32 pl-32 pb-14">
                  <span>Last name</span>
                  <input
                    className="input-default"
                    name="lastName"
                    type="text"
                    value={lastName}
                    onChange={(e) => handleChange(e, "signIn")}
                    placeholder="Enter last name"
                    required
                  />

                  <span className="text-danger">{newErrors.lastName}</span>
                </div>
                <div className="flex flex-col pr-32 pl-32 pb-14">
                  <span>Email</span>
                  <input
                    className="input-default"
                    name="email"
                    type="text"
                    value={signInCred.email}
                    onChange={(e) => handleChange(e, "signIn")}
                    placeholder="Enter email"
                    required
                  />
                  <span className="text-danger">{newErrors.email}</span>
                </div>
                <div className="flex flex-col pr-32 pl-32 pb-14">
                  <span>Password</span>
                  <input
                    className="input-default"
                    name="password"
                    type="password"
                    value={signInCred.password}
                    onChange={(e) => handleChange(e, "signIn")}
                    placeholder="Enter password"
                    required
                  />
                  <span className="text-danger">{newErrors.password}</span>
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
