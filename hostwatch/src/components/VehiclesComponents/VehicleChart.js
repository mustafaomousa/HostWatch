import { Box, Heading,Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

import EditVehicleComponent from "./EditVehicleComponent";
import VehiclesUtils from "./VehiclesUtils";

const VehicleChart = ({hostVehicles}) => {
    const {isOpen, onClose, GenerateVehicleChart } = VehiclesUtils();

    return (
        <Box p={10} height="700px" width="900px" maxHeight="700px" overflow="scroll" backgroundColor="whiteAlpha.800">
            <Table variant="striped" mt={8} variant="simple">
                <Thead>
                    <Tr>
                        <Th>year</Th>
                        <Th>make</Th>
                        <Th>model</Th>
                        <Th>date added</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <GenerateVehicleChart hostVehicles={hostVehicles} />
                </Tbody>
            </Table>
            <EditVehicleComponent isOpen={isOpen} onClose={onClose}/>
        </Box>
    )
};

export default VehicleChart;