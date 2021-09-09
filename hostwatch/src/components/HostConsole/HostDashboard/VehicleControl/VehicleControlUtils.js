import { Button } from "@chakra-ui/button";
import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay } from "@chakra-ui/modal";
import React, { useState } from "react";

export const VehicleControlUtils = () => {
    const [lockDialogOpen, setLockDialogOpen] = useState(false);
    const onLockDialogClose = () => setLockDialogOpen(false);
    const cancelRef = React.useRef();



    return { lockDialogOpen, onLockDialogClose, cancelRef, setLockDialogOpen };
};

export const LockAlertDialog = ({lockDialogOpen, cancelRef, onLockDialogClose}) => {
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
    };