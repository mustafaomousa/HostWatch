import { Box, Flex, Heading, Select, Table, TableCaption, Thead, Tr, Td, Tbody, Th} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as vehicleActions from "../../../store/vehicle";

const HostEarnings = () => {
    const dispatch = useDispatch();

    const [selectedVehicle, setSelectedVehicle] = useState(undefined);

    const updateSelectedVehicle = (e) => setSelectedVehicle(e.target.value);

    const hostVehicles = useSelector(state => state.vehicles);
    const selectedVehicleEarnings = useSelector(state => state.vehicles[`${selectedVehicle}-earnings`]);
    console.log(selectedVehicleEarnings)

    useEffect(() => {
        dispatch(vehicleActions.getSelectedVehicleEarnings(selectedVehicle));
    },[selectedVehicle, dispatch])

    return (
        <Box pt={20}>
            <Heading color="black">
                your earnings.
            </Heading>
            <Flex flexDir="column" pt={20}>
                <Select onChange={updateSelectedVehicle} variant="flushed" placeholder="select a vehicle">
                    {Object.keys(hostVehicles).map((vehicleId, _idx) => {
                        let vehicle = hostVehicles[vehicleId];
                        return (
                            <option value={vehicle.id}>{vehicle.year} {vehicle.make} {vehicle.model}</option>
                        )
                    })}
                </Select>
                <Box p={20}>
                    {selectedVehicle && selectedVehicleEarnings && 
                    <Table variant="striped" colorScheme="blue" border="4px solid blue">
                        <TableCaption>{hostVehicles[selectedVehicle].year} {hostVehicles[selectedVehicle].make} {hostVehicles[selectedVehicle].model}</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>earnings</Th>
                                <Th>reinbursements</Th>
                                <Th>total earnings</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {selectedVehicleEarnings.map(earning => {
                                return (
                                    <Tr>
                                        <Td>$ {earning.earnings}</Td>
                                        <Td>$ {earning.reinbursements}</Td>
                                        <Td>$ {earning.earnings + earning.reinbursements}</Td>
                                    </Tr>
                                )
                            })}
                        </Tbody>
                    </Table>}
                </Box>
            </Flex>
        </Box>
    )
};

export default HostEarnings;

