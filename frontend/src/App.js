import './App.css';
import axios from 'axios';
import { Box, Button, ChakraProvider, Input } from '@chakra-ui/react'
import { useState } from 'react';

function App() {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }

  const handleClick = async () => {
    const response = await axios.post('http://localhost:3025/name', {
      name,
    })
    console.log(response.data)
  }

  return (
  <ChakraProvider>
    <Box m={10} display="flex" gap={4}>
    <Input onChange={handleChange} placeholder='Name' />
    <Button onClick={handleClick} colorScheme='purple'>Add Name</Button>
    </Box>
  </ChakraProvider>  
  );
}

export default App;
