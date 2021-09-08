import { Box, Center, Flex, Heading, LinkBox, LinkOverlay } from "@chakra-ui/react"

import TripChart from "./TripChart";
import TripsUtils from "./TripsUtils";
import AddTripDrawer from "./AddTripDrawer";

import "./index.css";

const HostTrips = () => {
    const { isOpen, onOpen, onClose } = TripsUtils();

    return (
        <Flex flexDirection="column" pt={20}>
            <AddTripDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            <Heading color="black" pb={10}>
                your trips.
            </Heading>
            <Flex>
                <TripChart />    
            </Flex>
        </Flex>
        
    )
};

export default HostTrips;