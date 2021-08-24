import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session";
import LogoutButton from "./components/LogoutComponent/LogoutButton";
import LoginPage from "./components/LoginComponent";

import "./app.css"
import SignupPage from "./components/SignupComponent";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch])

  return isLoaded && (
    <Switch>
      <Route exact path="/">
        <h1>Home</h1>
        <LogoutButton />
      </Route>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/signup">
        <SignupPage />
      </Route>
    </Switch> 
  );
}

export default App;
