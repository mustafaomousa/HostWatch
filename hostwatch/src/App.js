import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session";
import LoginPage from "./components/LoginComponent";
import SignupPage from "./components/SignupComponent";
import NavigationBar from "./components/NavigationComponent";
import VehiclesPage from "./components/VehiclesComponent";
import TripsComponent from "./components/TripsComponent";
import HomePageComponent from "./components/HomePageComponent";

import "./app.css"



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
          <HomePageComponent />
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
        <Route path="/trips">
          <TripsComponent />
        </Route>
      </Switch> 
    </>
  );
}

export default App;
