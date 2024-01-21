import { Box,   Text ,   } from "@chakra-ui/layout";
import { GiHamburgerMenu } from "react-icons/gi";
import {  Button, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure,ModalFooter, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, DrawerFooter } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";




 
 
      function DrawerExample() {
        
const [showText, setShowText] = useState(false);
const [dText, dhowText] = useState(false);

const { isOpen, onOpen, onClose } = useDisclosure()
const btnRef = React.useRef()
      
        return (
           <Box>
  <Button _hover={{color:'red', border : '2px solid red'}} bg={'white'} fontSize={'25px'} borderRadius={'7px'} h={'50px'} w={{base:'100px',xl:"180px"}} gap={'10px'}  border={'2px solid black'} leftIcon={ <GiHamburgerMenu /> }>
           
          
           <Text ref={btnRef} onClick={onOpen}  display={{base:'none',xl:'flex'}}>Katalog</Text>
            
  </Button>



 

  <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader></DrawerHeader>

          <DrawerBody>
            
               <Box>
                 


                 {/* 1 chi */}
                 <Box 
                 display={'flex'}
                 gap={'300px'}
                   onMouseEnter={() => setShowText(true)}
               onMouseLeave={() => setShowText(false)}
                          >
                     <Text transition={'0.2s'} _hover={{color:'red'}}>Televizor, foto-video va audio</Text>
                    
                       {showText &&  <Box gap={'250px'} display={'flex'}>
                        <Box>
                        <Box><Text  fontWeight={'900'}  transition={'0.2s'} _hover={{color:'red'}} cursor={'pointer'}>Televizorlar</Text></Box>
                        <Box>
                        <Text>Samsung</Text>
                        <Text>LG</Text>
                        <Text>Artel</Text>
                        <Text>Shivaki</Text>
                        <Text>Sony</Text>
                        <Text>Avalon</Text>
                        </Box>
                        </Box>


                        <Box>
                        <Box><Text  fontWeight={'900'}  transition={'0.2s'} _hover={{color:'red'}} cursor={'pointer'}>Videotexnika</Text></Box>
                        <Box>
                        <Text>Uy kinoteatr</Text>
                        <Text>DVD PLEAR</Text>
                        <Text>Video uskunalar uchun aksessuarlar</Text>
                        <Text>Xavfsizlik kameralari</Text>
                        </Box>
                        </Box>
                       
                        </Box>}

                </Box>

                                   {/* tamom */}


                                 <Box
                                  display={'flex'}
                                  gap={'300px'}
                                    onMouseEnter={() => dhowText(true)}
                                onMouseLeave={() => dhowText(false)} >
                                   <Text transition={'0.2s'} _hover={{color:'red'}}>Noutbuk, printer, kompyuterlar</Text>
                    
                    {dText &&  <Box gap={'250px'} display={'flex'}>
                     <Box>
                     <Box><Text  fontWeight={'900'}  transition={'0.2s'} _hover={{color:'red'}} cursor={'pointer'}>Noutbuklar</Text></Box>
                     <Box>
                     <Text>HP</Text>
                     <Text>SAMSUNG</Text>
                     <Text>LENOVA</Text>
                     <Text>ACER</Text>
                     <Text>DELL</Text>
                     <Text>MSI</Text>
                     <Text>HUAWEI</Text>
                     <Text>HONOR</Text>
                     <Text>ASUS</Text>
                     </Box>
                     </Box>


                     <Box>
                     <Box><Text  fontWeight={'900'}  transition={'0.2s'} _hover={{color:'red'}} cursor={'pointer'}>Kompyuter Qurilmalari</Text></Box>
                     <Box>
                     <Text>Uy kinoteatr</Text>
                     <Text>DVD PLEAR</Text>
                     <Text>Video uskunalar uchun aksessuarlar</Text>
                     <Text>Xavfsizlik kameralari</Text>
                     </Box>
                     </Box>
                    
                     </Box>}
                                  </Box>  

               </Box>



          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer> 
  



           </Box>
          
            
        )
      }
     
    

export default DrawerExample