import { Box, Heading,Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";
import React from "react";

import EditVehicleComponent from "./EditVehicleComponent";
import VehiclesUtils from "./VehiclesUtils";

const VehicleChart = ({hostVehicles}) => {
    const {isOpen, onClose, GenerateVehicleChart } = VehiclesUtils();

    return (
        <Box p={20}>
            <Heading size="md" style={{textDecoration:"underline"}}>
                your fleet.
            </Heading>
            <Table variant="striped" mt={8}>
                <Thead>
                    <Tr>
                        <Th>year</Th>
                        <Th>make</Th>
                        <Th>model</Th>
                        <Th>date added</Th>
                        <Th>pictures</Th>
                        <Th></Th>
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