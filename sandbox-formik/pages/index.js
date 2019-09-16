import React from 'react';
import {
    Box,
    Flex,
    Text,
    Input,
    Stack,
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/core';
import { withFormik } from 'formik';
import * as Yup from 'yup';

const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
        email: Yup.string()
            .email('Invalid email address')
            .required('Email is required!'),
        password: Yup.string()
            .min(8, 'Too short!')
            .matches(/[A-Z]/, 'Must have uppercase')
            .matches(/[a-z]/, 'Must have lowercase')
            .required('Password is required'),
    }),

    mapPropsToValues: ({ user }) => ({
        ...user,
    }),

    mapPropsToStatus: ({ status }) => ({
        ...status,
    }),

    handleSubmit: (payload, { setSubmitting, setStatus }) => {
        setTimeout(() => {
            setSubmitting(false);
            setStatus({ submitted: true });
        }, 3000);
    },
});

const Form = ({
    values,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset,
    isSubmitting,
    status,
}) => (
    <Box width={360} my={8} borderWidth="1px" rounded="lg" p={8}>
        <Text mb={8} fontSize="xl" fontWeight={800}>
            New User Registration
        </Text>

        {!status.submitted ? (
            <form onSubmit={handleSubmit}>
                <Stack spacing={8}>
                    <FormControl
                        isInvalid={errors.email}
                        isDisabled={isSubmitting}
                    >
                        <Flex justifyContent="space-between">
                            <FormLabel htmlFor="email">Email</FormLabel>
                            <FormErrorMessage m={0} mb={2}>
                                {errors.email}
                            </FormErrorMessage>
                        </Flex>

                        <Input
                            placeholder="Email"
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={errors.email}
                        />
                    </FormControl>

                    <FormControl
                        isInvalid={errors.password}
                        isDisabled={isSubmitting}
                    >
                        <Flex justifyContent="space-between">
                            <FormLabel htmlFor="password">Password</FormLabel>
                            <FormErrorMessage m={0} mb={2}>
                                {errors.password}
                            </FormErrorMessage>
                        </Flex>

                        <Input
                            placeholder="Password"
                            id="password"
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={errors.password}
                        />
                        <FormHelperText>
                            Must have at least one uppercase character, one
                            lowercase character and a minimum length of 8
                        </FormHelperText>
                    </FormControl>

                    <Stack isInline spacing={8} align="center">
                        <Button
                            type="submit"
                            variantColor="green"
                            isLoading={isSubmitting}
                            loadingText="Submitting"
                        >
                            Register
                        </Button>

                        <Button
                            type="reset"
                            variant="ghost"
                            onClick={handleReset}
                        >
                            Clear
                        </Button>
                    </Stack>
                </Stack>
            </form>
        ) : (
            <Stack spacing={4}>
                <Text color="green.600" fontSize="xl" fontWeight={800}>
                    Success!
                </Text>
                <Text>
                    We've sent an confirmation email to{' '}
                    <Text as="span" color="green.600" fontWeight={800}>
                        {values.email}
                    </Text>
                    , click the link inside to confirm your registration
                </Text>
            </Stack>
        )}
    </Box>
);

const RegisterForm = formikEnhancer(Form);

const Register = () => {
    return (
        <Flex align="center" justify="center">
            <RegisterForm
                user={{ name: '', email: '' }}
                status={{ submitted: false }}
            />
        </Flex>
    );
};

export default Register;
