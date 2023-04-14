import { useState } from "react";
import { SimpleGrid, Button, Box, Flex, useMediaQuery, ButtonGroup } from "@chakra-ui/react";
import Card from "./Card";
import { ArrowLeftIcon, ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import styles from "../styles/Card.module.css"

const Carousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
 


  const cards = [
    {
      title: "",
      imageSrc: "image1.svg",
      description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      category: "Grilled  Tomatoes at Home",
    },
    {
      title: "",
      imageSrc: "image2.svg",
      description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      category: "Snacks for Travel",
    },
    {
      title: "",
      imageSrc: "image3.svg",
      description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      category: "Post-workout Recipes",
    },
    {
      title: "",
      imageSrc: "image4.svg",
      description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      category: "How To Grill Corn",
    },
    {
      title: "",
      imageSrc: "image5.svg",
      description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      category: "Crunchwrap Supreme",
    },
    {
      title: "",
      imageSrc: "image6.svg",
      description: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard...",
      category: "Broccoli Cheese Soup",
    },
  ];

  const endIndex = startIndex + (isLargerThan768 ? 3 : 2);

  return (
    <div className={styles["Cards"]}>
      <h1>Latest Articles</h1>
      {/* <SimpleGrid columns={[1, 3]} spacing="4" mt="4">
        {cards.slice(startIndex, endIndex).map((card) => (
          <Card
            key={card.title}
            title={card.title}
            imageSrc={card.imageSrc}
            description={card.description}
            category={card.category}
          />
        ))}
      </SimpleGrid> */}
          <Box p="10" pr={isDesktop ? "40" : "4"} pl={isDesktop ? "40" : "4"}>

      <Flex flexWrap="wrap" justifyContent="space-around">
      {cards.slice(startIndex, endIndex).map((card) => (
          <Card
            // widthBox={isMobile? "30%" : "80%"}
            key={card.title}
            title={card.title}
            imageSrc={card.imageSrc}
            description={card.description}
            category={card.category}
          />
        ))}
      </Flex>
      </Box>
      <Box 
      display="flex" justifyContent="center" alignItems="center" textAlign="center"
      alignSelf="center" margin="0 auto"
      >
      <Button
      leftIcon={<ChevronLeftIcon />}
        disabled={startIndex === 0 && startIndex>=0}
        onClick={() => setStartIndex(startIndex - (isLargerThan768 ? 3 : 2))}
        mt="4"
        p="6"
        borderRadius="10"
        fontSize="1.5rem"


      >
      </Button>
      <Button
      rightIcon={<ChevronRightIcon />}
        disabled={endIndex >= cards.length}
        onClick={() => setStartIndex(startIndex + (isLargerThan768 ? 3 : 2))}
        mt="4"
        ml="2"
        fontSize="1.5rem"
        p="6"
        fontWeight="600"
        borderRadius="10"

      >
      </Button>
      </Box>
     
    </div>
  );
};

export default Carousel;
