import { Box, Button, Heading, FormControl, FormErrorMessage, FormHelperText, FormLabel, Input, Text, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function isInvalidEmail(email) {
    const emailFormat =  /\S+@\S+\.\S+/;
    if (email.match(emailFormat) && email.length > 0) {
      return false;
        } else {
      return true;
    }
  }

const isInvalidPass2 = (pass1, pass2) => {
    if (pass2 !== pass1) {
        return true;
    } else {
        return false;
    }
}

const SignUp = () => {

    const navigate = useNavigate();
    const toast = useToast();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');
    const [submitClickedName, setSubmitClickedName] = useState(false);
    const [submitClickedEmail, setSubmitClickedEmail] = useState(false);
    const [submitClickedUsername, setSubmitClickedUsername] = useState(false);
    const [submitClickedPassword, setSubmitClickedPassword] = useState(false);
    const [submitClickedSecondPassword, setSubmitClickedSecondPassword] = useState(false);

    const isErrorName = name === '' && submitClickedName;
    const isErrorEmail = isInvalidEmail(email) && submitClickedEmail;
    const isErrorUsername = username === '' && submitClickedUsername;
    const isErrorPassword = password === '' && submitClickedPassword;
    const isErrorSecondPassword = 
        (isInvalidPass2(password, secondPassword) && submitClickedSecondPassword)

    const handleNameChange = (event) => {
        setSubmitClickedName(false);
        setName(event.target.value)
    }

    const handleEmailChange = (event) =>{
        setSubmitClickedEmail(false);
        setEmail(event.target.value)
    }

    const handleUsernameChange = (event) => {
        setSubmitClickedUsername(false);
        setUsername(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setSubmitClickedPassword(false);
        setPassword(event.target.value)
    }

    const handleSecondPasswordChange = (event) => {
        setSubmitClickedSecondPassword(false);
        setSecondPassword(event.target.value)
    }

    const onSubmit = async () => {
        setSubmitClickedName(true);
        setSubmitClickedEmail(true);
        setSubmitClickedUsername(true);
        setSubmitClickedPassword(true);
        setSubmitClickedSecondPassword(true);

        if (
            name === '' || 
            isInvalidEmail(email) || 
            username === '' || 
            password === '' ||
            secondPassword === '' || 
            secondPassword !== password) {
            return;
        } else {
            const response = await axios.post('http://localhost:3025/sign-up', { 
                    name,
                    email,
                    username,
                    password
                });
                console.log(response);
                const token = response.data;
                console.log(token);
                localStorage.setItem('token', token);
                }
                setName('');
                setEmail('');
                setUsername('');
                setPassword('');
                setSecondPassword('');
                setSubmitClickedName(false);
                setSubmitClickedEmail(false);
                setSubmitClickedUsername(false);
                setSubmitClickedPassword(false);
                setSubmitClickedSecondPassword(false);
// useNavigate hook 
                navigate("/projects");
                // cha
                toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  })
                }
        // };
    
  return (
    <Box maxW="75%" m="0 auto" mt={4}>
            <Heading>Create an Account</Heading>
            <FormControl isInvalid={isErrorName} isRequired>
                <FormLabel>Name</FormLabel>
                <Input 
                    type='text' 
                    value={name} 
                    onChange={handleNameChange}
                />
                    {!isErrorName ? (null) : (
                    <FormErrorMessage>Name is required.</FormErrorMessage>
                    )}
            </FormControl>
            <FormControl isInvalid={isErrorEmail} isRequired>
                <FormLabel>Email</FormLabel>
                <Input 
                    type='email' 
                    value={email} 
                    onChange={handleEmailChange}
                />
                    {!isErrorEmail ? (null) : (
                    <FormErrorMessage>A valid email address is required.</FormErrorMessage>
                    )}
            </FormControl>
            <FormControl isInvalid={isErrorUsername} isRequired>
                <FormLabel>Username</FormLabel>
                <Input 
                    type='text' 
                    value={username} 
                    onChange={handleUsernameChange}
                />
                    {!isErrorUsername ? (null) : (
                    <FormErrorMessage>A valid username is required.</FormErrorMessage>
                    )}
            </FormControl>
            <FormControl isInvalid={isErrorPassword} isRequired>
                <FormLabel>Password</FormLabel>
                <Input 
                    type='password' 
                    value={password} 
                    onChange={handlePasswordChange}
                />
                    {!isErrorPassword ? (null) : (
                    <FormErrorMessage>A valid password is required.</FormErrorMessage>
                    )}
            </FormControl>
            <FormControl isInvalid={isErrorSecondPassword} isRequired>
                <FormLabel>Enter Password Again</FormLabel>
                <Input 
                    type='password' 
                    value={secondPassword} 
                    onChange={handleSecondPasswordChange}
                />
                    {!isErrorSecondPassword ? (null) : (
                    <FormErrorMessage>Passwords must match.</FormErrorMessage>
                    )}
            </FormControl>
            <Button onClick={onSubmit} w="100%">Submit</Button>
        </Box>
  );
};

export default SignUp;