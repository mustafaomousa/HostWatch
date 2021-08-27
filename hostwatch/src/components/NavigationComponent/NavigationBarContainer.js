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
            p={5}
            minHeight="65px"
            bg={["lightgray"]}
            {...props}
            >
                {children}
            </Flex>
    )
};

export default NavigationBarContainer;