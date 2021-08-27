import { Box, Center, Divider, Heading, SimpleGrid } from "@chakra-ui/react"
import TripCalendar from "./TripCalendar"

import "./index.css";

const TripsComponent = () => {
    return (
        <Box>
            <SimpleGrid
                spacing="40px"
                columns="1fr 1fr 1fr"
                minChildWidth="400px"
                align="center">
                <Box p={10} h="500px" backgroundColor="lightslategray">
                    <Heading size="md">
                        add a past/upcoming trip.
                    </Heading>
                </Box>
                <Box>
                    <Center h="100%">
                        <Heading fontSize="55px" fontWeight="light">
                            your trips.
                        </Heading>    
                    </Center>
                </Box>
                <Box backgroundColor="lightgray" p={10} h="500px">
                    <Heading size="md">
                        past trips.
                    </Heading>
                </Box>
                <Box backgroundColor="lightgray" p={10} h="500px">
                    <Heading size="md">
                        upcoming trips.
                    </Heading>
                </Box>
                <Box backgroundColor="lightgray" p={10} h="500px">
                    <Heading size="md">
                        currently on a trip.
                    </Heading>
                </Box>
                <Box backgroundColor="lightgray" p={10} h="500px">
                    <Heading size="md">
                        miles this month.
                    </Heading>
                </Box>
            </SimpleGrid>
            <Center>
                <Divider width="80%" />    
            </Center>
            
            <Box>
                <TripCalendar />
            </Box>
        </Box>
        
    )
};

export default TripsComponent;