import { Box, Center, Flex, Heading, LinkBox, LinkOverlay } from "@chakra-ui/react"

import TripChart from "../../components/TripsComponents/TripChart";
import TripsUtils from "../../components/TripsComponents/TripsUtils";
import AddTripDrawer from "../../components/TripsComponents/AddTripDrawer";

import "./index.css";

const TripsComponent = () => {
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

export default TripsComponent;