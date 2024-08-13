import { Box, Image } from "@chakra-ui/react";
import pagenotfoundimg from "../assets/Images/PageError.jpg";

function PageNotFound() {
  return (
    <Box 
      display="flex" 
      alignItems="center" 
      justifyContent="center" 
      w="100vw" 
      h="100vh" 
      overflow="hidden" 
      bg="gray.100" // Optional: Adds a background color to ensure no gaps
    >
      <Image 
        src={pagenotfoundimg} 
        alt="Page Not Found" 
        w="100%" 
        h="110%" 
      />
    </Box>
  );
}

export default PageNotFound;
