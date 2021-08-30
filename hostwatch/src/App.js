import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session";
import LoginPage from "./components/LoginComponent";
import SignupPage from "./components/SignupComponent";
import NavigationBar from "./components/NavigationComponent";
import VehiclesPage from "./components/VehiclesComponent";
import TripsComponent from "./components/TripsComponent";
import HomePageComponent from "./components/HomePageComponent";

import "./app.css"
import HostConsoleComponent from "./components/HostConsoleComponent";
import { Box } from "@chakra-ui/react";



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch])

  return isLoaded && (
    <>
      
      <Switch>
          <Route exact path="/">
            <NavigationBar />
            <HomePageComponent sessionUser={sessionUser} />
          </Route>
          <Route path="/login">
            <NavigationBar />
            <LoginPage />
          </Route>
          <Route path="/signup">
            <NavigationBar />
            <SignupPage />
          </Route>
          <Route path="/host">
            <HostConsoleComponent />
          </Route>  
      </Switch> 
    </>
  );
}

export default App;
