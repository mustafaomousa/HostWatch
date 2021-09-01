import { Box, Button, Center, FormControl, FormErrorMessage, FormLabel, GridItem, Heading, Input, Select, SimpleGrid } from "@chakra-ui/react"
import { Field, Form, Formik } from "formik";

const AddTrip = () => {
    return (
        <Box p={20}>
            <Heading align="start" size="md" style={{textDecoration:"underline"}} pb={10}>
                add a trip.
            </Heading>
            <Formik
                onSubmit={(values, actions) => {
                    return console.log("hi")
                }}
            >
                {(props) => (
                    <Form>
                        <SimpleGrid columns={2} spacing={10}>
                            <GridItem>
                                <Field name="startDate">
                                    {({field, form}) => (
                                        <FormControl isInvalid={form.errors.startDate && form.touched.startDate} isRequired>
                                            <FormLabel htmlFor="startDate">start date</FormLabel>
                                            <Input {...field} type="date" id="startDate" placeholder="start date"/>
                                            <FormErrorMessage>{form.errors.startDate}</FormErrorMessage>           
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="endDate">
                                    {({field, form}) => (
                                        <FormControl isInvalid={form.errors.endDate && form.touched.endDate} isRequired>
                                            <FormLabel htmlFor="startDate">end date</FormLabel>
                                            <Input {...field} type="date" id="endDate" placeholder="end date"/>
                                            <FormErrorMessage>{form.errors.endDate}</FormErrorMessage>           
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="earnings">
                                    {({field, form}) => (
                                        <FormControl isInvalid={form.errors.earnings && form.touched.earnings} isRequired>
                                            <FormLabel htmlFor="earnings">earnings</FormLabel>
                                            <Input {...field} type="number" id="earnings" placeholder="earnings"/>
                                            <FormErrorMessage>{form.errors.earnings}</FormErrorMessage>           
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="reinbursements">
                                    {({field, form}) => (
                                        <FormControl isInvalid={form.errors.reinbursements && form.touched.reinbursements} isRequired>
                                            <FormLabel htmlFor="reinbursements">reinbursements</FormLabel>
                                            <Input {...field} type="number" id="reinbursements" placeholder="reinbursements"/>
                                            <FormErrorMessage>{form.errors.reinbursements}</FormErrorMessage>           
                                        </FormControl>
                                    )}
                                </Field>
                            </GridItem>
                            <GridItem>
                                <Field name="milesDriven">
                                    {({field, form}) => (
                                        <FormControl isInvalid={form.errors.milesDriven && form.touched.milesDriven} isRequired>
                                            <FormLabel htmlFor="milesDriven">miles driven</FormLabel>
                                            <Input {...field} type="number" id="milesDriven" placeholder="miles driven"/>
                                            <FormErrorMessage>{form.errors.milesDriven}</FormErrorMessage>           
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="vehicle">
                                    {({field, form}) => (
                                        <FormControl isInvalid={form.errors.vehicle && form.touched.vehicle} isRequired>
                                            <FormLabel htmlFor="vehicle">vehicle</FormLabel>
                                            <Select {...field}>

                                            </Select>
                                            <FormErrorMessage>{form.errors.vehicle}</FormErrorMessage>           
                                        </FormControl>
                                    )}
                                </Field>
                                <Field name="receiptUrl">
                                    {({field, form}) => (
                                        <FormControl isInvalid={form.errors.receiptUrl && form.touched.receiptUrl} isRequired>
                                            <FormLabel htmlFor="receiptUrl">receipts</FormLabel>
                                            <Input {...field} type="file" id="receiptUrl" />
                                            <FormErrorMessage>{form.errors.receiptUrl}</FormErrorMessage>           
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
        </Box>
    );
};

export default AddTrip;