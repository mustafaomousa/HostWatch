import { Box, Divider, Heading } from "@chakra-ui/react"

import "./index.css";
import AddTrip from "../../components/TripsComponents/AddTrip";
import TripChart from "../../components/TripsComponents/TripChart";

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