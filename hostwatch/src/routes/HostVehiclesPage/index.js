import { Box, Center, Heading, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Redirect } from "react-router-dom";

import AddVehicleDrawer from "../../components/VehiclesComponents/AddVehicleDrawer";
import VehicleChart from "../../components/VehiclesComponents/VehicleChart"
import VehiclesUtils from "../../components/VehiclesComponents/VehiclesUtils";


const VehiclesPage = ({ sessionUser, hostVehicles }) => {

    const { onOpen, onClose, isOpen } = VehiclesUtils();

    if (!sessionUser) return <Redirect to="/login" />

     return (
        <Box>
            <AddVehicleDrawer isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
            <Heading color="whiteAlpha.700" size="lg" fontSize="55px" fontWeight="light" pb={10}>
                your fleet.
            </Heading>
            <Center>
                <VehicleChart isOpen={isOpen} onOpen={onOpen} hostVehicles={hostVehicles}/> 
            </Center>  
        </Box>
        
    )

};

export default VehiclesPage;