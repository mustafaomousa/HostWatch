import { Box, Center, Heading, Image, Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber, StylesProvider } from "@chakra-ui/react";

const TuroStatsComponent = () => {
    return (
        <Box p={20}>
            <Heading align="flex-start" size="md" style={{textDecoration:"underline"}}>
                turo stats.
            </Heading>
            <Center height="250px">
                coming soon
            </Center>
            {/* <StatGroup flex flexDirection="row" justifyContent="center" width="100%" p={10} flexWrap="wrap" >
                <Stat align="center">
                    <StatLabel>trips.</StatLabel>
                    <StatNumber>37</StatNumber>
                    <StatHelpText>
                        <StatArrow type="increase" />
                        5 more than last month.
                    </StatHelpText>
                </Stat>
                <Stat align="center">
                    <StatLabel>earnings to date.</StatLabel>
                    <StatNumber>$8300</StatNumber>
                    <StatHelpText>
                        <StatArrow type="increase" />
                        $2305 more than last month.
                    </StatHelpText>
                </Stat>
                <Stat align="center">
                    <StatLabel>upcoming earnings.</StatLabel>
                    <StatNumber>$2300</StatNumber>
                    <StatHelpText>
                        to the end of the current month.
                    </StatHelpText>
                </Stat>
            </StatGroup> */}
        </Box>
    )
};

export default TuroStatsComponent;