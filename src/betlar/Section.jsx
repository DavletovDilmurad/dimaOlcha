import { Box, Button, Heading, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useParams } from 'react-router-dom'
import { PiContactlessPayment } from "react-icons/pi";
import { FaTruck } from "react-icons/fa";
import { CiShoppingBasket } from "react-icons/ci";
import { BasketContext1 } from '../Basket/BasketContext1'

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
  const { isOpen, onOpen, onClose } = useDisclosure()



return (
<Box ml={{base:'0',xl:'100px'}} gap={'20px'} padding={'10px'}>
<Box paddingTop={'20px'} >
  <Heading>{product.title}</Heading>
</Box>
<Box paddingY={'20px'}>
<Text gap={'10px'} display={'flex'}> ⭐ ⭐ ⭐ ⭐ ⭐ <Text cursor={'pointer'} transition={'0.5s'} _hover={{color:'red'}}>2 sharhlar</Text></Text>
</Box>
<Box  flexWrap={'wrap'} display={'flex'} >
  
  <Box borderRadius={{base:"1px",xl:'10px'}} h={'500px'} w={{base:'100%',xl:'600px'}} bg={'gray.100'}>
            <Image mt={'35px'}  h={'400px'} position={'relative'} left={{base:'-1px',xl:'50px'}}  w={{base:'100%',xl:'500px'}} objectFit={'cover'}  src={product.thumbnail}/>
            
  </Box>
  <Box mt={'20px'} ml={'30px'}>
  <Box display={'inline-block'}>
    <Text display={'flex'} gap={'5px'} color={'black'}><Text color={'gray'}>Rangi:    </Text> Shimmering silver</Text>
  </Box>



  <Box>
    {/* rangini ozgartirish joyini ertang zatish kerak */}
  </Box>


  <Box mt={'20px'}>
<Text fontSize={{base:'10px',xl:'15px'}} gap={'20px'} display={'flex'}><Text color={'gray'}>Vazni</Text>---------------------- 166гр</Text>
<Text fontSize={{base:'10px',xl:'15px'}} gap={'20px'} display={'flex'}><Text color={'gray'}>Rangi</Text>---------------------- Shimmering silver</Text>

  </Box>
  <Box mt={'20px'} cursor={'pointer'} transition={'0.3s'}  _hover={{color:'gray'}} color={'blue'}> Barcha xususiyatlarini ko'rish</Box>
<Box mt={'20px'}>
  <Text cursor={'pointer'}onClick={() => navigite(`/muddatlitolov/${product.id}`)}  float={'right'}  transition={'0.5s'} _hover={{ color:'gray'}} gap={'20px'} color={'blue'} display={'flex'}><Text fontWeight={'700'} color={'black'}>{product.brand}</Text> {product.brand} brendining barcha tovarlari</Text>
</Box>
  </Box>
 
<Box>


  <Box ml={{base:'10px',xl:"300px"}} textAlign={'start'}  h={'500px'} borderRadius={'7px'} w={{base:'100%',xl:'350px'}} border={'2px solid gray'}>
    <Box mt={'20px'} ml={'20px'}>
    <Heading fontSize={'20px'}>{product.price}.00 so'm</Heading>
    </Box>
    <Box mt={'20px'} ml={'20px'}>

      <Text gap={'30px'} display={'flex'}><Text color={'gray'}>Yetkazib berish to'g'risida ma'lumot:</Text> <Text cursor={'pointer'} mt={'5px'}><PiContactlessPayment /></Text> </Text>
    </Box>
<Box>
  <Text display={'flex'} gap={'20px'}> <Text ml={'20px'} mt={'4px'}><FaTruck /> </Text>  Стандартная доставка</Text>
</Box>

<Box ml={'15px'} w={'250px'}> 
<Text >Доставка от 4 часов до 3 дней исходя от адреса доставки</Text>
</Box>
<br />
<Box>
<Button onClick={()=>addToBasket(product)} ml={'15px'} w={'300px'} gap={'20px'} color={'white'} colorScheme='whatsapp'> <CiShoppingBasket /> Savatchaga qo'shish </Button>
</Box>
<Box>
            <Button onClick={onOpen} mt={'10px'} border={'2px solid black'} ml={'15px'} w={'300px'} borderRadius={'10px'} color={'black'} colorScheme='white'> Bir Kliqda Sotib Olish</Button>
</Box>

<Box ml={'15px'} mt={'10px'}>
  <Heading fontSize={'15px'}>STP-Group</Heading>
</Box>

  </Box>





  <Box padding={'10px'} mt={'10px'} ml={{base:'10px',xl:"300px"}} textAlign={'start'}  h={'200px'} borderRadius={'7px'} w={{base:'100%',xl:'350px'}} border={'2px solid gray'}> 
   <Box>
     <Text color={'gray'}>Bo`lib tolash</Text>
   </Box>
   <Box>
    <Heading mt={'5px'} color={'red'} fontSize={'22px'}>500.000so`m /10y</Heading>
   </Box>
   <Box mt={'10px'} borderRadius={'5px'} w={'100px'} border={'2px solid gray'}>
    <Heading color={'red'}>Olcha</Heading>
   </Box>
   <Box mt={'10px'}>
    <Button onClick={onOpen}  ml={'15px'} _hover={{bg:'red'}} bg={'red'} color={'white'} w={'300px'}>Bo'lib to'lash</Button>
   </Box>

  </Box>


</Box>




 


</Box>


<Box ml={'10px'} mt={'10px'}  flexWrap={'wrap'}  justifyContent={'space-between'} display={'flex'} padding={'30px'} borderRadius={'10px'} h={'auto'} w={{base:'100%',xl:'1000px'}} border={'2px solid gray'}>
  <Box>

    <Box>
    <Text fontSize={'20px'}>Narxlar 1 tovar uchun</Text>
    </Box>

    <Box mt={'10px'}>
  <Heading fontSize={'15px'}>STP-Group</Heading>
    </Box>

  </Box>


  <Box w={'300px'} mt={'50px'}> 
    <Text>Manzilga qarab 4 soatdan 3 kungacha yetkazib beriladi</Text>
  </Box>



  <Box mt={'100px'}>
    <Box >
      <Heading mt={'5px'} color={'red'} fontSize={'22px'}>{product.price}.000so`m</Heading>
    </Box>
    <Box>
      <Button mt={'20px'} w={'150px'} onClick={()=>addToBasket(product)} colorScheme='whatsapp'>Savatchaga qo'shish</Button>
    </Box>
  </Box>

</Box>



{/* modalki */}



{/* modal1 */}

<Box w={'500px'}>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Bir Kliqda Sotib Olish</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box >

              <Box gap={'20px'} display={'flex'}> 

              <Box>
                  <Image w={'130px'} src={product.thumbnail} />
              </Box>


                <Box>
                  <Text>{product.title}</Text>
                  <Heading mt={'30px'} fontSize={'20px'}>{product.price}.000 сум</Heading>
                </Box>
              </Box>



              <Box mt={'40px'}>
                <Box>
                <Text color={'gray'}>Ism va familiya</Text>
              <Input w={'400px'} border={'2px solid gray'} placeholder='Ism va familiya'/>
                </Box>

                <Box mt={'20px'}>
                <Text color={'gray'}>Kontakt raqami</Text>
                <Box display={'flex'}>
                <Button position={'relative'} left={'2px'} borderLeft={'2px solid black'} bg={'white'} borderRight={'none'} borderY={'2px solid black'} color={'black'}>+998</Button>  <Input w={'400px'} border={'2px solid gray'} type='number' placeholder='Kontakt raqami'/>
                </Box>
           
                </Box>
             
             </Box>



            </Box>
          </ModalBody>
          <ModalFooter>
            
            <Button colorScheme='red'>Rasmiylashtirish</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
</Box>

{/* modal2 */}



</Box>

)
}
export default Section

