import { Badge, Box, Button, Center, Flex, Heading } from "@chakra-ui/react"
import { CloseIcon, ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";

import TripsComponent from "../TripsComponent"
import VehiclesPage from "../VehiclesComponent"
import Host from "./Host";
import SideNavigation from "./SideNavigation";
import * as vehicleActions from "../../store/vehicle";

import "./index.css";

const HostConsoleComponent = () => {
    const dispatch = useDispatch();

    const [sideClosed, setSideClosed] = useState(false);

    const sessionUser = useSelector(state => state.session.user);
    const hostVehicles = useSelector(state => state.vehicles)

    const todaysDate = Date().toLocaleString().slice(0,10);

    useEffect(() => {
        dispatch(vehicleActions.getHostVehicles(sessionUser.id))
    },[])

    if (!sessionUser) return <Redirect to="/" />


    return (
        <Flex>
            <Box position="fixed">
                {isBrowser && (<><SideNavigation  setSideClosed={setSideClosed} sideClosed={sideClosed} /></>)}
            </Box>
            <Box style={{ width: "100%", marginLeft: isMobile || sideClosed ? "0" : "16rem"}} p={12}>
                <Box>
                    <Route exact path="/host">
                        <Heading size="4xl" fontWeight="light" pb={10}>
                            hello, {sessionUser.username}!
                        </Heading>
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
            </Box>
        </Flex>
    )
};

export default HostConsoleComponent;