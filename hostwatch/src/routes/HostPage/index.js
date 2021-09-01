import { Box, Flex, Heading } from "@chakra-ui/react";
import { Redirect, Route } from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";

import TripsComponent from "../../routes/HostTripsPage";
import VehiclesPage from "../../routes/HostVehiclesPage";
import Host from "../../components/HostConsoleComponents/Host";
import SideNavigation from "../../components/HostConsoleComponents/SideNavigation";
import "./index.css";
import HostUtils from "../../components/HostConsoleComponents/HostUtils";
import HostEarningsPage from "../HostEarningsPage";
import HostChartsPage from "../HostChartsPage";

const HostConsoleComponent = () => {
    const { sessionUser, hostVehicles, todaysDate } = HostUtils();

    if (!sessionUser) return <Redirect to="/" />

    return (
        <Flex>
            <Box position="fixed">
                {isBrowser && <SideNavigation />}
            </Box>
            <Box style={{ width: "100%", marginLeft: isMobile  ? "0" : "16rem"}} p={12}>
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
                        <HostEarningsPage />
                    </Route>
                    <Route path="/host/charts">
                        <HostChartsPage />
                    </Route>    
                </Box>
            </Box>
        </Flex>
    )
};

export default HostConsoleComponent;