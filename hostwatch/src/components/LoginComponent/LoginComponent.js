import { Field, Form, Formik } from "formik";
import {  FormControl, FormLabel, FormErrorMessage, Button, Input,  List, ListItem, Box, Center } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import * as sessionActions from "../../store/session";
import { validateUsername, validatePassword } from "./loginValidations";
import { useState } from "react";

const LoginComponent = () => {
    const dispatch = useDispatch();
    
    const [errors, setErrors] = useState([]);

    const sessionUser = useSelector(state => state.session.user);

    if (sessionUser) return (
        <Redirect to="/" />
    )

    return (
        <Center className="LoginComponentContainer">
            <Formik
                initialValues={{ username: "", password: "" }}
                onSubmit={(values, actions) => {
                    return dispatch(sessionActions.login({credential: values.username, password: values.password}))
                        .catch((res) => {
                            if (res.data && res.data.errors) {
                                setErrors(res.data.errors)
                            };
                        })
                }}
            >
                {(props) => (
                    <Form>
                        <Field name="username" validate={validateUsername}>
                            {({field, form}) => (
                                <FormControl isInvalid={form.errors.username && form.touched.username}>
                                    <FormLabel htmlFor="username">username</FormLabel>
                                    <Input {...field} id="username" placeholder="username"/>
                                    <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                                </FormControl>
                            )}
                        </Field>
                        <Field name="password" validate={validatePassword}>
                            {({field, form}) => (
                                <FormControl isInvalid={form.errors.password && form.touched.password}>
                                    <FormLabel htmlFor="password">password</FormLabel>
                                    <Input {...field}  type="password" id="password" placeholder="password"/>      
                                    <FormErrorMessage>{form.errors.password}</FormErrorMessage>
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
                        <br />
                        <Center>
                            <List>
                                {errors && errors.map((err, idx) => <ListItem>{err}</ListItem>)}
                            </List>    
                        </Center>
                    </Form>
                )}
            </Formik>
        </Center>
    );
};

export default LoginComponent