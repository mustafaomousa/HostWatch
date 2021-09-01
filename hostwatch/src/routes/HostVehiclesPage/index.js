import { Box, Divider, Heading } from "@chakra-ui/react";
import { Redirect } from "react-router-dom";

import AddVehicleComponent from "../../components/VehiclesComponents/AddVehicleComponent"
import TuroStatsComponent from "../../components/VehiclesComponents/TuroStatsComponent";
import VehicleChart from "../../components/VehiclesComponents/VehicleChart"
import VehiclesUtils from "../../components/VehiclesComponents/VehiclesUtils";


const VehiclesPage = ({ sessionUser, hostVehicles }) => {
    const { dispatch } = VehiclesUtils();

    if (!sessionUser) return <Redirect to="/login" />

     return (
        <Box>    
            <Heading size="lg" fontSize="55px" fontWeight="light" pb={10}>
                your fleet.
            </Heading>
            <AddVehicleComponent sessionUser={sessionUser} dispatch={dispatch} />
            <VehicleChart hostVehicles={hostVehicles}/>            
            <TuroStatsComponent />    
        </Box>
        
    )

};

export default VehiclesPage;