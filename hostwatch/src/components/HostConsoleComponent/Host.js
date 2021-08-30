import { Badge, Box, Center, Divider, Heading } from "@chakra-ui/react"

import VehicleControlComponent from "./VehicleControlComponent";

const Host = ({sessionUser, hostVehicles, todaysDate}) => {

    return (
        <Box>
            <Center style={{width:"100%"}}>
                <Center style={{width:"80%", backgroundColor:"darkgray", borderRadius:".75em"}} p={10}>
                    <Heading>Hello, {sessionUser.username}!</Heading>
                </Center>
            </Center>
            <Heading pt={20} size="2xl">
                {todaysDate} <Badge colorScheme="red">on 2 trips</Badge>
            </Heading>
            <Divider p={10}/>
            <VehicleControlComponent hostVehicles={hostVehicles}/>
            <Divider pb={10} />
            <Heading pt={20} size="2xl">
                Quick stats
            </Heading>
            <Box h={400}>

            </Box>
        </Box>
    )
};

export default Host;