import { Box, Button, Center, FormControl, FormErrorMessage, FormLabel, GridItem, Heading, Input, Select, SimpleGrid, useToast } from "@chakra-ui/react"
import { Field, Form, Formik } from "formik";
import TripsUtils from "./TripsUtils";

const AddTrip = ({onClose}) => {
    const { addATrip } = TripsUtils();
    const toast = useToast();

    return (
        <Formik
            initialValues={{earnings: 0}}
            onSubmit={(values, actions) => addATrip(values, actions).then(onClose).then(()=>toast({
                title: "trip created.",
                description: "trip has been added to the trip chart.",
                status: "success",
                duration: 9000,
                isClosable: true,
            }))}
        >
            {(props) => (
                <Form>
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
                            <FormControl isInvalid={form.errors.vehicle && form.touched.vehicle}       >
                                <FormLabel htmlFor="vehicle">vehicle</FormLabel>
                                <Select {...field}>

                                </Select>
                                <FormErrorMessage>{form.errors.vehicle}</FormErrorMessage>           
                            </FormControl>
                        )}
                    </Field>
                    <Field name="receiptUrl">
                        {({field, form}) => (
                            <FormControl isInvalid={form.errors.receiptUrl && form.touched.receiptUrl}      >
                                <FormLabel htmlFor="receiptUrl">receipts</FormLabel>
                                <Input {...field} type="file" id="receiptUrl" />
                                <FormErrorMessage>{form.errors.receiptUrl}</FormErrorMessage>           
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
    );
};

export default AddTrip;