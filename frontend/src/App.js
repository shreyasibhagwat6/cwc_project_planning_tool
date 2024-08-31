import './App.css';
import axios from 'axios';
import { Box, Button, ChakraProvider, Input } from '@chakra-ui/react'
import { useState } from 'react';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';

function App() {

  return (
    <ChakraProvider>
      <Header />
      <Outlet />
    </ChakraProvider>  
  );
}

export default App;
