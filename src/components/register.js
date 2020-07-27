import React from "react";

const Register = ({ user, setUser, setRoute }) => {
  const onSubmitRegister = (e) => {
    e.preventDefault();
    fetch("http://127.0.0.1:5000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
        role: user.role,
      }),
    })
      .then((res) => res.json())
      .then((verified) => {
        console.log(verified);
        if (verified.email) {
          setUser({
            ...user,
            verified,
          });
          setRoute("home");
        }
      });
  };
  const setEmail = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      email: value,
    });
    console.log(e.target);
  };
  const setPassword = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      password: value,
    });
  };
  const setRole = (e) => {
    const value = e.target.value;
    setUser({
      ...user,
      role: value,
    });
  };
  return (
    <form onSubmit={onSubmitRegister}>
      <h2>Sign Up!</h2>
      <fieldset>
        <legend>Create Account</legend>
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
          <li>
            <label htmlFor="role">Role:</label>
            <select name="role" id="role" onChange={setRole}>
              <option value="admin">Admin</option>
              <option value="customer">Customer</option>
            </select>
          </li>
        </ul>
      </fieldset>
      <button type="submit">Sign Up!!</button>
      <button type="button" onClick={() => setRoute("logIn")}>
        Have an Account?
      </button>
    </form>
  );
};

export default Register;
