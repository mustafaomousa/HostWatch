import { Box, Button, Center, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, useDisclosure } from "@chakra-ui/react";
import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import EditVehicleComponent from "./EditVehicleComponent";

const VehicleChart = ({hostVehicles}) => {
    const vehicleToEdit = React.useRef();

    const {isOpen, onOpen, onClose } = useDisclosure();

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
                    {Object.keys(hostVehicles).map((key, idx) => (
                        <Tr>
                            <Td>{hostVehicles[key].year}</Td>
                            <Td>{hostVehicles[key].make}</Td>
                            <Td>{hostVehicles[key].model}</Td>      
                            <Td>{hostVehicles[key].createdAt.slice(0,10)}</Td>
                            <Td><Button><Icon as={ViewIcon} /></Button></Td> 
                            <Td><Button onClick={onOpen}><Icon as={EditIcon} /></Button></Td>       
                        </Tr>
                    ))}
                </Tbody>
            </Table>
            <EditVehicleComponent vehicleToEdit={vehicleToEdit} isOpen={isOpen} onClose={onClose}/>
        </Box>
    )
};

export default VehicleChart;