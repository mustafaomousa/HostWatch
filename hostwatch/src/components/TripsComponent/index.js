import { Box, Center, Divider, Heading, SimpleGrid } from "@chakra-ui/react"
import TripCalendar from "./TripCalendar"

import "./index.css";

const TripsComponent = () => {
    return (
        <Box style={{height: "100%", width: "100%"}}>
            <Heading fontSize="55px" fontWeight="light" pb={10}>
                your trips.
            </Heading>
            <Divider />
        </Box>
        
    )
};

export default TripsComponent;