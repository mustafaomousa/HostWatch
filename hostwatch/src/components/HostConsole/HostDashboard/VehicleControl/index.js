import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, 
    AlertDialogHeader, AlertDialogOverlay, Box, 
    Button, Flex, Heading, Icon, SimpleGrid } from "@chakra-ui/react";
import { LockIcon, UnlockIcon, Search2Icon } from "@chakra-ui/icons";
import React from "react";
import { VehicleControlUtils } from "./VehicleControlUtils";


const VehicleControl = ({hostVehicles, vehicleId}) => {
    const { lockDialogOpen, onLockDialogClose, cancelRef, setLockDialogOpen } = VehicleControlUtils();

    return (
        <Box width="100%">
                    <AlertDialog
        isOpen={lockDialogOpen}
        leastDestructiveRef={cancelRef}
        onClose={onLockDialogClose}
        isCentered
    >
        <AlertDialogOverlay>
            <AlertDialogContent>
                <AlertDialogHeader fontSize="lg" fontWeight="bold">
                    lock vehicle.
                </AlertDialogHeader>
                <AlertDialogBody>
                    Are you sure you want to lock your vehicle?
                </AlertDialogBody>
                <AlertDialogFooter>
                    <Button onClick={onLockDialogClose}>
                        Cancel
                    </Button>
                    <Button colorScheme="red" ml={3}>
                        Lock
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialogOverlay>
    </AlertDialog>
            <Flex flexDir="column" align="center" justify="space-between">
                <SimpleGrid rows={2} spacing={20}>
                    <Heading size="md" align="center">
                        {hostVehicles[vehicleId].make} {hostVehicles[vehicleId].model}    
                    </Heading>
                    <SimpleGrid columns={3} spacing={2}>
                        <Button>
                            <Icon as={UnlockIcon}  /> <Heading pl={2} size="sm"> Unlock </Heading>
                        </Button>
                        <Button onClick={()=>setLockDialogOpen(true)}>
                            <Icon as={LockIcon} /> <Heading pl={2} size="sm"> Lock </Heading>
                        </Button>
                        <Button >
                            <Icon as={Search2Icon} /> <Heading pl={2} size="sm"> Locate</Heading>
                        </Button>    
                    </SimpleGrid>
                </SimpleGrid>
            </Flex>
        </Box>
    )
};

export default VehicleControl;