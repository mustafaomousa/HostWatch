import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  useToast,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { updateHostVehicle } from "../../../store/vehicle";

const EditVehicleComponent = ({ vehicle, onClose }) => {
  const dispatch = useDispatch();
  const toast = useToast();
  const initialValues = {
    year: vehicle.year,
    make: vehicle.make,
    model: vehicle.model,
    startingMileage: vehicle.startingMileage,
    picturesUrl: vehicle.picturesUrl,
  };
  return (
    <Box flex flexDir="column">
      <Formik
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          await dispatch(
            updateHostVehicle(
              vehicle.id,
              values.year,
              values.make,
              values.model,
              values.startingMileage,
              values.picturesUrl
            )
          );
          onClose();

          return toast({
            title: "vehicle updated.",
            description: "vehicle has been updated in the fleet chart.",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }}
      >
        {(props) => (
          <Form>
            <Field name="year">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.year && form.touched.year}>
                  <FormLabel htmlFor="year">year</FormLabel>
                  <Input {...field} id="year" placeholder="year" />
                  <FormErrorMessage>{form.errors.year}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="make">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.make && form.touched.make}>
                  <FormLabel htmlFor="make">make</FormLabel>
                  <Input {...field} id="make" placeholder="make" />
                  <FormErrorMessage>{form.errors.make}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="model">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.model && form.touched.model}
                >
                  <FormLabel htmlFor="model">model</FormLabel>
                  <Input {...field} id="name" placeholder="name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="picturesUrl">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.picturesUrl && form.touched.picturesUrl
                  }
                >
                  <FormLabel htmlFor="picturesUrl">photos</FormLabel>
                  <Input {...field} id="picturesUrl" placeholder="" disabled />
                  <FormErrorMessage>{form.errors.picturesUrl}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="startingMileage">
              {({ field, form }) => (
                <FormControl
                  isInvalid={
                    form.errors.startingMileage && form.touched.startingMileage
                  }
                >
                  <FormLabel htmlFor="startingMileage">
                    starting mileage
                  </FormLabel>
                  <Input
                    {...field}
                    id="startingMileage"
                    placeholder="starting mileage"
                  />
                  <FormErrorMessage>
                    {form.errors.startingMileage}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
              disabled={props.values === initialValues}
            >
              Update
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default EditVehicleComponent;
