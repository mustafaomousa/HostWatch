import { Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, SimpleGrid } from "@chakra-ui/react";

const EditVehicleComponent = ({isOpen, onClose, vehicleToEdit}) => {
    return (
        <Drawer initialFocusRef={vehicleToEdit} placement="bottom" isOpen={isOpen} onClose={onClose} size="lg" closeOnEsc>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Edit vehicle</DrawerHeader>
                <DrawerBody>
                    <SimpleGrid
                        columns={3}
                        >
                            <Box h="300px">
                            </Box>
                            <Box h="300px">

                            </Box>
                            <Box h="300px">

                            </Box>
                        </SimpleGrid>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
};

export default EditVehicleComponent;