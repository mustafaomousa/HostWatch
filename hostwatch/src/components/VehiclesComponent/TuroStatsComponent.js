import { Box, Heading, Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";

const TuroStatsComponent = () => {
    return (
        <Box>
            <Heading align="center" size="md" pt={10}>
                turo stats.
            </Heading>
            <StatGroup flex flexDirection="column" alignContent="center" width="100%" p={10}>
                <Stat p={0}>
                    <StatLabel>trips.</StatLabel>
                    <StatNumber>37</StatNumber>
                    <StatHelpText>
                        <StatArrow type="increase" />
                        5 more than last month.
                    </StatHelpText>
                </Stat>
                <Stat pt={10}>
                    <StatLabel>earnings to date.</StatLabel>
                    <StatNumber>$8300</StatNumber>
                    <StatHelpText>
                        <StatArrow type="increase" />
                        $2305 more than last month.
                    </StatHelpText>
                </Stat>
                <Stat pt={10}>
                    <StatLabel>upcoming earnings.</StatLabel>
                    <StatNumber>$2300</StatNumber>
                    <StatHelpText>
                        to the end of the current month.
                    </StatHelpText>
                </Stat>
            </StatGroup>
        </Box>
    )
};

export default TuroStatsComponent;