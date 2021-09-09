import { Box, Heading, Button, Flex } from "@chakra-ui/react";
import { Redirect } from "react-router-dom";

import AddVehicleDrawer from "./AddVehicleDrawer";
import VehiclesUtils from "./VehiclesUtils";
import FleetTable from "./FleetTable";


const HostVehicles = ({ sessionUser, hostVehicles }) => {
    const { onOpen, onClose, isOpen } = VehiclesUtils();

    if (!sessionUser) return <Redirect to="/login" />

     return (
        <Box pt={20}>
            <AddVehicleDrawer isOpen={isOpen} onClose={onClose} onOpen={onOpen}/>
            <Heading color="black">
                your fleet.
            </Heading>
            <Box flexDir="column">
                <Flex w="100%" flexDir="row" justify="space-between">
                    <Box flexDir="row">
                        {/* <Button>Test</Button> */}
                    </Box>
                    <Box flexDir="row">
                        <Button onClick={onOpen} disabled={Object.keys(hostVehicles).length >= 5 ? true : false}>add vehicle</Button>
                        {/* <Button>edit fleet</Button> */}
                    </Box>
                </Flex>
                <Box pt={5}  borderRadius="0.35em">
                    <FleetTable hostVehicles={hostVehicles} />
                </Box>
            </Box>
            {/* <Center>
                <VehicleChart isOpen={isOpen} onOpen={onOpen} hostVehicles={hostVehicles}/> 
            </Center>   */}
        </Box>
        
    )

};

export default HostVehicles;