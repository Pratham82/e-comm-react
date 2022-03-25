import "css/auth/auth.css";

export default function Login() {
  return (
    <section className="auth-section">
      <div className="auth">
        <ul className="tabs">
          <li
            id="login"
            className="tabLinks active"
            // onClick={() => console.log("clicked")}
          >
            Login
          </li>
          <li
            id="signup"
            className="tabLinks"
            // onClick="openTab(event, 'signup')"
          >
            Sign Up
          </li>
        </ul>
        <div className="auth-content">
          <div id="login" className="content">
            <h4 className="h4 text-center">Login</h4>
            <div className="flex flex-col pr-32 pl-32 pb-20">
              <label htmlFor="login">
                Email
                <input
                  className="input-default"
                  name="login"
                  type="text"
                  placeholder="Enter email"
                />
              </label>
            </div>
            <div className="flex flex-col pr-32 pl-32">
              <label htmlFor="login">
                Password
                <input
                  className="input-default"
                  name="login"
                  type="password"
                  placeholder="Enter password"
                />
              </label>
            </div>
            <div className="flex flex-col items-center justify-center pt-20 pb-14">
              <button className="btn primary-filled-btn" type="button">
                Login
              </button>
              <button className="btn primary-outlined-btn" type="button">
                Logout
              </button>
            </div>
          </div>
          {/* <div id="signup" className="content">
            <h4 className="h4 text-center">Sign Up</h4>
            <div className="flex flex-col pr-32 pl-32 pb-14">
              <label htmlFor="firstName">
                First name
                <input
                  className="input-default"
                  name="firstName"
                  type="text"
                  placeholder="Enter first name"
                />
              </label>
            </div>
            <div className="flex flex-col pr-32 pl-32 pb-14">
              <label htmlFor="lastName">
                Last name
                <input
                  className="input-default"
                  name="lastName"
                  type="text"
                  placeholder="Enter last name"
                />
              </label>
            </div>
            <div className="flex flex-col pr-32 pl-32 pb-14">
              <label htmlFor="email">
                Email
                <input
                  className="input-default"
                  name="email"
                  type="text"
                  placeholder="Enter email"
                />
              </label>
            </div>
            <div className="flex flex-col pr-32 pl-32 pb-14">
              <label htmlFor="password">
                Password
                <input
                  className="input-default"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                />
              </label>
            </div>
            <div className="flex justify-center pt-20 pb-14">
              <button className="btn primary-filled-btn" type="button">
                Sign Up
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
