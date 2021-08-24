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
            p={5}
            bg={["lightgray"]}
            {...props}
            >
                {children}
            </Flex>
    )
};

export default NavigationBarContainer;