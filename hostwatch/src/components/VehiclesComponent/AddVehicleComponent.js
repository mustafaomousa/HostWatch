import { Box, Button, Center, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";

const AddVehicleComponent = () => {
    return (
        <Flex direction="column">
            <Center>
                <Heading>
                    add a vehicle to your fleet.
                </Heading>
            </Center>
            <Formik
                initialValues={{ year: 2021 }}
                onSubmit={(values, actions) => {
                    
                }}
            >
                {(props) => (
                    <Form>
                        <Field name="year">
                            {({field, form}) => (
                                <FormControl isInvalid={form.errors.year && form.touched.year}>
                                    <FormLabel htmlFor="year">year</FormLabel>
                                    <Input {...field} type="number" id="year" placeholder="year"/>
                                    <FormErrorMessage>{form.errors.year}</FormErrorMessage>           
                                </FormControl>
                            )}
                        </Field>
                        <Field name="make">
                            {({field, form}) => (
                                <FormControl isInvalid={form.errors.make && form.touched.make}>
                                    <FormLabel htmlFor="make">make</FormLabel>
                                    <Input {...field} id="make" placeholder="make"/>
                                    <FormErrorMessage>{form.errors.make}</FormErrorMessage>           
                                </FormControl>
                            )}
                        </Field>
                        <Field name="model">
                            {({field, form}) => (
                                <FormControl isInvalid={form.errors.model && form.touched.model}>
                                    <FormLabel htmlFor="model">model</FormLabel>
                                    <Input {...field} id="model" placeholder="model"/>
                                    <FormErrorMessage>{form.errors.model}</FormErrorMessage>           
                                </FormControl>
                            )}
                        </Field>
                        <Field name="startingMileage">
                            {({field, form}) => (
                                <FormControl isInvalid={form.errors.startingMileage && form.touched.startingMileage}>
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