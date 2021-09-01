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
            <Heading color="whiteAlpha.600" size="lg" fontSize="55px" fontWeight="light" pb={10}>
                your fleet.
            </Heading>
            <Center>
                <LinkBox as={Box} minWidth="400px" backgroundColor="whiteAlpha.100" _hover={{backgroundColor:"whiteAlpha.300"}} borderTopLeftRadius="0.55em" borderBottomLeftRadius="0.55em">
                    <Center height="700px" width="100%">
                        <LinkOverlay href="#" onClick={onOpen} />
                        <Heading color="white">
                            add a vehicle.
                        </Heading>
                    </Center>
                </LinkBox>
                <VehicleChart hostVehicles={hostVehicles}/> 
            </Center>  
        </Box>
        
    )

};

export default VehiclesPage;