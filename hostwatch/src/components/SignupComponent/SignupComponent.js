import { Button, Center, FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import * as sessionActions from "../../store/session";

const SignupComponent = () => {
    const dispatch = useDispatch();

    const [errors, setErrors] = useState([]);

    const sessionUser = useSelector(state => state.session.user);

    if (sessionUser) return (
        <Redirect to="/" />
    )

    return (
        <Center className="SignupComponentContainer">
            <Formik
                initialValues={{ username: "", email: "", password: "", confirmPassword: "", profilePicture: "" }}
                onSubmit={(values, actions) => {
                    return dispatch(sessionActions.signup({...values}))
                        .catch((res) => {
                            if (res.data && res.data.errors) {
                                setErrors(res.data.errors);
                            }
                        })
                }}
            >
                {(props) => (
                    <Form>
                        <Field name="username">
                            {({field, form}) => (
                                <FormControl isInvalid={form.errors.username && form.touched.username}>
                                    <FormLabel htmlFor="username">username</FormLabel>
                                    <Input {...field} id="username" placeholder="username"/>
                                    <FormErrorMessage>{form.errors.username}</FormErrorMessage>           
                                </FormControl>
                            )}
                        </Field>
                        <Field name="email">
                            {({field, form}) => (
                                <FormControl isInvalid={form.errors.email && form.touched.email}>
                                    <FormLabel htmlFor="email">email</FormLabel>
                                    <Input {...field} id="email" placeholder="email" />
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="password">
                            {({field, form}) => (
                                <FormControl isInvalid={form.errors.password && form.touched.password}>
                                    <FormLabel htmlFor="password">password</FormLabel>
                                    <Input {...field} type="password" id="password" placeholder="password" />
                                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="confirmPassword">
                            {({field, form}) => (
                                <FormControl isInvalid={form.errors.confirmPassword && form.touched.confirmPassword}>
                                    <FormLabel htmlFor="confirmPassword">confirm password</FormLabel>
                                    <Input {...field} type="password" id="confirmPassword" placeholder="confirm password" />
                                    <FormErrorMessage>{form.errors.confirmPassword}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <br />
                        <Field name="profilePicture">
                            {({field, form}) => (
                                <FormControl isInvalid={form.errors.profilePicture && form.touched.profilePicture}>
                                    <FormLabel htmlFor="profilePicture">profile picture (not required)</FormLabel>
                                    <Input {...field} type="file" id="profilePicture" />
                                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
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
        </Center>
    )
}

export default SignupComponent;