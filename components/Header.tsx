import { Flex, Heading, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <div>
      <Flex p="2rem" direction="column" alignItems="center">
        <Heading
          as="h1"
          size="4xl"
          noOfLines={1}
          className="tasklist-title bg-gradient-to-r from-fuchsia-600 to-pink-600 bg-clip-text text-transparent"
        >
          TaskList.io
        </Heading>
        <Text mt="1rem" className="tasklist-text"></Text>
      </Flex>
    </div>
  );
};

export default Header;
