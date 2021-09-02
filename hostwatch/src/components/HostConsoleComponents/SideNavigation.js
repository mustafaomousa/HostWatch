import { Avatar, Box, Flex, Heading, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Link, NavLink, Redirect } from "react-router-dom";

const SideNavigation = ({sideClosed, setSideClosed}) => {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <Box style={{minWidth: "16rem", position:"fixed", height:"100%", display: sideClosed ? "none" : "", backgroundColor: "#374785", boxShadow: "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px"}}>
                <Box style={{display: "flex", flexDirection: "column", height: "100%"}}>
                    <Flex padding="1rem">
                        <Flex as={Link} to="/host" align="center" justify="center" w="100%"  p={2} borderRadius="0.25em" _hover={{color:"lightgray"}} transition="ease 0.55s" >
                            <Avatar mr={5} />
                            <Heading fontSize="22px" color="white">
                                {sessionUser.username}    
                            </Heading>
                        </Flex>
                    </Flex>
                    <VStack style={{width: "100%", paddingTop:"3rem", paddingBottom: "3rem", fontSize:"20px"}}>
                        <Link pt={20} activeClassName="active" style={{width: "100%", textAlign: "center", color: "white", transition: "cubic-bezier(0.77, 0, 0.175, 1) .5s"}} to="/host" height="50px">
                            dashboard.
                        </Link>
                        <NavLink activeClassName="active" style={{width: "100%", textAlign: "center", color: "white", transition: "cubic-bezier(0.77, 0, 0.175, 1) .5s"}} to="/host/vehicles" height="50px">
                            vehicles.
                        </NavLink>
                        <NavLink activeClassName="active" style={{width: "100%", textAlign: "center", color: "white", transition: "cubic-bezier(0.77, 0, 0.175, 1) .5s"}} to="/host/trips" height="50px">
                            trips.
                        </NavLink>
                        <NavLink activeClassName="active" style={{width: "100%", textAlign: "center", color: "white", transition: "cubic-bezier(0.77, 0, 0.175, 1) .5s"}} to="/host/earnings" height="50px">
                            earnings.
                        </NavLink>
                        <NavLink activeClassName="active" style={{width: "100%", textAlign: "center", color: "white", transition: "cubic-bezier(0.77, 0, 0.175, 1) .5s"}} to="/host/charts" height="50px">
                            charts.
                        </NavLink>
                    </VStack>
                    {/* <VStack style={{width: "100%", paddingTop:"3rem", paddingBottom: "3rem", fontSize:"20px"}} spacing={10}>
                        <NavLink to="/host/abc" style={{width: "100%", textAlign: "center", color: "white"}} >
                            account settings.
                        </NavLink>
                        <NavLink to="/host/abc" style={{width: "100%", textAlign: "center", color: "white"}} >
                            compile.
                        </NavLink>
                    </VStack> */}
                    <VStack style={{width: "100%", height: "100%", paddingTop:"3rem", paddingBottom: "1rem", display: "flex", justifyContent: "flex-end"}} spacing={3}>
                        {/* <Divider /> */}
                        {/* <Box>
                            <Link to="/" margin="1rem">
                                <Heading size="sm" color="white">home</Heading>
                            </Link>
                        </Box> */}
                    </VStack>
                </Box>
            </Box>
    );
};

export default SideNavigation;