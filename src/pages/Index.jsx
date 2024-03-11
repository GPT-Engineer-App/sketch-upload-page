import { Box, Button, Center, Container, Heading, Input, Stack, Text, useToast, VStack } from "@chakra-ui/react";
import { FaUpload } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const toast = useToast();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Implement the upload logic here.
      // For now, we'll just display a toast message.
      toast({
        title: "Success!",
        description: "Your sketch has been uploaded.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      // Reset the selected file
      setSelectedFile(null);
    } else {
      toast({
        title: "Error",
        description: "Please select a file before uploading.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={6}>
        <Heading as="h1" size="xl">
          Sketch Uploader
        </Heading>
        <Text>If you've got a sketch, you can upload it here!</Text>
        <Box>
          <Input type="file" accept="image/*" onChange={handleFileChange} hidden id="file-upload" />
          <Center>
            <Stack direction="row" spacing={4} align="center">
              <Button leftIcon={<FaUpload />} colorScheme="teal" onClick={() => document.getElementById("file-upload").click()}>
                Choose File
              </Button>
              <Text>{selectedFile ? selectedFile.name : "No file chosen"}</Text>
            </Stack>
          </Center>
        </Box>
        <Button colorScheme="blue" size="lg" leftIcon={<FaUpload />} onClick={handleUpload} isDisabled={!selectedFile}>
          Upload
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
