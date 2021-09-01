import { Box, Button, Center, Flex, FormControl, FormErrorMessage, FormLabel, GridItem, Heading, Input, SimpleGrid, useToast } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

import VehiclesUtils from "./VehiclesUtils";

const AddVehicleComponent = ({onClose}) => {
    const { addAVehicle } = VehiclesUtils();
    const toast = useToast();

    return (
        <Flex direction="column">
            <Formik
                initialValues={{ year: 2021 }}
                onSubmit={(values, actions) => addAVehicle(values,actions).then(onClose).then(()=>toast({
                    title: "vehicle added to your fleet.",
                    description: "vehicle has been added to the fleet chart.",
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                }))}
            >
                {(props) => (
                    <Form>
                        <Field name="year">
                            {({field, form}) => (
                                <FormControl isInvalid={form.errors.year && form.touched.year} isRequired>
                                    <FormLabel htmlFor="year">year</FormLabel>
                                    <Input {...field} type="number" id="year" placeholder="year"/>
                                    <FormErrorMessage>{form.errors.year}</FormErrorMessage>           
                                </FormControl>
                            )}
                        </Field>
                        <Field name="make">
                            {({field, form}) => (
                                <FormControl isInvalid={form.errors.make && form.touched.make} isRequired>
                                    <FormLabel htmlFor="make">make</FormLabel>
                                    <Input {...field} id="make" placeholder="make"/>
                                    <FormErrorMessage>{form.errors.make}</FormErrorMessage>           
                                </FormControl>
                            )}
                        </Field>
                        <Field name="model">
                            {({field, form}) => (
                                <FormControl isInvalid={form.errors.model && form.touched.model} isRequired>
                                    <FormLabel htmlFor="model">model</FormLabel>
                                    <Input {...field} id="model" placeholder="model"/>
                                    <FormErrorMessage>{form.errors.model}</FormErrorMessage>           
                                </FormControl>
                            )}
                        </Field>
                        <Field name="startingMileage">
                            {({field, form}) => (
                                <FormControl isInvalid={form.errors.startingMileage && form.touched.startingMileage} isRequired>
                                    <FormLabel htmlFor="startingMileage">starting mileage</FormLabel>
                                    <Input {...field} type="number" id="startingMileage" placeholder="starting mileage"/>
                                    <FormErrorMessage>{form.errors.startingMileage}</FormErrorMessage>           
                                </FormControl>
                            )}
                        </Field>
                        <Field name="picturesUrl">
                            {({field, form}) => (
                                <FormControl isInvalid={form.errors.picturesUrl && form.touched.picturesUrl}>
                                    <FormLabel htmlFor="picturesUrl">pictures</FormLabel>
                                    <Input {...field} type="file" id="picturesUrl"/>
                                    <FormErrorMessage>{form.errors.picturesUrl}</FormErrorMessage>           
                                </FormControl>
                            )}
                        </Field>
                        <Center>
                            <Button 
                                type="submit"
                                isLoading={props.isSubmitting}
                            >
                                submit
                            </Button>    
                        </Center>
                    </Form>
                )}
            </Formik>   
        </Flex>
    )
};

export default AddVehicleComponent;