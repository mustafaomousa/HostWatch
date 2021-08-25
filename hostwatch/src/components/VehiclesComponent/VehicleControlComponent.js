import { Box, Button, Center, Heading, Icon } from "@chakra-ui/react";
import { LockIcon, UnlockIcon } from "@chakra-ui/icons";


const VehicleControlComponent = ({hostVehicles}) => {
    
    return (
        <Box pt={10}>
            <Heading align="center" size="md">
                control your fleet.
            </Heading>
            <Center flex flexDir="column">
                {Object.keys(hostVehicles).map((vehicleId, idx) => (
                    <Box pt={20} align="center">
                            {hostVehicles[vehicleId].year} {hostVehicles[vehicleId].make} {hostVehicles[vehicleId].model}
                            <Center pt={5}>
                                <Button mr={5} isLoading loadingText="unlocking.">
                                    <Icon as={UnlockIcon}  />   
                                </Button>
                                <Button>
                                    <Icon as={LockIcon} />
                                </Button>
                            </Center>
                    </Box>
                ))}
            </Center>
        </Box>
    )
};

export default VehicleControlComponent;