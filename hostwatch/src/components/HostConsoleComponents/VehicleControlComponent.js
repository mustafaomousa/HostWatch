import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Center, Flex, Heading, Icon } from "@chakra-ui/react";
import { LockIcon, UnlockIcon, Search2Icon } from "@chakra-ui/icons";
import React, { useState } from "react";


const VehicleControlComponent = ({hostVehicles}) => {
    const [lockDialogOpen, setLockDialogOpen] = useState(false);
    const onLockDialogClose = () => setLockDialogOpen(false);
    const cancelRef = React.useRef();


    return (
        <Box align="center">
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
            <br/>
            <Flex height="100%" flexWrap="wrap">
                {Object.keys(hostVehicles).map((vehicleId, idx) => (
                    <Box className="VehicleControlTile">
                            <Heading size="sm" p={2}>
                                {hostVehicles[vehicleId].make} {hostVehicles[vehicleId].model}    
                            </Heading>
                            <Flex justify="space-evenly">
                                <Button  isLoading={idx === 1 ? true : false}>
                                    <Icon as={UnlockIcon}  />   
                                </Button>
                                <Button onClick={()=>setLockDialogOpen(true)}>
                                    <Icon as={LockIcon} />
                                </Button>
                                <Button >
                                    <Icon as={Search2Icon} />
                                </Button>
                            </Flex>
                    </Box>
                ))}
            </Flex>
        </Box>
    )
};

export default VehicleControlComponent;