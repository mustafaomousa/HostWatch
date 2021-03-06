import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack } from "@chakra-ui/react"

import AddVehicleComponent from "./AddVehicleComponent";

const AddVehicleDrawer = ({ isOpen, onOpen, onClose }) => {

    return (
        <div>
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        add a vehicle.
                    </DrawerHeader>
                    <DrawerBody pt={20}>
                        <Stack spacing="24px">
                            <AddVehicleComponent onClose={onClose}/>
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
};

export default AddVehicleDrawer;

