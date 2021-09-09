import { Box, Center, Heading, Button, Flex, Radio } from "@chakra-ui/react";
import {EditIcon} from "@chakra-ui/icons";
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react"
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { useState } from "react";

import AddVehicleDrawer from "./AddVehicleDrawer";
import VehicleChart from "./VehicleChart"
import VehiclesUtils from "./VehiclesUtils";


const HostVehicles = ({ sessionUser, hostVehicles }) => {
    const { onOpen, onClose, isOpen } = VehiclesUtils();

    if (!sessionUser) return <Redirect to="/login" />

    const FleetTable = ({hostVehicles}) => {

        return (
            <Table variant="striped" cellSpacing="0" cellPadding="0" colorScheme="blue">
                {Object.keys(hostVehicles).length >= 5 && <TableCaption>you've reached the maximum amount of vehicles allowed.</TableCaption>}
                <Thead>
                    <Tr>
                        <Th></Th>
                        <Th>year</Th>
                        <Th>make</Th>
                        <Th>model</Th>
                        <Th>photos</Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {hostVehicles && Object.keys(hostVehicles).map((vehicleId, idx) => {
                        return (
                            <Tr>
                                <Td pr={0}><Button><EditIcon/> edit </Button></Td>
                                <Td>{hostVehicles[vehicleId].year}</Td>
                                <Td>{hostVehicles[vehicleId].make}</Td>
                                <Td>{hostVehicles[vehicleId].model}</Td>
                                <Td></Td>
                                <Td></Td>
                            </Tr>
                        )
                    })}
                </Tbody>
            </Table>
        )
    }

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