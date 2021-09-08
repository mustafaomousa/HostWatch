import { Box, Center, Heading, Link, SimpleGrid, Wrap, WrapItem } from "@chakra-ui/react";
import { Alert, AlertIcon } from "@chakra-ui/alert";
import { isDesktop, isMobile } from "react-device-detect";

import "./index.css";

const Home = ({sessionUser}) => {

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
                        <Center flexDir="column" transition="ease 0.2s" _hover={{height:"410px", width:"305px"}} height={400} width={300} borderRadius="0.75em" style={{boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}>
                            <Heading size="lg"> manage your fleet </Heading>
                            <Heading pt={5} size="xs"> lock, unlock, and track up to 6 (eligible) vehicles in your fleet </Heading>
                        </Center>    
                    </WrapItem>
                    <WrapItem>
                        <Center flexDir="column" transition="ease 0.2s" _hover={{height:"460px", width:"355px"}} height={450} width={350} borderRadius="0.75em" style={{boxShadow:"rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}>
                            <Heading size="lg"> track your earnings </Heading>
                            <Heading pt={5} size="xs"> log vehicle trips and watch your earnings grow </Heading>
                        </Center>
                    </WrapItem>
                    <WrapItem>
                        <Center flexDir="column" transition="ease 0.2s" _hover={{height:"410px", width:"305px"}} height={400} width={300} borderRadius="0.75em" style={{boxShadow:"rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px"}}>
                            <Heading size="lg"> track your miles </Heading>
                            <Heading pt={5} size="xs"> monitor your fleets mileage and estimate tax deductions. </Heading>
                        </Center>    
                    </WrapItem>
                    
                </Wrap>)}
            </Center>
        </Box>
    )

    if (isMobile) return (
            <Alert h="100%" align="center" backgroundColor="#24305E" color="white" pb={20}>
                <AlertIcon/>
            HostWatch is not yet suitable on mobile devices
            </Alert>
    )
};

export default Home;