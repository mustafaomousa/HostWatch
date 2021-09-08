import { Box, Center, Flex, Heading, LinkBox, LinkOverlay, SimpleGrid } from "@chakra-ui/react"

import TripChart from "./TripChart";
import TripsUtils from "./TripsUtils";
import AddTripDrawer from "./AddTripDrawer";

import "./index.css";
import { useSelector } from "react-redux";

const HostTrips = () => {
    const { isOpen, onOpen, onClose, GenerateTripsChart } = TripsUtils();

    const hostTrips = useSelector(state => state.trips)

    return (
        <Flex flexDirection="column" pt={20}>
            <AddTripDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            
            <Heading color="black" pb={10}>
                your trips.
            </Heading>
            <Box>
                <SimpleGrid  minChildWidth="200px" columns={4} spacing={25}>
                    <LinkBox as={Center} w="200px" h="200px" backgroundColor="#F8E9A1" _hover={{backgroundColor:"darkgray"}} borderRadius="0.35em" >
                        <LinkOverlay onClick={onOpen} href="#" />
                        <Heading size="sm" color="black"> add a trip. </Heading>
                    </LinkBox>
                    <GenerateTripsChart hostTrips={hostTrips} />
                </SimpleGrid>
            </Box>
            {/* <Flex>
                <TripChart />    
            </Flex> */}
        </Flex>
        
    )
};

export default HostTrips;