import { Box, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Caruesel() {
  return (
    <Box ml={{base:'10px'}} gap={"5px"} paddingBottom={"30px"} flexWrap={"wrap"} display={"flex"}>
      <Box mt={"10px"} w={"150px"} textAlign={"center"}>
        <Image
          ml={"25px"}
          w={"110px"}
          src="https://mini-io-api.texnomart.uz/catalog/product/1043/104309/181373/1c2396db-77fd-44fa-b4e8-9bfa117406a1.jpg"
        />
        <Link to={"/TeefizorFotovideoaudio"}>
          <Text
            fontWeight={"600"}
            cursor={"pointer"}
            transition={"0.3s"}
            _hover={{ color: "red" }}
          >
            Telefizor,foto-video va audio
          </Text>
        </Link>
      </Box>

      <Box mt={"10px"} w={"150px"} textAlign={"center"}>
        <Image
          ml={"25px"}
          w={"110px"}
          src="https://png.pngtree.com/thumb_back/fw800/background/20230521/pngtree-black-laptop-is-image_2637090.jpg"
        />
        <Link to={"/Noutbukprinterkompyuter"}>
          <Text
            fontWeight={"600"}
            cursor={"pointer"}
            transition={"0.3s"}
            _hover={{ color: "red" }}
          >
            Noutbuk,printer,kompyuter
          </Text>
        </Link>
      </Box>

      <Box w={"150px"} textAlign={"center"}>
        <Image
          h={"80px"}
          ml={"35px"}
          w={"80px"}
          src="https://mobilochka.ae/image/cache/b046520936e12c461a86114ff51bdba4.jpg"
        />
        <Link
          to={"/SmartfonTelefonaksessuallar"}
          fontWeight={"600"}
          cursor={"pointer"}
          transition={"0.3s"}
          _hover={{ color: "red" }}
        >
          <Text
            fontWeight={"600"}
            cursor={"pointer"}
            transition={"0.3s"}
            _hover={{ color: "red" }}
          >
            Smartfon,Telefon,aksessuallar
          </Text>
        </Link>
      </Box>

      <Box w={"150px"} textAlign={"center"}>
        <Image
          ml={"25px"}
          w={"100px"}
          src="https://www.lg.com/uz_ru/images/washing-machines/md07539822/gallery/medium01.jpg"
        />
        <Link to={"/MaishiyTexnika"}>
          <Text
            fontWeight={"600"}
            cursor={"pointer"}
            transition={"0.3s"}
            _hover={{ color: "red" }}
          >
            Maishiy Texnika
          </Text>
        </Link>
      </Box>

      <Box w={"150px"} textAlign={"center"}>
        <Image
          h={"70px"}
          ml={"25px"}
          w={"100px"}
          src="https://www.creditasia.uz/upload/iblock/c94/al2cyifdgqb5uzfwm3mw5nrzdungkzqn/plita-gazovaya-hansa-fcgx53193.jpg"
        />
        <Link to={"/Barchasioshxonauchun"}>
          <Text
            fontWeight={"600"}
            cursor={"pointer"}
            transition={"0.3s"}
            _hover={{ color: "red" }}
          >
            {" "}
            Barchasi oshxona uchun{" "}
          </Text>
        </Link>
      </Box>

      <Box w={"150px"} textAlign={"center"}>
        <Image
          ml={"25px"}
          w={"100px"}
          src="https://img.freepik.com/free-vector/barbells-dumbbells-fitness-realistic-composition-with-isolated-image-of-heavy-barbell-vector-illustration_1284-66982.jpg?size=626&ext=jpg&ga=GA1.1.1826414947.1700179200&semt=ais"
        />
        <Link to={"/Sportanjomlari"}>
          <Text
            fontWeight={"600"}
            cursor={"pointer"}
            transition={"0.3s"}
            _hover={{ color: "red" }}
          >
            Sport anjomlari
          </Text>
        </Link>
      </Box>

      <Box w={"150px"} textAlign={"center"}>
        <Image
          ml={"25px"}
          w={"100px"}
          src="https://thumbs.dreamstime.com/b/%D0%BA%D1%80%D0%B0%D1%81%D0%BE%D1%87%D0%BD%D0%B0%D1%8F-%D0%B3%D1%83%D0%B1%D0%BD%D0%B0%D1%8F-%D0%BF%D0%BE%D0%BC%D0%B0%D0%B4%D0%B0-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D0%BA%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%86%D0%B8%D1%8F-%D0%BC%D0%B0%D0%BA%D0%B8%D1%8F%D0%B6-%D1%81%D0%B0%D0%BB%D0%BE%D0%BD-%D0%BA%D1%80%D1%83%D0%BF%D0%BD%D1%8B%D0%BC-169018314.jpg"
        />
        <Link to={"/GozallikvaSalomatlik"}>
          <Text
            fontWeight={"600"}
            cursor={"pointer"}
            transition={"0.3s"}
            _hover={{ color: "red" }}
          >
            Gozallik va Salomatlik
          </Text>
        </Link>
      </Box>

      <Box w={"150px"} textAlign={"center"}>
        <Image
          ml={"25px"}
          w={"100px"}
          src="https://img.freepik.com/premium-photo/children-s-toys-on-a-white-background_168508-619.jpg"
        />
        <Link to={"/Bolalaruchun"}>
          <Text
            fontWeight={"600"}
            cursor={"pointer"}
            transition={"0.3s"}
            _hover={{ color: "red" }}
          >
            Bolalar uchun
          </Text>
        </Link>
      </Box>
    </Box>
  );
}
export default Caruesel;
