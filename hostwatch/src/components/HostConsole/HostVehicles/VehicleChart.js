import { Box, Center, Heading, LinkBox, LinkOverlay, SimpleGrid } from "@chakra-ui/react";
import React from "react";

import VehiclesUtils from "./VehiclesUtils";

const VehicleChart = ({hostVehicles, onOpen}) => {
    const { GenerateVehicleChart, isOpen } = VehiclesUtils();

    return (
        <Box maxHeight="700px" width="100%">
            <SimpleGrid  minChildWidth="200px" columns={4} spacing={25}>
                <LinkBox as={Center} w="200px" h="200px" backgroundColor="#F8E9A1" _hover={{backgroundColor:"whiteAlpha.300"}} borderRadius="0.35em" >
                    <LinkOverlay onClick={onOpen} href="#" />
                    <Heading size="sm" color="black" >add to your fleet.</Heading>
                </LinkBox>
                <GenerateVehicleChart  hostVehicles={hostVehicles}/>    
            </SimpleGrid>
        </Box>
    )
};

export default VehicleChart;