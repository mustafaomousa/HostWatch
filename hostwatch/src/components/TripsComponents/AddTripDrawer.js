import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Stack, useDisclosure } from "@chakra-ui/react"
import AddTrip from "./AddTrip";
import TripsUtils from "./TripsUtils";

const AddTripDrawer = ({ isOpen, onOpen, onClose }) => {

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
                        add a trip.
                    </DrawerHeader>
                    <DrawerBody>
                        <Stack spacing="24px">
                            <AddTrip onClose={onClose}/>
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </div>
    )
};

export default AddTripDrawer;

