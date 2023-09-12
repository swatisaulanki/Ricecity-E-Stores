import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  InputGroup,
  InputRightElement,
  useColorModeValue,
  Divider,
  Image
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function Registerpage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <>
      <Flex minH={"70vh"} align={"center"} justify={"center"}>
        <Stack spacing={1} mx={"auto"} w={"100vw"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"3xl"}>Create your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}></Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="name">
                <FormLabel>Name</FormLabel>
                <Input
                 bg="blue.50"
                  h={"6vh"}
                  type="name"
                  placeholder="Enter your name"
                  onChange={(e) => setName(e.target.value)}
                />
              </FormControl>

              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  h={"6vh"}
                  type="email"
                  placeholder="Email Address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>

              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    h={"6vh"}
                    border={"none"}
                    type={showPassword ? "text" : "password"}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <InputRightElement h={"full"}>
                    <Button
                      variant={"ghost"}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }
                    >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack>
                <Button
                  bg={"#58C47F"}
                  h={"45px"}
                  w={"100%"}
                  fontSize={"2xl"}
                  color={"white"}
                  _hover={{
                    bg: "black",
                  }}
                >
                  Continue
                </Button>
              </Stack>
              <Text>
                Already have an account?{" "}
                <Link to="/login">
                  <b style={{ color: "#58C47F", textAlign: "bold" }}>Log In</b>
                </Link>
              </Text>

              <Flex alignItems="center" justifyContent="center" my="4">
      <Divider flex="1" borderColor="gray.300" />
      <Text as="span" px="2" color="gray.500" fontWeight="bold">
        or
      </Text>
      <Divider flex="1" borderColor="gray.300" />
    </Flex>

    <Flex alignItems="center"   w={'26vw'} height={'45px'}  borderColor="gray.300" borderWidth="2px"      p="4"  >
      <Image src="/Images/googleic.png" alt="Image" h={'25px'} w={'25px'} ml={'5px'} />
      <Text ml={'30px'}   >
        Continue with Google
      </Text>
    </Flex>

            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
