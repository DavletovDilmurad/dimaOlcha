import {
    Wrap,
    WrapItem,
    Box,
  
    Heading,
    Grid,
    GridItem,
    Text,
    Button,
    Input,
  } from "@chakra-ui/react";
  import { Image } from "@chakra-ui/react";
  import axios from "axios";
  import React, { useContext, useEffect, useState } from "react";
  import { MdOutlineShoppingCart } from "react-icons/md";
  import { IoMdHeartEmpty } from "react-icons/io";
  import img from '../img1/finance.png'
import { useNavigate } from "react-router-dom";
import { BasketContext1 } from "../Basket/BasketContext1";
function Cardred() {
    const [state, setState] = useState([]);
    const navigite = useNavigate('')
    const {addcart} = useContext(BasketContext1)
    useEffect(() => {
      axios
        .get("https://dummyjson.com/products")
        .then((result) => setState(result.data.products)); 
    }, []);

   


 
   const  addToBasket = (product)=>{
    addcart(product)
   }
    return(
      <Box ml={{base:'-10px'}} >

      <Box  mt={'20px'}>
        <Heading>Muddatli to`lov</Heading>
      </Box>
               <Box  mt={'20px'}  >
                              <Image borderRadius={'10px'}  w={'100%'} h={{base:'150px',xl:"350px"}} src="https://olcha.uz/image/original/sliders/oz/Q3ZVB2ZLRgMPZ4gQh4fMX5zoMi57DLEUbuXovjU6VciSnz6Qf8TCkdLTDVgo.jpg"/>
               </Box>


      <Box   h={{base:'auto',xl:'360px'}} mt={'50px'} mb={'50px'}   borderRadius={'10px'}  w={{base:'100%',xl:'1360px'}} backgroundImage={'https://olcha.uz/image/original/sliders/oz/Mrwm9x0o5zaDUNj9Gnz6hJKT97fqmoxeSO8EOXydCfF7EqO9y9UHP0mD8m08.png'}>
                  <Box gap={'10px'} display={'grid'} gridTemplateColumns={{ base: 'repeat(1,1fr)',sm:'repeat(4,1fr)',md:'repeat(5,1fr)', lg: 'repeat(6,1fr)', xl: 'repeat(7,1fr)' }}>
               {
                    state.slice(4,10).map((product)=>{
                        return(
                              <Box   padding={'10px'} ml={{base:'70px',xl:'15px'}} borderRadius={'10px'} w={'200px'} mt={'10px'} h={'auto'} bg={'white'}>

                                       <Box onClick={() => navigite(`/about/${product.id}`)} >
                                        <Image ml={'25px'} h={'140px'} w={'80%'}  src={product.images[0]}/>
                                       </Box>
                                       <Box onClick={() => navigite(`/about/${product.id}`)} >
                                        <Text>{product.title}</Text>
                                       </Box  >
                                       <Box onClick={() => navigite(`/about/${product.id}`)} >
                                        <Text fontWeight={'700'} fontSize={'20px'} color={'red'}>{product.price}.000 so`m</Text>
                                       </Box>
                                       <Box gap={'4px'} mt={'20px'} display={'flex'}>
                                       <Button fontSize={'44px'} onClick={()=>addToBasket(product)} color={'black'} border={'1px solid black'} bg={'white'}><MdOutlineShoppingCart /></Button>
           <Button color={'red'} border={'1px solid red'} colorScheme="white" w={{base:'250px',xl:'300px'}}>Muddatli to'lov</Button>
                                       </Box>
                              </Box>
                        )
                    })
                }
               </Box>
             

      </Box>
      </Box>
        
    )
}
export default Cardred