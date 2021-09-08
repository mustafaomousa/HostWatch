import { Box, Center, Heading } from "@chakra-ui/react";
import { Redirect } from "react-router-dom";

import AddVehicleDrawer from "./AddVehicleDrawer";
import VehicleChart from "./VehicleChart"
import VehiclesUtils from "./VehiclesUtils";


const HostVehicles = ({ sessionUser, hostVehicles }) => {

    const { onOpen, onClose, isOpen } = VehiclesUtils();

    if (!sessionUser) return <Redirect to="/login" />

     return (
        <Box pt={20}>
            <AddVehicleDrawer isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
            <Heading color="black" pb={10}>
                your fleet.
            </Heading>
            <Center>
                <VehicleChart isOpen={isOpen} onOpen={onOpen} hostVehicles={hostVehicles}/> 
            </Center>  
        </Box>
        
    )

};

export default HostVehicles;