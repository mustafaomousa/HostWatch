import { Box, Button, Center, Flex, Heading, Input, VStack } from "@chakra-ui/react";
import { NavLink, Redirect, Route } from "react-router-dom";
import { isBrowser, isMobile } from "react-device-detect";

import TripsComponent from "../../routes/HostTripsPage";
import VehiclesPage from "../../routes/HostVehiclesPage";
import Host from "../../components/HostConsoleComponents/Host";
import SideNavigation from "../../components/HostConsoleComponents/SideNavigation";
import "./index.css";
import HostUtils from "../../components/HostConsoleComponents/HostUtils";
import HostEarningsPage from "../HostEarningsPage";
import HostChartsPage from "../HostChartsPage";
import { HamburgerIcon, Search2Icon, } from "@chakra-ui/icons";
import { useState } from "react";
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";

const HostConsoleComponent = () => {
    const dispatch = useDispatch();

    const { sessionUser, hostVehicles, todaysDate } = HostUtils();
    const [mobileBurgerOpen, setMobileBurgerOpen] = useState(false);

    const openMobileBurger = (e) => {
        e.preventDefault()
        setMobileBurgerOpen(!mobileBurgerOpen);
    }

    if (!sessionUser) return <Redirect to="/" />

    return (
        <Flex>
            {isMobile && (
                <Box position="fixed" top="0" p={0} width="100%" backgroundColor="darkgray" zIndex="2000">
                    <HamburgerIcon ml={10} mt={10} mb={10} onClick={openMobileBurger} color="white" />
                    <Center width="100%" mt={10} display={mobileBurgerOpen ? "" : "none"}> 
                        <NavLink to="/host/vehicles">vehicles.</NavLink>
                        <NavLink to="/host/trips">trips.</NavLink>
                        <NavLink to="/host/earnings">earnings.</NavLink>
                        <NavLink to="/host/charts">charts.</NavLink>
                    </Center>
                </Box>
            )}
            <Box position="fixed">
                {isBrowser && <SideNavigation />}
            </Box>
            <Box style={{ width: "100%", marginLeft: isMobile  ? "0" : "16rem", paddingTop: isMobile ? "100px" : "50px"}} p={12} textAlign={isMobile ? 'center' : ''} >
                <Flex justify="space-between">
                    <Flex justify="center" align="center">
                        <Search2Icon mr={10} />
                        <Input backgroundColor="lightgray" placeholder="quick actions" _placeholder={{color:"darkslategray", textAlign:"center"}} />
                    </Flex>
                    <Flex>
                        <Button backgroundColor="lightgray" onClick={()=>dispatch(logout())}>
                            logout
                        </Button>
                    </Flex>
                </Flex>
                <Box>
                    <Route exact path="/host">
                        <Host sessionUser={sessionUser} hostVehicles={hostVehicles} todaysDate={todaysDate} />
                    </Route>
                    <Route exact path="/host/vehicles">
                        <VehiclesPage hostVehicles={hostVehicles} sessionUser={sessionUser}/>
                    </Route>
                    <Route exact path="/host/trips">
                        <TripsComponent />
                    </Route>
                    <Route exact path="/host/earnings">
                        <HostEarningsPage />
                    </Route>
                    <Route exact path="/host/charts">
                        <HostChartsPage />
                    </Route>    
                </Box>
            </Box>
        </Flex>
    )
};

export default HostConsoleComponent;