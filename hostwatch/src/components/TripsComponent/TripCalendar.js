import { Box, Center, Heading } from '@chakra-ui/react';
import Calendar from 'react-calendar';

import 'react-calendar/dist/Calendar.css';

const TripCalendar = () => {
    return (
        <Box p={10}>
            <Center flexDir="column">
                <Heading size="md" pb={5}>
                    trip calendar.
                </Heading>
                <Calendar className="TripCalendar"/>    
            </Center>
            
        </Box>
    )
};

export default TripCalendar;