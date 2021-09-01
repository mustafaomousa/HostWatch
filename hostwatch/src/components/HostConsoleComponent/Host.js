import { Badge, Box, Center, Divider, GridItem, Heading, SimpleGrid, Wrap, WrapItem } from "@chakra-ui/react"
import { useState } from "react";

import VehicleControlComponent from "./VehicleControlComponent";

const Host = ({sessionUser, hostVehicles, todaysDate}) => {

    return (
        <Box>
            <VehicleControlComponent hostVehicles={hostVehicles}/>
            <Heading pt={20} size="md" style={{textDecoration:"underline"}}>
                Quick stats
            </Heading>
            <Center>
                <Wrap>
                    <WrapItem>
                        <Box backgroundColor="#374785" h={420} w={500} m={20} borderRadius="0.55em" style={{boxShadow: "rgba(0, 0, 0, 0.45) 0px 10px 20px -10px"}}>

                        </Box>    
                    </WrapItem>
                    <WrapItem>
                        <Box backgroundColor="#374785" h={420} w={500} m={20} borderRadius="0.55em" style={{boxShadow: "rgba(0, 0, 0, 0.45) 0px 10px 20px -10px"}}>

                        </Box>
                    </WrapItem>
                </Wrap>   
            </Center>
        </Box>
    )
};

export default Host;