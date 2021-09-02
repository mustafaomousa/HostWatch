import { Box, Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";

import VehicleControlComponent from "./VehicleControlComponent";

const Host = ({sessionUser, hostVehicles, todaysDate}) => {

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
                <Flex mt={10} h={580}>
                    <Box backgroundColor="lightgray" w="100%">
                        <p>map of fleet</p>
                    </Box>
                </Flex>
                <SimpleGrid mt={10} columns={2} h={280} spacing={10} >
                    <Box backgroundColor="lightgray">

                    </Box>
                    <Box backgroundColor="lightgray">

                    </Box>      
                </SimpleGrid>
            </Flex>    
        </Flex>
        
    )
};

export default Host;