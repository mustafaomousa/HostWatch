import { Box, Divider, Heading } from "@chakra-ui/react"

import "./index.css";
import AddTrip from "./AddTrip";
import TripChart from "./TripChart";

const TripsComponent = () => {
    return (
        <Box style={{height: "100%", width: "100%"}}>
            <Heading fontSize="55px" fontWeight="light" pb={10}>
                your trips.
            </Heading>
            <Divider />
            <AddTrip />
            <Divider />
            <TripChart />
        </Box>
        
    )
};

export default TripsComponent;