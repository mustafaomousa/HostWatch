import { Box, Button, Center, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as vehicleActions from "../../store/vehicle";

const VehicleChart = ({hostVehicles}) => {
    const dispatch = useDispatch();

    return (
        <Box p={10}>
            <Center>
                <Heading size="md">
                    your fleet.
                </Heading>
            </Center>
            <Table variant="simple" mt={8}>
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
                            <Td><Button onClick={(e) => dispatch(vehicleActions.deleteHostVehicle(hostVehicles[key].id))}><Icon as={ViewIcon} /></Button></Td> 
                            <Td><Button><Icon as={EditIcon} /></Button></Td>       
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    )
};

export default VehicleChart;