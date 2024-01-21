import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Simg = () => {
  return (
    <Box
    
      gap={"20px"}
      ml={{base:"0px",xl:'-80px'}}
      display={"grid"}
      gridTemplateColumns={{
        base: "repeat(1,1fr)",
        sm: "repeat(2,1fr)",
        xl: "repeat(3,1fr)",
      }}
    >
      <Link to={"/ofisjixozlari"}>
        <Box
          display={"flex"}
          padding={"20px"}
          borderRadius={"10px"}
          h={"150px"}
          w={"100%"}
          backgroundImage={
            "https://avatanplus.com/files/effects/original/569feb45b56d315260af086f.jpg"
          }
        >
          <Box w={"210px"}>
            <Heading >Ofis Jixozlari</Heading>
          </Box>
          <Box>
            <Image
              w={"150px"}
              h={"100px"}
              src="https://mediaserver.goepson.com/ImConvServlet/imconv/47bce8a5c05f0c2cec66cffdf51647f32534a3cf/1200Wx1200H?use=banner&hybrisId=B2C&assetDescr=17Lio_MDL_Black_05_2"
            />
          </Box>
        </Box>
      </Link>
      <Link to={"/tizimuskunlar"}>
        <Box
          display={"flex"}
          padding={"20px"}
          borderRadius={"10px"}
          h={"150px"}
          w={"100%"}
          backgroundImage={
            "https://avatanplus.com/files/effects/original/569feb45b56d315260af086f.jpg"
          }
        >
          <Box w={"210px"}>
            <Heading>Tizim uskunlar</Heading>
          </Box>
          <Box>
            <Image
              w={"150px"}
              h={"100px"}
              src="https://bitconnect.ru/upload/media/content/940n-png.png"
            />
          </Box>
        </Box>
      </Link>

      <Link to={"/proektor"}>
        <Box
          display={"flex"}
          padding={"20px"}
          borderRadius={"10px"}
          h={"150px"}
          w={"100%"}
          backgroundImage={
            "https://avatanplus.com/files/effects/original/569feb45b56d315260af086f.jpg"
          }
        >
          <Box w={"210px"}>
            <Heading mt={"20px"}>Proektor</Heading>
          </Box>
          <Box>
            <Image
              w={"150px"}
              h={"100px"}
              src="https://frankfurt.apollo.olxcdn.com/v1/files/ws3u0792e61h-UZ/image;s=999x1000"
            />
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default Simg;
