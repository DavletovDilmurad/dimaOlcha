import { Box,   Text ,Heading,Grid  } from "@chakra-ui/layout";
import { Button, Image } from "@chakra-ui/react";

import React from "react";
import { GiAbstract076 } from "react-icons/gi";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";






 
 
      function Footer() {
      
        return (
           <Box w={'100%'} bg={"gray.100"}>
          <Box pt={'70px'} pl={{base:'10px',xl:'300px'}}>
            
            <Box w={{base:'255px',xl:'455px'}}>
                <Text fontWeight={700} fontSize={{base:'15px',xl:'25px'}}>Bizning mobil ilovamiz AppGallery, App store va Google play-da</Text>
     
            </Box>

<Box display={'flex'}>
<Box gap={'10px'} w={'380px'} display={'flex'} flexWrap={'wrap'}>



<Button _hover={{bg:'gray'}} gap={'10px'} w={'140px'} bg={"white"} color={'black'} > <Image  w={'40px'} src="https://w7.pngwing.com/pngs/689/128/png-transparent-apple-logo-computer-icons-macintosh-apple-stickers-logo-computer-wallpaper-silhouette.png"/><Text>App Store</Text>  </Button>
<Button _hover={{bg:'gray'}} gap={'10px'} w={'140px'} bg={"white"} color={'black'} > <Image  w={'20px'} src="https://brawl-stars-pro.ru/wp-content/uploads/2021/11/8460b714edc697c8731a0c9af7a877bb.png"/><Text>Play market</Text>  </Button>
<Button mt={{base:'1px',xl:'-150px'}} _hover={{bg:'gray'}} gap={'1px'} w={'140px'} bg={"white"} color={'black'} > <Image  w={'30px'} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Huawei_AppGallery.svg/1200px-Huawei_AppGallery.svg.png"/><Text>AppGallery</Text>  </Button>

           </Box>
<Box>
 <Image  display={{base:'none',xl:'flex'}} ml={'400px'} borderRadius={'10px'} mt={'-60px'} h={'400px'} w={'700px'} src="https://olcha.uz/_nuxt/footer-img.745872f8.webp"/>
</Box>
</Box>

          </Box>



<Text mt={'10px'} h={'20px'}> <hr/> </Text>






          <Box paddingLeft={{base:'10px',xl:'200px'}} flexWrap={'wrap'} gap={{base:'50px',xl:'150px'}} display={'flex'} >
          <Box>
      <Text   color={'red'} fontWeight={'999'} fontSize={'40px'}><Link  to={'/'} >Olcha</Link></Text> 
      <Text >Qo'llab-quvvatlash raqami</Text>
      <Heading transition={'0.3s'} _hover={{color:'red'}} color={'black'} fontSize={'20px'}>+998 (71) 202 202 1</Heading>

      <Button display={'block'} _hover={{bg:'transition'}}  ml={'-10px'} leftIcon={<FaLocationDot />}>Qozitarnov, Toshkent</Button>
      <Button display={'block'} _hover={{bg:'transition'}}  ml={'-10px'}  leftIcon={<MdEmail />}>info@olcha.uz</Button>
        </Box>


        <Box>


      <Text  color={'red'} fontWeight={'700'} fontSize={'20px'}><Link  to={'/'} >Ma`lumot</Link></Text> 
          <Text transition={'0.5s'} _hover={{color:'gray'}} cursor={'pointer'} mt={'10px'} color={'black'}>Biz haqimizda</Text>
          <Text transition={'0.5s'} _hover={{color:'gray'}} cursor={'pointer'} mt={'10px'} color={'black'}>Bo'sh ish o'rinlari</Text>
          <Text  w={'255px'} transition={'0.5s'} _hover={{color:'gray'}} cursor={'pointer'} mt={'10px'} color={'black'}>To‘lovni qaytarish va tovarlarni almashtirish</Text>
          <Text transition={'0.5s'} _hover={{color:'gray'}} cursor={'pointer'} mt={'10px'} color={'black'}>Muddatli to’lov shartlari</Text>
          <Text transition={'0.5s'} _hover={{color:'gray'}} cursor={'pointer'} mt={'10px'} color={'black'}>Yordam</Text>
          <Text transition={'0.5s'} _hover={{color:'gray'}} cursor={'pointer'} mt={'10px'} color={'black'}>Yetkazib berish</Text>
        </Box>
<Box mt={'45px'}>
<Text transition={'0.5s'} _hover={{color:'gray'}} cursor={'pointer'} mt={'10px'} color={'black'}>Eco-friendly</Text>
<Text transition={'0.5s'} _hover={{color:'gray'}} cursor={'pointer'} mt={'10px'} color={'black'}>Bonus va aksiyalar</Text>
<Text transition={'0.5s'} _hover={{color:'gray'}} cursor={'pointer'} mt={'10px'} color={'black'}>To’lov va yetkazib berish</Text>
<Text transition={'0.5s'}  cursor={'pointer'} mt={'10px'} bg={'red'} w={'120px'} color={'white'}>olcha da soting</Text>
<Text transition={'0.5s'} _hover={{color:'gray'}} cursor={'pointer'} mt={'10px'} color={'black'}>Servis markazlari</Text>

</Box>



<Box >
<Box flexWrap={{base:'wrap',xl:'nowrap'}} mt={'20px'} w={{base:'350px',xl:'400px'}} display={'flex'} gap={'20px'} >
<Button _hover={{bg:'gray'}} h={'50px'} bg={'white'} borderRadius={'10px'} w={'150px'}><Image h={'52px'} w={'100px'} src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/01308a166919587.642c907164808.jpg"/></Button>
<Button _hover={{bg:'gray'}} h={'50px'} bg={'white'} borderRadius={'10px'} w={'150px'}><Image h={'52px'} w={'150px'} src="https://cbu.uz/upload/iblock/065/0450uiskbcw7382kvly4kn5fcgguy1yx/agrobank.jpg"/></Button>
<Button _hover={{bg:'gray'}} h={'50px'} bg={'white'} borderRadius={'10px'} w={'150px'}><Image h={'32px'} w={'100px'} src="https://avatars.mds.yandex.net/i?id=ef515726c39672e9ebe11c2011b4ce3869ac585a-10150478-images-thumbs&n=13"/></Button>


</Box >
<Box flexWrap={{base:'wrap',xl:'nowrap'}} mt={'20px'} w={{base:'350px',xl:'400px'}} display={'flex'} gap={'20px'} >
<Button _hover={{bg:'gray'}} h={'50px'} bg={'white'} borderRadius={'10px'} w={'150px'}><Image h={'52px'} w={'100px'} src="https://help.payme.uz/img/payme-logo.svg"/></Button>
<Button _hover={{bg:'gray'}} h={'50px'} bg={'white'} borderRadius={'10px'} w={'150px'}><Image h={'52px'} w={'100px'} src="https://storage.kun.uz/source/4/BtHYRhp9IrZ8QL-3eTWwf5PI9D2q9ktv.jpg"/></Button>
<Button _hover={{bg:'gray'}} h={'50px'} bg={'white'} borderRadius={'10px'} w={'150px'}><Image h={'52px'} w={'100px'} src="https://www.spot.uz/media/img/2019/07/oGOmGZ15635475834497_b.jpg"/></Button>


</Box>
</Box>




          </Box>

          <Box>
          </Box>






  
           </Box>
          
            
        )
      }
     
    

export default Footer