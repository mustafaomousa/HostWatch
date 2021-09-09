import { Button } from "@chakra-ui/button";
import { EditIcon } from "@chakra-ui/icons";
import { useDisclosure } from "@chakra-ui/react";
import { Table, TableCaption, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import React, { useState } from "react";
import EditVehicleDrawer from "./EditVehicleDrawer";

const FleetTable = ({hostVehicles}) => {
    const [vehicle, setVehicle] = useState(undefined);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const buttonRef = React.useRef();

    const setSelectedVehicle = (e) => {
        e.preventDefault();
        setVehicle(hostVehicles[e.target.value]);
        return onOpen();
    }

    return (
        <Table variant="striped" cellSpacing="0" cellPadding="0" colorScheme="blue">
            {vehicle && <EditVehicleDrawer isOpen={isOpen} onClose={onClose} vehicle={vehicle} />}
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
                        <Tr key={vehicleId}>
                            <Td pr={0}><Button ref={buttonRef} value={vehicleId} onClick={setSelectedVehicle}><EditIcon/> edit </Button></Td>
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
};

export default FleetTable;