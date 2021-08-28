import { Box, Button, Center, Heading, Icon } from "@chakra-ui/react";
import { LockIcon, UnlockIcon } from "@chakra-ui/icons";


const VehicleControlComponent = ({hostVehicles}) => {
    
    return (
        <Box p={20}>
            <Heading align="start" size="md" style={{textDecoration:"underline"}}>
                control your fleet.
            </Heading>
            <Center flex flexDir="row" justifyContent="flex-start" p={10} height="100%" width="100%" flexWrap="wrap">
                {Object.keys(hostVehicles).map((vehicleId, idx) => (
                    <Box align="center" border="1px solid gray" borderRadius="0.25em" m={2} p={2} minW="230px">
                            {hostVehicles[vehicleId].make} {hostVehicles[vehicleId].model}
                            <Box pt={5}>
                                <Button mr={5} isLoading={idx == 1 ? true : false} loadingText="unlocking.">
                                    <Icon as={UnlockIcon}  />   
                                </Button>
                                <Button>
                                    <Icon as={LockIcon} />
                                </Button>
                            </Box>
                    </Box>
                ))}
            </Center>
        </Box>
    )
};

export default VehicleControlComponent;