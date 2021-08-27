import { ArrowBackIcon, Icon } from "@chakra-ui/icons";
import { Box, Button, Center, Container, Divider, Flex, Grid, GridItem, Heading, Image, SimpleGrid, VStack, Wrap, WrapItem, Link } from "@chakra-ui/react"
import { useSelector } from "react-redux";
import { NavLink, Redirect, Route, Switch } from "react-router-dom"
import TripsComponent from "../TripsComponent"
import VehiclesPage from "../VehiclesComponent"

const HostConsoleComponent = () => {
    const sessionUser = useSelector(state => state.session.user)

    return (
        <Flex style={{height: "100%"}}>
            <Box style={{minWidth: "16rem", height: "100%", backgroundColor: "orange"}}>
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
                            <Button margin="1rem">
                                <ArrowBackIcon />    
                            </Button>
                            <Button margin="1rem">logout.</Button>
                        </Box>
                    </VStack>
                </Box>
            </Box>
            <Box style={{padding: "1rem", width: "100%"}} backgroundColor="lightgray">
                <Box height="100%" width="100%">
                    <Route path="/host/vehicles">
                        <VehiclesPage />
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