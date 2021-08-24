import { Flex } from "@chakra-ui/react"

const NavigationBarContainer = ({children, ...props}) => {
    return (
        <Flex
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            mb={8}
            pl={8}
            pr={8}
            minHeight="75px"
            bg={["lightgray"]}
            {...props}
            >
                {children}
            </Flex>
    )
};

export default NavigationBarContainer;