import React from "react";

const SignIn = ({ user, setUser, setRoute }) => {
  const onSubmitSignIn = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5000/signin", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      }),
    })
      .then((response) => response.json())
      .then((verified) => {
        if (verified.email) {
          setRoute("home");
        } else {
          alert(verified.message);
        }
      });
  };
  const setEmail = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      email: value,
    });
  };
  const setPassword = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      password: value,
    });
  };
  return (
    <form onSubmit={onSubmitSignIn}>
      <h2>Welcome Back!</h2>
      <fieldset>
        <legend>Log In</legend>
        <ul>
          <li>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" onChange={setEmail} required />
          </li>
          <li>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={setPassword}
              required
            />
          </li>
        </ul>
      </fieldset>
      <button type="submit">Login!</button>
      <button type="button" onClick={() => setRoute("signUp")}>
        Create an Account
      </button>
    </form>
  );
};

export default SignIn;
