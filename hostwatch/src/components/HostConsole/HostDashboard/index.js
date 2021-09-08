import { EmailIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, SimpleGrid, Button, Center } from "@chakra-ui/react";
import { useState } from "react";
import CurrentMonthEarnings from "./CurrentMonthEarnings";
import TripsToday from "./TripsToday";

import VehicleControl from "./VehicleControl";


const HostDashboard = ({sessionUser, hostVehicles, todaysDate}) => {
    const [selectedVehicle, setSelectedVehicle] = useState(0);

    return (
        <Flex pt={20} flexDir="column" align="center" pb={20}>
            <Flex w="100%" pb={10}>
                <Heading>
                    dashboard.
                </Heading>
            </Flex>
            <Flex flexDir="column" w="100%" >
                <SimpleGrid columns={3} spacing={10} h={280}>
                    <Center flexDir="column" backgroundColor="lightgray" >
                        <Heading size="md">welcome {sessionUser.username}!</Heading>
                        <br />
                        <Heading size="sm">you have no alerts.</Heading>
                    </Center>
                    <Center backgroundColor="lightgray" >
                        <TripsToday />
                    </Center>
                    <Center backgroundColor="lightgray" >
                        <Heading size="md" _hover={{color:"blue"}}>
                           <EmailIcon/> feedback <EmailIcon />
                        </Heading>
                    </Center>
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
                
                <SimpleGrid columns={2} h={280} spacing={10}>
                    <Box>
                       <Heading size="md" mt={10} pb={5}>
                            control your fleet
                        </Heading> 
                        <Flex flexDir="column" justify="space-between" backgroundColor="lightgray" h={280}>
                            <Box p={5} height="100%">
                                {selectedVehicle === 0 && <Heading align="center"> please select a vehicle. </Heading>}
                                {selectedVehicle !== 0 && <VehicleControl hostVehicles={hostVehicles} vehicleId={selectedVehicle} />}
                            </Box>
                            <Flex pb={5} justify="space-evenly">
                                {(Object.keys(hostVehicles)).map((vehicleId, index) => (
                                    <Button onClick={() => setSelectedVehicle(vehicleId)} background="none" key={vehicleId}>{index + 1}</Button>
                                ))}    
                            </Flex>
                        </Flex>
                    </Box>
                    <Box>
                        <Heading size="md" mt={10} pb={5}>
                            earnings this month
                        </Heading> 
                        <Box backgroundColor="lightgray" h={280}>
                            <CurrentMonthEarnings />
                        </Box>     
                    </Box>
                </SimpleGrid>
            </Flex>    
        </Flex>
        
    )
};

export default HostDashboard;