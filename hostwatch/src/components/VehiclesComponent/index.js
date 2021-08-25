import { Grid, GridItem } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import AddVehicleComponent from "./AddVehicleComponent"
import TuroStatsComponent from "./TuroStatsComponent";
import VehicleChart from "./VehicleChart"
import VehicleControlComponent from "./VehicleControlComponent";

const VehiclesPage = () => {
    const sessionUser = useSelector(state => state.session.user);

    if (!sessionUser) return <Redirect to="/login" />

    return (
        <Grid
        templateRows="repeat(1, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={10}
        >
            <GridItem rowSpan={2} colSpan={1} background="lightgray">
                <VehicleControlComponent />
            </GridItem>
            <GridItem colSpan={1} background="lightgray">
                <TuroStatsComponent />
            </GridItem>
            <GridItem colSpan={1} background="lightgray">
                {/* <TuroStatsComponent /> */}
            </GridItem>
            <GridItem colSpan={2} background="lightgray">
                <AddVehicleComponent />    
            </GridItem>
            <GridItem colSpan={4} background="lightgray">
                <VehicleChart />    
            </GridItem>
        </Grid>
        
    )
};

export default VehiclesPage;