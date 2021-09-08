import { Box, Flex, Heading } from "@chakra-ui/react";

import LoggedMilesChart from "./LoggedMilesChart";

const HostCharts = () => {
    return (
        <Box pt={20}>
            <Flex>
                <Heading color="black">
                    your charts.
                </Heading>                
            </Flex>
            <Flex justify="center" flexWrap="wrap">
                <Flex direction="column" pt={20}>
                    <Heading color="black" size="md" pb={10}>
                        days rented.
                    </Heading>
                    <LoggedMilesChart />
                </Flex>
                <Flex direction="column" pt={20}>
                    <Heading color="black" size="md" pb={10}>
                        earnings made.
                    </Heading>
                    <LoggedMilesChart />
                </Flex>    
            </Flex>
        </Box>
    )
};

export default HostCharts;