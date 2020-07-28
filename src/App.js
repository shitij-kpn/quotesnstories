import React, { useState } from "react";

import "./App.css";
import "./styles.css";
import SignIn from "./components/signin";
import Register from "./components/register";
import Home from "./components/home";

const App = () => {
  const [route, setRoute] = useState("signUp");
  const [user, setUser] = useState({
    email: "",
    password: "",
    role: "admin",
  });

  const currentView = () => {
    switch (route) {
      case "signUp":
        return <Register setRoute={setRoute} user={user} setUser={setUser} />;
      case "logIn":
        return <SignIn setRoute={setRoute} user={user} setUser={setUser} />;
      case "home":
        return <Home user={user} setUser={setUser} />;
      default:
        break;
    }
  };
  return <section id="entry-page">{currentView()}</section>;
};

export default App;
