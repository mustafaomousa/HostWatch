import { Box, Flex, Heading, SimpleGrid, Button } from "@chakra-ui/react";
import { useState } from "react";
import VehicleControlComponent from "../DashboardComponents/VehicleControlComponent/VehicleControlComponent";


const Host = ({sessionUser, hostVehicles, todaysDate}) => {
    const [selectedVehicle, setSelectedVehicle] = useState(0);

    return (
        <Flex pt={20} flexDir="column" align="center">
            <Flex w="100%" pb={10}>
                <Heading>
                    dashboard.
                </Heading>
            </Flex>
            <Flex flexDir="column" w="100%" >
                <SimpleGrid columns={3} spacing={10} h={280}>
                    <Box backgroundColor="lightgray" >

                    </Box>
                    <Box backgroundColor="lightgray" >

                    </Box>
                    <Box backgroundColor="lightgray" >

                    </Box>
                </SimpleGrid>
                <Heading size="md" mt={10} pb={5}>
                    locate your fleet
                </Heading>
                <Flex mt={10} h={580}>
                    <Box backgroundColor="lightgray" w="100%" h="100%" align="center">
                        <Heading>
                            map coming soon.
                        </Heading>
                    </Box>
                </Flex>
                <Heading size="md" mt={10} pb={5}>
                            control your fleet
                </Heading>
                <SimpleGrid columns={2} h={280} spacing={10} >
                    <Flex flexDir="column" justify="space-between" backgroundColor="lightgray">
                        <Box p={5} height="100%">
                            {selectedVehicle === 0 && <Heading align="center"> please select a vehicle. </Heading>}
                            {selectedVehicle !== 0 && <VehicleControlComponent hostVehicles={hostVehicles} vehicleId={selectedVehicle} />}
                        </Box>
                        <Flex pb={5} justify="space-evenly">
                            {(Object.keys(hostVehicles)).map((vehicleId, index) => (
                                <Button onClick={() => setSelectedVehicle(vehicleId)} background="none" key={vehicleId}>{index + 1}</Button>
                            ))}    
                        </Flex>
                    </Flex>
                    <Box backgroundColor="lightgray">
                        
                    </Box>      
                </SimpleGrid>
            </Flex>    
        </Flex>
        
    )
};

export default Host;