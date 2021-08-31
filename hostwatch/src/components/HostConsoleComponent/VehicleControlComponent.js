import { Box, Button, Center, Heading, Icon } from "@chakra-ui/react";
import { LockIcon, UnlockIcon, Search2Icon } from "@chakra-ui/icons";


const VehicleControlComponent = ({hostVehicles}) => {

    return (
        <Box pl={20}>
            <Center flex flexDir="row" justifyContent="flex-start" p={10} height="100%" width="100%" flexWrap="wrap">
                {Object.keys(hostVehicles).map((vehicleId, idx) => (
                    <Box className="VehicleControlTile">
                            {hostVehicles[vehicleId].make} {hostVehicles[vehicleId].model}
                            <Box pt={5}>
                                <Button mr={5} isLoading={idx == 1 ? true : false}>
                                    <Icon as={UnlockIcon}  />   
                                </Button>
                                <Button>
                                    <Icon as={LockIcon} />
                                </Button>
                                <Button ml={5}>
                                    <Icon as={Search2Icon} />
                                </Button>
                            </Box>
                    </Box>
                ))}
            </Center>
        </Box>
    )
};

export default VehicleControlComponent;