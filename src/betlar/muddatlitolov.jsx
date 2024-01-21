import { Button } from "@chakra-ui/button";
import { Box,   Text,Heading , Container } from "@chakra-ui/layout";
import { Link } from "react-router-dom";
import Card from '../card/card'



function Navbar() {
 
    return(
        <Box  >
            <Container maxW={'container.xl'}>
            <Box>
    <Heading mt={'10px'}>Muddatli to'lov </Heading>
   </Box>
   <Box>
    <Box>
        {/* pustoy inavi baglidon vaj */}
    </Box>
    <Box>
        <Card/>
    </Box>
   </Box>
            </Container>
 

        </Box>
    )
}
export default Navbar