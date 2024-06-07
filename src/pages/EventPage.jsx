import { Box, Button, Container, Flex, Heading, HStack, IconButton, Image, Input, InputGroup, InputLeftElement, Text, VStack } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const EventPage = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <HStack justifyContent="space-between" mb={6}>
        <Heading size="lg">Eventpedia</Heading>
        <HStack spacing={4}>
          <IconButton aria-label="Search" icon={<FaSearch />} />
          <Button colorScheme="blue">Create event</Button>
          <Button>Invite friends</Button>
        </HStack>
      </HStack>
      <Box mb={8}>
        <Heading size="2xl" mb={2}>Discover upcoming events</Heading>
        <Text fontSize="lg" color="gray.600">Find virtual and in-person events you love</Text>
        <InputGroup mt={4}>
          <InputLeftElement pointerEvents="none" children={<FaSearch color="gray.300" />} />
          <Input type="text" placeholder="Search events by name, category, city, or date" />
        </InputGroup>
      </Box>
      <VStack spacing={8} align="stretch">
        <EventItem
          date="Fri, Jul 22, 6:00 PM"
          title="The Great Gatsby"
          description="A lavish world premiere event for the highly anticipated film The Great Gatsby"
          imageUrl="https://user-images.githubusercontent.com/123456789/123456789-12345678-1234-1234-1234-123456789012.png"
        />
        <EventItem
          date="Sat, Jul 23, 2:00 PM"
          title="The Metamorphosis"
          description="The Metamorphosis, a novella written by Franz Kafka in 1915, is a story of Gregor Samsa, who wakes up one day to find himself transformed into a monstrous vermin"
          imageUrl="https://user-images.githubusercontent.com/123456789/123456789-12345678-1234-1234-1234-123456789012.png"
        />
        <EventItem
          date="Sun, Jul 24, 8:00 PM"
          title="The Rolling Stones"
          description="The Rolling Stones will be performing at the Rose Bowl Stadium on July 25th, 2023. Don't miss this once-in-a-lifetime opportunity to see one of the greatest rock bands of all time live in concert"
          imageUrl="https://user-images.githubusercontent.com/123456789/123456789-12345678-1234-1234-1234-123456789012.png"
        />
        <EventItem
          date="Mon, Jul 25, 6:00 PM"
          title="Cooking Class: Summer Salads"
          description="Join us for a fun and informative cooking class where we'll teach you how to make a variety of delicious and healthy summer salads. You'll learn all about different types of greens, how to prepare them, and how to make your own homemade salad dressings"
          imageUrl="https://user-images.githubusercontent.com/123456789/123456789-12345678-1234-1234-1234-123456789012.png"
        />
      </VStack>
    </Container>
  );
};

const EventItem = ({ date, title, description, imageUrl }) => (
  <Flex align="center" p={4} borderWidth={1} borderRadius="lg" boxShadow="md">
    <Image src={imageUrl} alt={title} boxSize="150px" objectFit="cover" borderRadius="lg" mr={4} />
    <Box flex="1">
      <Text fontSize="sm" color="gray.500">{date}</Text>
      <Heading size="md" mt={1} mb={2}>{title}</Heading>
      <Text fontSize="sm" color="gray.700">{description}</Text>
      <Button mt={4} colorScheme="gray">View event</Button>
    </Box>
  </Flex>
);

export default EventPage;