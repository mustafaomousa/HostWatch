import { Box, Center, Heading, Link, SimpleGrid, Wrap, WrapItem } from "@chakra-ui/react";
import { isDesktop, isMobile } from "react-device-detect";

import "./index.css";

const HomePageComponent = ({sessionUser}) => {

    if (isDesktop) return (
        <Box>
            <Center flexDir="column" h="500px">
                <Box>
                    <Heading fontSize="65px" color="#24305E">
                        car share management for your business.
                    </Heading>
                </Box>    
                {!sessionUser && (
                <Heading color="#24305E" size="sm">
                    join today for <Link href="/signup" color="blue">free</Link>.
                </Heading>)}
            </Center>
            <Center align="center">
                {isDesktop && (<Wrap align="center" spacing={10}>
                    <WrapItem>
                        <Box backgroundColor="lightgray" transition="ease 0.2s" _hover={{height:"410px", width:"305px"}} height={400} width={300} borderRadius="0.75em" style={{boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}>

                        </Box>    
                    </WrapItem>
                    <WrapItem>
                        <Box backgroundColor="lightgray" transition="ease 0.2s" _hover={{height:"460px", width:"355px"}} height={450} width={350} borderRadius="0.75em" style={{boxShadow:"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
                        
                        </Box>
                    </WrapItem>
                    <WrapItem>
                        <Box backgroundColor="lightgray" transition="ease 0.2s" _hover={{height:"410px", width:"305px"}} height={400} width={300} borderRadius="0.75em" style={{boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}>

                        </Box>    
                    </WrapItem>
                    
                </Wrap>)}
            </Center>
        </Box>
    )

    if (isMobile) return (
        <Box>
            <Center align="center" height="300px">
                <Heading fontSize="25px" p={5} align="center" color="gray.300">
                    car share management for your business.
                </Heading>
                {!sessionUser && (
                    <Heading color="white" size="sm">
                        join today for <Link href="/signup" color="blue.200">free</Link>.
                    </Heading>
                )}
            </Center>
            <Center >
                <SimpleGrid columns={1} spacing="35px">
                    <Box backgroundColor="#F8E9A1" height={300} width={280} borderRadius="0.85em" style={{boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}>

                    </Box>
                    <Box backgroundColor="#F8E9A1" height={300} width={280} borderRadius="0.85em" style={{boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}>

                    </Box>
                    <Box backgroundColor="#F8E9A1" height={300} width={280} borderRadius="0.85em" style={{boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}>

                    </Box> 
                </SimpleGrid>
            </Center>
            <Center pt={20} pb={20}>
                <Heading color="whiteAlpha.100">
                    all rights reserved
                </Heading>
            </Center>
        </Box>
    )
};

export default HomePageComponent;