import { Box, Divider, Heading } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";

import AddVehicleComponent from "./AddVehicleComponent"
import TuroStatsComponent from "./TuroStatsComponent";
import VehicleChart from "./VehicleChart"
import * as vehicleActions from "../../store/vehicle";


const VehiclesPage = ({sessionUser, hostVehicles}) => {

    if (!sessionUser) return <Redirect to="/login" />

     return (
        <Box>    
            <Heading size="lg" fontSize="55px" fontWeight="light" pb={10}>
                your fleet.
            </Heading>
            <Divider />
            <AddVehicleComponent />
            <Divider />
            <VehicleChart hostVehicles={hostVehicles}/>            
            <Divider />  
            <TuroStatsComponent />    
        </Box>
        
    )

};

export default VehiclesPage;