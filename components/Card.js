import { Box, Image, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import "../styles/Card.module.css"
import {useMediaQuery } from "@chakra-ui/react";

const Card = ({ title, imageSrc, description, category ,widthBox}) => {

  const [isMobile]= useMediaQuery("(min-width: 376px)");
  return (
    <Box className="box"
      borderWidth="4px"
      borderColor="black"
      background="white"
      overflow="hidden"
      borderRadius="10px"
      boxShadow="md"
      maxW="sm"
      width={(isMobile? "30%" : "100%")}
      paddingTop="1.5rem"
    >
      <Image src={imageSrc} alt={title} p="5" 
      objectFit="cover" objectPosition="center" h="50%" display="flex" justifyContent="center" alignItems="center" textAlign="center"
      alignSelf="center" margin="0 auto" />
      <Box p="8">
        <Box display="flex" alignItems="baseline">
          <Text
            fontSize="md"
            fontWeight="bold"
            mr="2"
            textAlign="left"
            fontFamily="'Poppins', sans-serif"
            color="#0E2368"
            paddingLeft="1rem"
          >
            {category}
          </Text>
          <Text fontSize="sm" fontWeight="bold" color="blue.500">
            {title}
          </Text>
        </Box>
        <Text
          mt="1"
          //   fontWeight="semibold"
          //   as="h4"
          lineHeight="tight"
          textAlign="left"
          color="#444957"
          fontFamily="'Open Sans', sans-serif"
          padding="0 1rem"
        >
          {description}
        </Text>
        <Button mt="7"
        mr="500"
        p="8"
       textAlign="center"
      
          
          px={4}
        fontSize={'sm'}
        borderRadius="16"
        marginLeft="1rem"
        bg={'blue.400'}
        fontFamily="'Open Sans', sans-serif"
        color={'black'}>
          Read More
        </Button>
      </Box>
    </Box>
  );
};

export default Card;
