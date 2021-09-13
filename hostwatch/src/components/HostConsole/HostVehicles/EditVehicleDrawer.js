import { Button } from "@chakra-ui/button";
import { Flex, Heading, Stack } from "@chakra-ui/layout";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from "@chakra-ui/modal";
import React from "react";
import { useDispatch } from "react-redux";

import { deleteHostVehicle } from "../../../store/vehicle";
import EditVehicleComponent from "./EditVehicleComponent";

const EditVehicleDrawer = ({ isOpen, onClose, vehicle }) => {
  const dispatch = useDispatch();

  const deleteVehicle = () => {
    onClose();
    return dispatch(deleteHostVehicle(vehicle.id));
  };

  return (
    <div>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>edit vehicle</DrawerHeader>
          <DrawerBody align="center" pt={20}>
            <Stack spacing="24px">
              <Heading>
                {vehicle.make} {vehicle.model}
              </Heading>
            </Stack>
            <Flex justifyContent="center" w="100%" pt={20}>
              <EditVehicleComponent vehicle={vehicle} onClose={onClose} />
              {/* <Button mr={5} disabled>
                update
              </Button>
              <Button onClick={deleteVehicle} colorScheme="red">
                delete
              </Button> */}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default EditVehicleDrawer;
