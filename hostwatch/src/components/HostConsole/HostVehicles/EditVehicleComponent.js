import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";

const EditVehicleComponent = ({ vehicle }) => {
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
        onSubmit={(values, actions) => {
          console.log(values);
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
