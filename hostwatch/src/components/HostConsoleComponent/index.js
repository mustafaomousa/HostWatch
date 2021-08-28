import { ArrowBackIcon, Icon } from "@chakra-ui/icons";
import { Box, Button, Center, Container, Divider, Flex, Grid, GridItem, Heading, Image, SimpleGrid, VStack, Wrap, WrapItem, Link } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, Route, Switch, useHistory } from "react-router-dom"
import TripsComponent from "../TripsComponent"
import VehiclesPage from "../VehiclesComponent"
import * as sessionActions from "../../store/session";
import LogoutButton from "../LogoutComponent/LogoutButton";
import SideNavigation from "./SideNavigation";

const HostConsoleComponent = () => {
    const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) return <Redirect to="/" />

    return (
        <Flex>
            <SideNavigation />
            <Box style={{ width: "100%", marginLeft:"16rem"}} p={12} backgroundColor="lightgray">
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
        </Flex>
    )
};

export default HostConsoleComponent;