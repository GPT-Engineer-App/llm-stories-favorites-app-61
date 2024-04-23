import React, { useState, useEffect } from "react";
import { Box, Heading, Text, VStack, Button, Link, useToast, Container, IconButton, Stack, Badge } from "@chakra-ui/react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Index = () => {
  const [stories, setStories] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const toast = useToast();

  useEffect(() => {
    fetch("https://hn.algolia.com/api/v1/search?query=LLMs")
      .then((response) => response.json())
      .then((data) => setStories(data.hits))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  const addFavorite = (story) => {
    setFavorites([...favorites, story]);
    toast({
      title: "Added to favorites.",
      description: "You've added a story to your favorites.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const isFavorite = (story) => {
    return favorites.some((fav) => fav.objectID === story.objectID);
  };

  return (
    <Container maxW="container.md" py={5}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">
          LLM Stories
        </Heading>
        {stories.map((story) => (
          <Box key={story.objectID} p={5} shadow="md" borderWidth="1px">
            <Stack direction="row" align="center" justify="space-between">
              <Link href={story.url} isExternal color="teal.500">
                {story.title}
              </Link>
              <IconButton icon={isFavorite(story) ? <FaHeart /> : <FaRegHeart />} onClick={() => addFavorite(story)} aria-label="Add to favorites" colorScheme={isFavorite(story) ? "red" : "gray"} />
            </Stack>
            <Text mt={2}>
              {story.points} points by {story.author}
            </Text>
            <Badge mt={1} colorScheme="purple">
              {story.num_comments} comments
            </Badge>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
