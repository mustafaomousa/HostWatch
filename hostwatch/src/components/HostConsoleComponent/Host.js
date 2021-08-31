import { Badge, Box, Center, Divider, GridItem, Heading, SimpleGrid } from "@chakra-ui/react"
import { useState } from "react";

import VehicleControlComponent from "./VehicleControlComponent";

const Host = ({sessionUser, hostVehicles, todaysDate}) => {

    return (
        <Box>
            <VehicleControlComponent hostVehicles={hostVehicles}/>
            <Divider />
            <Heading pt={20} size="md" style={{textDecoration:"underline"}}>
                Quick stats
            </Heading>
            <Center>
                <SimpleGrid columns={2}>
                    <GridItem>
                        <Box backgroundColor="#374785" h={450} w={600} m={20} borderRadius="0.55em" style={{boxShadow: "rgba(0, 0, 0, 0.45) 0px 10px 20px -10px"}}>

                        </Box>
                    </GridItem>
                    <GridItem>
                        <Box backgroundColor="#374785" h={450} w={600} m={20} borderRadius="0.55em" style={{boxShadow: "rgba(0, 0, 0, 0.45) 0px 10px 20px -10px"}}>

                        </Box>
                    </GridItem>
                </SimpleGrid>       
                
                
            </Center>
        </Box>
    )
};

export default Host;