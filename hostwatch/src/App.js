import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session";
import LoginPage from "./routes/Login";
import SignupPage from "./routes/Signup";
import NavigationBar from "./components/NavigationComponent";

import "./app.css"
import Home from "./components/Home";
import HostConsole from "./components/HostConsole";



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
            <Home sessionUser={sessionUser} />
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
            <HostConsole />
          </Route>  
      </Switch> 
    </>
  );
}

export default App;
