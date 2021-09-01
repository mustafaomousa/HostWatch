import { Box, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import TripsUtils from "./TripsUtils";

const TripChart = () => {
    const { hostTrips } = TripsUtils();

    return (
        <Box p={10} width="900px" height="700px" maxHeight="700px" overflow="scroll" backgroundColor="whiteAlpha.800">
            <Table variant="striped" mt={8} variant="simple">
                <Thead>
                    <Tr>
                        <Th>vehicle</Th>
                        <Th>start date</Th>
                        <Th>end date</Th>
                        <Th>earnings</Th>
                        <Th>reinbursements</Th>
                        <Th>miles driven</Th>
                        <Th>receipts</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {Object.keys(hostTrips).map((key, idx) => (
                        <Tr>
                            <Td>{hostTrips[key].vehicleId}</Td>
                            <Td>{hostTrips[key].startDate}</Td>
                            <Td>{hostTrips[key].endDate}</Td>
                            <Td>${hostTrips[key].earnings}</Td>      
                            <Td>${hostTrips[key].reinbursements}</Td>  
                            <Td>{hostTrips[key].milesDriven} mi.</Td>
                            <Td>. . .</Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </Box>
    )
}

export default TripChart;