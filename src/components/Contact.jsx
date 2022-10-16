import React from "react";
import {
  Flex,
  Button,
  Box,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Textarea,
  Input,
  useToast,
} from "@chakra-ui/react";
import { Formik } from "formik";
import validations from "../Validation/validations";
import axios from "axios";

const Contact = () => {
  const toast = useToast();

  const handleSubmit = async (values) => {
    await axios
      .post("http://localhost:4050/", values)
      .then((data) => {
        console.log(data);
      })
      .then(() => {
        values = {
          name: "",
          email: "",
          subject: "",
          message: "",
        };
      });

    await toast({
      title: "Your Message has been send",
      description: "we will be right back you soon",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };
  return (
    <Box className="g-div">
      <div>
        <Heading textAlign="center">Contact Us</Heading>
        <Flex justifyContent="center" alignItems="center">
          <Box className="rightSide">
            <Formik
              initialValues={{
                name: "",
                email: "",
                subject: "",
                message: "",
              }}
              validationSchema={validations}
              onSubmit={handleSubmit}
            >
              {({
                handleSubmit,
                errors,
                touched,
                handleChange,
                handleBlur,
                values,
              }) => (
                <>
                  <form onSubmit={handleSubmit}>
                    <FormControl>
                      <FormLabel>Name</FormLabel>
                      <Input
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        isInvalid={touched.name && errors.name}
                      />
                      {touched.name && errors.name && (
                        <Text color="red.500">{errors.name}</Text>
                      )}
                    </FormControl>
                    <FormControl mt="4">
                      <FormLabel>E-Mail</FormLabel>
                      <Input
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        isInvalid={touched.email && errors.email}
                      />
                      {touched.email && errors.email && (
                        <Text color="red.500">{errors.email}</Text>
                      )}
                    </FormControl>

                    <FormControl mt="4">
                      <FormLabel>Subject</FormLabel>
                      <Input
                        name="subject"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.subject}
                        isInvalid={touched.subject && errors.subject}
                      />
                      {touched.email && errors.email && (
                        <Text color="red.500">{errors.email}</Text>
                      )}
                    </FormControl>
                    <FormControl mt="4">
                      <FormLabel>Message</FormLabel>
                      <Textarea
                        name="message"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.message}
                        isInvalid={touched.message && errors.email}
                      />
                      {touched.email && errors.email && (
                        <Text color="red.500">{errors.email}</Text>
                      )}
                    </FormControl>

                    <Button
                      colorScheme="green"
                      mt={4}
                      width="full"
                      type="submit"
                    >
                      Submit
                    </Button>
                  </form>
                </>
              )}
            </Formik>
          </Box>
        </Flex>
      </div>
    </Box>
  );
};

export default Contact;
