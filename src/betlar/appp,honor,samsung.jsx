import { Box, Button, Heading, Image, Text,Container } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'
import { PiContactlessPayment } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import { BasketContext1 } from '../Basket/BasketContext1'
import Card from '../card/card'

function Section() {
  const params =useParams()
  const [product,setProduct]=useState([])
  const {addcart} = useContext(BasketContext1)
  const navigite = useNavigate('')


  const [state, setState] = useState([]);
  useEffect(()=>{
   axios.get(`https://dummyjson.com/products/${params.id}`)
   .then(result=>setProduct(result.data))
  }, [params.id])
  console.log(params)


  const  addToBasket = (product)=>{
    addcart(product)
   }


return (
  <Container maxW={'container.xl'}>
<Box gap={'20px'} padding={'10px'}>
<Box gap={'20px'} display={'flex'} paddingTop={'20px'} >
  <Heading>{product.brand} </Heading>
  <Heading>{product.brand} brendni maxsulotlari </Heading>
</Box>

<Box>
  

    <Box>
    <Heading mt={'120px'}>Bestsellerlar</Heading>

    <Card/>
    </Box>
   
</Box>




</Box>
  </Container>


)
}
export default Section

