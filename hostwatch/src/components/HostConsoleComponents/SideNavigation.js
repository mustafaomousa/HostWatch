import { ArrowBackIcon, ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Divider, Heading, VStack, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

import LogoutButton from "../LogoutComponent/LogoutButton";

const SideNavigation = ({sideClosed, setSideClosed}) => {

    return (
        <Box style={{minWidth: "16rem", position:"fixed", height:"100%", display: sideClosed ? "none" : "", backgroundColor: "#374785"}}>
                <Box style={{display: "flex", flexDirection: "column", height: "100%", padding: "1rem"}}>
                        <Heading size="md" align="center" p={5} color="white" fontSize="30px">
                            <NavLink to="/host" >Host Console</NavLink>
                        </Heading>
                    {/* <Divider paddingTop="3rem"/> */}
                    <VStack style={{width: "100%", paddingTop:"3rem", paddingBottom: "3rem", fontSize:"20px"}} spacing={8}>
                        <NavLink style={{width: "100%", textAlign: "center", color: "white"}} to="/host/vehicles">
                            vehicles.
                        </NavLink>
                        <NavLink style={{width: "100%", textAlign: "center", color: "white"}} to="/host/trips">
                            trips.
                        </NavLink>
                        <NavLink style={{width: "100%", textAlign: "center", color: "white"}} to="/host/vehicles">
                            earnings.
                        </NavLink>
                        <NavLink style={{width: "100%", textAlign: "center", color: "white"}} to="/host/vehicles">
                            charts.
                        </NavLink>
                    </VStack>
                    <VStack style={{width: "100%", paddingTop:"3rem", paddingBottom: "3rem", fontSize:"20px"}} spacing={10}>
                        <NavLink to="/host" style={{width: "100%", textAlign: "center", color: "white"}} >
                            account settings.
                        </NavLink>
                        <NavLink to="/host" style={{width: "100%", textAlign: "center", color: "white"}} >
                            compile.
                        </NavLink>
                        <NavLink to="/host" style={{width: "100%", textAlign: "center", color: "white"}} >
                            f.a.q.
                        </NavLink>
                        <NavLink to="/host" style={{width: "100%", textAlign: "center", color: "white"}} >
                            contact.
                        </NavLink>
                    </VStack>
                    <VStack style={{width: "100%", height: "100%", paddingTop:"3rem", paddingBottom: "1rem", display: "flex", justifyContent: "flex-end"}} spacing={3}>
                        {/* <Divider /> */}
                        <Box>
                            <Button as={NavLink} to="/" margin="1rem">
                                <ArrowBackIcon />    
                            </Button>
                            <LogoutButton margin="1rem"/>
                        </Box>
                    </VStack>
                </Box>
            </Box>
    );
};

export default SideNavigation;