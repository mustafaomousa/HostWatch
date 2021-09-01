import { Box, Center, Heading, LinkBox, LinkOverlay } from "@chakra-ui/react"

import TripChart from "../../components/TripsComponents/TripChart";
import TripsUtils from "../../components/TripsComponents/TripsUtils";
import AddTripDrawer from "../../components/TripsComponents/AddTripDrawer";

import "./index.css";

const TripsComponent = () => {
    const { isOpen, onOpen, onClose } = TripsUtils();

    return (
        <Box style={{height: "100%", width: "100%"}}>
            <AddTripDrawer isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
            <Heading color="whiteAlpha.600" fontSize="55px" fontWeight="light" pb={10}>
                your trips.
            </Heading>
            <Center>
                <LinkBox as={Box} minWidth="400px" backgroundColor="whiteAlpha.100" _hover={{backgroundColor:"whiteAlpha.300"}} borderTopLeftRadius="0.55em" borderBottomLeftRadius="0.55em">
                    <Center height="700px" width="100%">
                        <LinkOverlay href="#" onClick={onOpen} />
                        <Heading color="white">
                            add a trip.    
                        </Heading>
                    </Center>
                </LinkBox>
                <TripChart />    
            </Center>
        </Box>
        
    )
};

export default TripsComponent;