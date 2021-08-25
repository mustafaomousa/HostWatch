import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session";
import LoginPage from "./components/LoginComponent";
import SignupPage from "./components/SignupComponent";
import NavigationBar from "./components/NavigationComponent";

import "./app.css"
import VehiclesPage from "./components/VehiclesComponent";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch])

  return isLoaded && (
    <>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <h1>Home</h1>
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/vehicles">
          <VehiclesPage />
        </Route>
      </Switch> 
    </>
  );
}

export default App;
