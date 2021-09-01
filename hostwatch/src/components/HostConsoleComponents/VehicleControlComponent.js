import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Box, Button, Center, Icon } from "@chakra-ui/react";
import { LockIcon, UnlockIcon, Search2Icon } from "@chakra-ui/icons";
import React, { useState } from "react";


const VehicleControlComponent = ({hostVehicles}) => {
    const [lockDialogOpen, setLockDialogOpen] = useState(false);
    const onLockDialogClose = () => setLockDialogOpen(false);
    const cancelRef = React.useRef();


    return (
        <Box>
            <AlertDialog
                isOpen={lockDialogOpen}
                leastDestructiveRef={cancelRef}
                onClose={onLockDialogClose}
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
            <Center height="100%" width="100%" flexWrap="wrap">
                {Object.keys(hostVehicles).map((vehicleId, idx) => (
                    <Box className="VehicleControlTile">
                            {hostVehicles[vehicleId].make} {hostVehicles[vehicleId].model}
                            <Box pt={5}>
                                <Button mr={5} isLoading={idx === 1 ? true : false}>
                                    <Icon as={UnlockIcon}  />   
                                </Button>
                                <Button onClick={()=>setLockDialogOpen(true)}>
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