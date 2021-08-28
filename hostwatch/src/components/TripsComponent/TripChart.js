import { Box, Heading, Table, Tbody, Th, Thead, Tr } from "@chakra-ui/react";

const TripChart = () => {
    return (
        <Box p={20} height="700px">
            <Heading size="md" style={{textDecoration:"underline"}}>
                your trips.
            </Heading>
            <Table variant="striped" mt={8}>
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
                    {/* {Object.keys(hostVehicles).map((key, idx) => (
                        <Tr>
                            <Td>{hostVehicles[key].year}</Td>
                            <Td>{hostVehicles[key].make}</Td>
                            <Td>{hostVehicles[key].model}</Td>      
                            <Td>{hostVehicles[key].createdAt.slice(0,10)}</Td>
                            <Td><Button><Icon as={ViewIcon} /></Button></Td> 
                            <Td><Button onClick={onOpen}><Icon as={EditIcon} /></Button></Td>       
                        </Tr>
                    ))} */}
                </Tbody>
            </Table>
        </Box>
    )
}

export default TripChart;