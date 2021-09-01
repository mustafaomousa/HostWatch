import { Box, Center, Flex, Heading, Stack } from "@chakra-ui/react"
import React from "react";
import LoggedMilesChart from "./LoggedMilesChart";

const LoggedMiles = () => {
    

    return (
        <Center pt={20}>
            <Stack direction="row" spacing="50px">
                    <Flex direction="column">
                        <Box mb={10} w={400} h={420} backgroundColor="#A8D0E6" borderRadius="0.55em" style={{boxShadow: "rgba(0, 0, 0, 0.45) 0px 10px 20px -18px"}}>
                            {/* <LoggedMilesChart /> */}
                        </Box>
                        <Heading size="md" color="whiteAlpha.800" textAlign="center">
                                earnings overview.
                        </Heading>    
                    </Flex>
                    
                    <Flex direction="column">
                        <Heading size="md" color="whiteAlpha.800" textAlign="center">
                                logged miles overview.
                        </Heading>    
                        <Center mt={10} pt={10}backgroundColor="#A8D0E6" borderRadius="0.55em" width={800} style={{boxShadow: "rgba(0, 0, 0, 0.45) 0px 10px 20px -18px"}}>
                            <LoggedMilesChart />
                        </Center>     
                    </Flex>
                           
            </Stack>
        </Center>
       
    )
};

export default LoggedMiles;