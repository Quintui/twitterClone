import React from "react";
import Login from "./Pages/Login/Login";
import "./app.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/login"} component={Login} />
      </Switch>
      <Switch>
        <Route path={"/home"} component={Home} />
      </Switch>
      <Switch>
        <Redirect to={"/home"} />
      </Switch>
    </div>
  );
}

export default App;
