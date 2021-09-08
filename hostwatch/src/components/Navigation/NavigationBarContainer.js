import { Flex } from "@chakra-ui/react"

const NavigationBarContainer = ({children, ...props}) => {
    return (
        <Flex
            zIndex="100"
            as="nav"
            align="center"
            justify="space-between"
            wrap="wrap"
            w="100%"
            pl={10}
            pr={10}
            minHeight="65px"
            {...props}
            backgroundColor="#24305E"
            >
                {children}
            </Flex>
    )
};

export default NavigationBarContainer;