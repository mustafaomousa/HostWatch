import { Box, Center, Flex, GridItem, Heading, Link, SimpleGrid, Wrap, WrapItem } from "@chakra-ui/react";
import { isDesktop } from "react-device-detect";

import "./index.css";

const HomePageComponent = ({sessionUser}) => {

    return (
        <Box>
            <Center flexDir="column" h="500px">
                <Box>
                    <Heading fontSize="65px" color="gray.300">
                        car share management for your business.
                    </Heading>
                </Box>    
                {!sessionUser && (
                <Heading size="sm">
                    join today for <Link href="/signup" color="blue">free</Link>.
                </Heading>)}
            </Center>
            <Center align="center">
                {isDesktop && (<Wrap align="center" spacing={10}>
                    <WrapItem>
                        <Box backgroundColor="#F8E9A1" height={400} width={300} borderRadius="0.75em" style={{boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}>

                        </Box>    
                    </WrapItem>
                    <WrapItem>
                        <Box backgroundColor="#F8E9A1" height={450} width={350} borderRadius="0.75em" style={{boxShadow:"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
                        
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Box backgroundColor="#F8E9A1" height={400} width={300} borderRadius="0.75em" style={{boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}>

                        </Box>    
                    </WrapItem>
                    
                </Wrap>)}
            </Center>
        </Box>
    )
};

export default HomePageComponent;