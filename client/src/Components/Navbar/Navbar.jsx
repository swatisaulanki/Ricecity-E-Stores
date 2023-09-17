import React, { useState } from "react";
import {
  Box,
  HStack,
  Image,
  Input,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Heading,
} from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import Draver from "./Drawer";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [search, setSearch] = useState("none");
  const [cancel, setCancel] = useState(false);

  const handleSearch = () => {
    setSearch("block");
    setCancel(!cancel);
  };
  return (
    <>
      <Box w={"100%"} position={"sticky"} top={0} zIndex={1} bg={"white"}>
        <HStack
          // border={"1px solid red"}
          height={"100px"}
          justifyContent={"space-around"}
          // borderBottom={"1px solid black"}
          w={"100%"}
          // bg={"#e7e7e7"}
        >
          {/* left side logo */}
          <Link to={"/"}>
            <Box
              // w={"250px"}
              // border={"1px solid green"}
              cursor={"pointer"}
              display={["none", "none", "flex", "flex"]}
              alignItems="center"
            >
              <Image
                src="./Images/ricecitylogo.png"
                alt="logo"
                height="100px"
              />
              <Heading color="">
                Ricecity <span style={{ color: "#E22D4A" }}>E-Store</span>{" "}
              </Heading>
            </Box>
          </Link>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              display={["block", "block", "none", "none"]}
            />
            <MenuList>
              <Link to="/store"><MenuItem>STORE</MenuItem></Link>
              <Link to="/login"><MenuItem>LOGIN</MenuItem></Link>
              <Link to="/contactus"><MenuItem>Contact-US</MenuItem></Link>
              <Link to="/about"><MenuItem>ABOUT</MenuItem></Link>
              <Link to="/policies"><MenuItem>POLICIES</MenuItem></Link>
            </MenuList>
          </Menu>

          {/* middle  components */}
          <Box
            // border={"1px solid green"}
            fontWeight={600}
            cursor={"pointer"}
            display={["none", "none", "block", "block"]}
          >
            <HStack
              justifyContent={"space-around"}
              gap={"40px"}
              color={"#5E6061"}
              fontSize={"20px"}
            >
              <Link to="/store">
                <Text>STORE</Text>
              </Link>

              <Link to={"/contactus"}>
                <Text>CONTACT-US</Text>
              </Link>

              <Link to={"/about"}>
                <Text>ABOUT</Text>
              </Link>

              <Link to={"/policies"}>
                <Text>POLICIES</Text>
              </Link>
            </HStack>
          </Box>
          <Box
            w={["210px", "210px", "200px", "250px"]}
            // border={"1px solid green"}
            cursor={"pointer"}
            display={["block", "block", "none", "none"]}
          >
            <Image
              src="./Images/ricecitylogo.png"
              alt="logo"
              w={"100px"}
              m="auto"
            />
          </Box>

          {/* right login cart buttons */}
          <Box
            //  border={"1px solid green"}
            fontWeight={600}
            cursor={"pointer"}
          >
            <HStack
              justifyContent={"space-around"}
              gap={["15px", "15px", "10px", "20px"]}
            >
              <Link to={"/login"}>
                {" "}
                <Box display={["none", "none", "block", "block"]}>
                  <AiOutlineUser style={{ height: "35px", width: "35px" }} />
                  {/* <Avatar src='https://bit.ly/broken-link' /> */}
                </Box>
              </Link>
              <Box onClick={handleSearch}>
                {cancel ? (
                  <MdCancel style={{ height: "25px", width: "25px" }} />
                ) : (
                  <FiSearch style={{ height: "35px", width: "35px" }} />
                )}
              </Box>
              <HStack>
                <Box
                  position={"relative"}
                  border={"1px solid #E22D4A"}
                  marginLeft={"25px"}
                  marginTop={"-25px"}
                  w={"20px"}
                  h={"25px"}
                  color={"white"}
                  backgroundColor={"#E22D4A"}
                  borderRadius={"50%"}
                >
                  0
                </Box>
                <Box position={"absolute"}>
                  <Draver />
                </Box>
              </HStack>
            </HStack>
          </Box>
        </HStack>
        <Box display={cancel ? search : "none"}>
          <HStack
            borderBottom={"1px solid grey"}
            h={"60px"}
            w={["100%", "100%", "50%", "40%"]}
            m={"auto"}
          >
            <Input
              placeholder="Search Keywords...."
              border={"0px solid white"}
              focusBorderColor="white"
            />
            <FiSearch
              style={{
                height: "55px",
                width: "55px",
                backgroundColor: "#818A91",
                color: "white",
              }}
            />
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
