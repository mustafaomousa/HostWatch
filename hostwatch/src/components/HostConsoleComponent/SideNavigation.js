import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Divider, Heading, Image, VStack, Link } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import LogoutButton from "../LogoutComponent/LogoutButton";

const SideNavigation = () => {
    const sessionUser = useSelector(state => state.session.user);

    return (
        <Box style={{minWidth: "16rem", height: "100%", position:"fixed", backgroundColor: "orange"}}>
                <Box style={{display: "flex", flexDirection: "column", height: "100%", padding: "1rem"}}>
                    <Button style={{width:"100%", height: "65px", padding: "1rem"}}>
                        <Image borderRadius="full" boxSize="50px" src={sessionUser.profilePicture} />
                        <Container overflow="hidden">
                            <Heading size="md">
                                {sessionUser.username}
                            </Heading>
                        </Container>
                    </Button>
                    <Divider paddingTop="3rem"/>
                    <VStack style={{width: "100%", paddingTop:"3rem", paddingBottom: "3rem"}} spacing={3}>
                        <Button as={NavLink} to="/host/vehicles" width="100%">
                            vehicles.
                        </Button>
                        <Button as={NavLink} to="/host/trips" width="100%">
                            trips.
                        </Button>
                        <Button as={NavLink} to="/host/vehicles" width="100%">
                            earnings.
                        </Button>
                        <Button as={NavLink} to="/host/vehicles" width="100%">
                            charts.
                        </Button>
                    </VStack>
                    <Divider />
                    <VStack style={{width: "100%", paddingTop:"3rem", paddingBottom: "3rem"}} spacing={3}>
                        <Button style={{width: "100%"}} >
                            <Link>
                                account settings.
                            </Link>
                        </Button>
                        <Button style={{width: "100%"}} >
                            <Link>
                                compile.
                            </Link>
                        </Button>
                        <Button style={{width: "100%"}} >
                            <Link>
                                f.a.q.
                            </Link>
                        </Button>
                        <Button style={{width: "100%"}} >
                            <Link>
                                contact.
                            </Link>
                        </Button>
                    </VStack>
                    <VStack style={{width: "100%", height: "100%", paddingTop:"3rem", paddingBottom: "1rem", display: "flex", justifyContent: "flex-end"}} spacing={3}>
                        <Divider />
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