// chakra
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";
import { Button, Card, Flex, Text } from "@chakra-ui/react";

// types
import { TaskProps } from "@types";

// react
import { useEffect, useState } from "react";

const Task = ({
  individualTask,
  handleCompleteTask,
  handleDeleteTask,
}: TaskProps) => {
  const [completed, setCompleted] = useState(individualTask.completed);

  useEffect(() => {
    setCompleted(individualTask.completed);
  }, [individualTask.completed]);

  return (
    <Card p="2rem" mb="0.5rem" variant="outline">
      <Flex alignItems="center">
        {completed ? (
          <Text key="completed" flexGrow="1" as="del">
            {individualTask.task}
          </Text>
        ) : (
          <Text key="no-completed" flexGrow="1">
            {individualTask.task}
          </Text>
        )}
        <Flex>
          {individualTask.completed ? (
            <Button ml="1rem" colorScheme="whatsapp" isDisabled>
              <CheckIcon />
            </Button>
          ) : (
            <Button
              ml="1rem"
              colorScheme="whatsapp"
              onClick={() => handleCompleteTask(individualTask._id)}
            >
              <CheckIcon />
            </Button>
          )}
          <Button
            ml="1rem"
            colorScheme="red"
            onClick={() => handleDeleteTask(individualTask._id)}
          >
            <DeleteIcon />
          </Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Task;
