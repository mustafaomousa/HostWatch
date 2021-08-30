import { Box, Flex } from "@chakra-ui/react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom"

import TripsComponent from "../TripsComponent"
import VehiclesPage from "../VehiclesComponent"
import Host from "./Host";
import SideNavigation from "./SideNavigation";
import * as vehicleActions from "../../store/vehicle";

import "./index.css";

const HostConsoleComponent = () => {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    const hostVehicles = useSelector(state => state.vehicles)

    const todaysDate = Date().toLocaleString().slice(0,10);

    useEffect(() => {
        dispatch(vehicleActions.getHostVehicles(sessionUser.id))
    },[])

    if (!sessionUser) return <Redirect to="/" />


    return (
        <Flex>
            <SideNavigation />
            <Box style={{ width: "100%", marginLeft:"16rem"}} p={12} backgroundColor="lightgray">
                <Route exact path="/host">
                    <Host sessionUser={sessionUser} hostVehicles={hostVehicles} todaysDate={todaysDate} />
                </Route>
                <Route path="/host/vehicles">
                    <VehiclesPage hostVehicles={hostVehicles} sessionUser={sessionUser}/>
                </Route>
                <Route path="/host/trips">
                    <TripsComponent />
                </Route>
                <Route path="/host/earnings">

                </Route>
                <Route path="/host/vehicles">

                </Route>
            </Box>
        </Flex>
    )
};

export default HostConsoleComponent;