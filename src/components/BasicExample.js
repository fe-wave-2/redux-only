import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default function BasicExample() {
  const isLogin = localStorage.getItem("token");

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            {isLogin ? <Redirect to="/dashboard" /> : <Home />}
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            {isLogin ? <Dashboard /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <button
        onClick={() => {
          localStorage.setItem("token", "blabla");
          window.location.reload();
        }}
      >
        Login
      </button>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <button
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/about";
        }}
      >
        Logout
      </button>
    </div>
  );
}
