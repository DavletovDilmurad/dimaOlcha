import {
  Box,
  Button,
  Container,
  Text,
  color,
  useColorMode,
} from "@chakra-ui/react";
import Pruducts from "../card/card";
import SimpleSlider from "../caruesel/caruesel";
import Footer from "../foooter/foorer";
import Simg from "../app/simg";
import Caruesel from "../app/caruesel";
import Cardred from "../app/cardred";
import Pruducts1 from "../app/cardapp";
import Text1 from "../app/tetx";

function App() {
  return (
    <Box>
      <Container maxW={"container.xl"}>
    
      
        <SimpleSlider />
        <Caruesel />
        <Simg />

        <Pruducts />
        <Cardred />
        <Pruducts1 />
        <Text1 />
        
      
      </Container>
    </Box>
  );
}

export default App;
