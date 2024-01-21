import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraBaseProvider, ChakraProvider, Container } from '@chakra-ui/react';
import Routers from './betmabetotish';
import { BrowserRouter } from 'react-router-dom';
import BasketProvider from './Basket/BasketContext1';
import Footer from './foooter/foorer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ChakraProvider>
    <BasketProvider>
    <Routers/>
    </BasketProvider>
  
  </ChakraProvider>
</BrowserRouter>
   
  
);


