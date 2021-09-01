import { Box, Button, Center, Flex, FormControl, FormErrorMessage, FormLabel, GridItem, Heading, Input, SimpleGrid } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

import VehiclesUtils from "./VehiclesUtils";

const AddVehicleComponent = () => {
    const { addAVehicle } = VehiclesUtils();

    return (
        <Flex direction="column" p={20}>
            <Heading size="md" pb={10} style={{textDecoration:"underline"}}>
                add a vehicle to your fleet.
            </Heading>
            <Formik
                initialValues={{ year: 2021 }}
                onSubmit={(values, actions) => addAVehicle(values,actions)}
            >
                {(props) => (
                    <Form>
                        <SimpleGrid columns={2} spacing={10}>
                            <GridItem>
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
                            </GridItem>
                            <GridItem>
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
                            </GridItem>
                        </SimpleGrid>
                        <br />
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