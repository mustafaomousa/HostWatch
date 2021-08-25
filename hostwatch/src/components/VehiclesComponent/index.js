import { Grid, GridItem } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";

import AddVehicleComponent from "./AddVehicleComponent"
import TuroStatsComponent from "./TuroStatsComponent";
import VehicleChart from "./VehicleChart"
import VehicleControlComponent from "./VehicleControlComponent";
import * as vehicleActions from "../../store/vehicle";
import Header from "./Header";


const VehiclesPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const hostVehicles = useSelector(state => state.vehicles);

    useEffect(() => {
        dispatch(vehicleActions.getHostVehicles(sessionUser.id))
    },[])

    if (!sessionUser) return <Redirect to="/login" />

    return (
        <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={5}
        >
            <GridItem rowSpan={2} colSpan={1} background="lightgray" borderTopLeftRadius="1em" borderBottomLeftRadius="1em">
                <VehicleControlComponent hostVehicles={hostVehicles}/>
            </GridItem>
            <GridItem colSpan={1} align="center" borderRadius="1em">
                <Header />
            </GridItem>
            <GridItem colSpan={1} background="lightgray">
                <TuroStatsComponent />
            </GridItem>
            <GridItem colSpan={2} background="lightgray" borderTopRightRadius="1em">
                <AddVehicleComponent />    
            </GridItem>
            <GridItem colSpan={4} background="lightgray" borderBottomRightRadius="1em">
                <VehicleChart hostVehicles={hostVehicles}/>    
            </GridItem>
        </Grid>
        
    )
};

export default VehiclesPage;