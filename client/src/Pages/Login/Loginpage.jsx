import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Divider,
  Image,
  Container,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export default function Loginpage() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confPassword, setConfPassword] = useState("");

  return (
    <>
      <Container>
        <Flex minH={"50vh"} align={"center"} justify={"center"}>
          <Stack spacing={1} mx={"auto"} maxW={"lg"} py={5} px={4}>
            <Stack align={"center"} mt={"40px"}>
              <Heading fontSize={"3xl"} textAlign={"center"}>
                Welcome Back
              </Heading>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={1}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    h={"7vh"}
                    type="email"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      border={"none"}
                      h={"7vh"}
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

                <Stack spacing={10} pt={2}>
                  <Button
                    bg={"#58C47F"}
                    h={"50px"}
                    w={"27vw"}
                    fontSize={{ lg: "2xl" }}
                    fontWeight={"bold"}
                    color={"white"}
                    _hover={{
                      bg: "black",
                    }}
                  >
                    Continue
                  </Button>
                </Stack>
                <br />
                <Text>
                  Don't have an account?{" "}
                  <Link to="/register">
                    <b style={{ color: "#58C47F", textAlign: "bold" }}>
                      Sign up
                    </b>
                  </Link>
                </Text>

                <Flex alignItems="center" justifyContent="center" my="4">
                  <Divider flex="1" borderColor="gray.300" />
                  <Text as="span" px="2" color="gray.500" fontWeight="bold">
                    or
                  </Text>
                  <Divider flex="1" borderColor="gray.300" />
                </Flex>

                <Flex
                  alignItems="center"
                  w={"26vw"}
                  height={"45px"}
                  borderColor="gray.300"
                  borderWidth="2px"
                  p="4"
                >
                  <Image
                    src="/Images/googleic.png"
                    alt="Image"
                    h={"25px"}
                    w={"25px"}
                    ml={"5px"}
                  />
                  <Text ml={"30px"}>Continue with Google</Text>
                </Flex>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </Container>
    </>
  );
}
