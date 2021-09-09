import { 
    Box,
    Flex, 
    Heading,
    Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td, } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

import TripsUtils from "./TripsUtils";
import AddTripDrawer from "./AddTripDrawer";

import "./index.css";

const HostTrips = () => {
    const { isOpen, onOpen, onClose, hostTrips, hostVehicles } = TripsUtils();

    const TripsTable = ({hostTrips, hostVehicles}) => {
            return (
                <Table variant="striped" color="black" colorScheme="blue">
                    <Thead>
                        <Tr>
                            <Th></Th>
                            <Th>vehicle</Th>
                            <Th>duration</Th>
                            <Th>days</Th>
                            <Th>earnings</Th>
                            <Th>reinbursements</Th>
                            <Th>miles driven</Th>
                            <Th>receipts</Th>
                        </Tr>
                    </Thead>
                    <Tbody >
                        {(hostTrips) && Object.keys(hostTrips).map((tripId, idx) => {
                            let vehicle = hostVehicles[hostTrips[tripId].vehicleId];
                            return (
                                <Tr>
                                    <Td pr={0}><Button><EditIcon/> edit </Button></Td>
                                    <Td>{vehicle && vehicle.make} {vehicle && vehicle.model}</Td>
                                    <Td>{hostTrips[tripId].startDate.slice(5).replace("-","/")} to {hostTrips[tripId].endDate.slice(5).replace("-","/")}</Td>
                                    <Td>days</Td>
                                    <Td>${hostTrips[tripId].earnings}</Td>
                                    <Td>${hostTrips[tripId].reinbursements}</Td>
                                    <Td>{hostTrips[tripId].milesDriven} mi.</Td>
                                    <Td></Td>
                                </Tr>
                            )
                        })}
                    </Tbody>
                </Table>
            )
    };

    return (
        <Flex flexDirection="column" pt={20}>
            <AddTripDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            <Heading color="black">
                your trips.
            </Heading>
            <Box flexDir="column">
                <Flex flexDir="row" justify="space-between">
                    <Box flexDir="row">
                        {/* <Button>Test</Button> */}
                    </Box>
                    <Box flexDir="row">
                        <Button onClick={onOpen}>add trip</Button>
                        {/* <Button>edit fleet</Button> */}
                    </Box>
                </Flex>
                <Box pt={5} borderRadius="0.35em">
                    <TripsTable hostTrips={hostTrips} hostVehicles={hostVehicles} />
                </Box>
            </Box>
        </Flex>
    )
};

export default HostTrips;