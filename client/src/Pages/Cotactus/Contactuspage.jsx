import { HStack, Image, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Contactuspage = () => {
  return (
    <HStack gap={"40px"} w={"90%"} m={"auto"} color={"#333333"} p={"20px"} pt={"40px"} flexDirection={["column","column","column","row"]}>
      <Stack textAlign={"left"} w={["100%","100%","100%","70%"]}>
        <Text fontSize={"34px"} fontWeight={"600"} >Questions, Comments? You tell us. We listen.</Text>
        <Text lineHeight={10}>Email: <span style={{fontWeight:"700"}} >vaibhav@ricecity.in</span> </Text>
        <Text lineHeight={10}>
          Monday to Saturday – 9:00 am to 7:00 pm <br />
          Sunday – 10:00 am to 5:00 pm
        </Text>
        <Text fontSize={"24px"} fontWeight={"700"} lineHeight={10}>Need Us? Call Us.</Text>
        <Text fontSize={"40px"} fontWeight={"700"} lineHeight={10}>9405686395</Text>
        <Text fontSize={"40px"} fontWeight={"700"} lineHeight={10}>9359753547</Text>
        <a href="https://api.whatsapp.com/send?phone=919404607050"><Image h={"40px"} w={"40px"} src="https://mh-gnd.cf/wp-content/uploads/2022/01/WA-logo.png"/></a>
      </Stack>
      <Stack textAlign={"left"}>
        <Text fontSize={"34px"} fontWeight={"600"}>Contact Form</Text>
        <form style={{width:"80%"}}>
          <Input mb={"30px"} placeholder="NAME"/>
          <Input mb={"30px"} placeholder="SUBJECT"/>
          <Input mb={"30px"}  placeholder="EMAIL"/>
          <Input mb={"30px"} placeholder="MESSAGE" h={"200px"}/>
          <Input type="submit" placeholder="send message" bg={"#bbd9c1"} w={"60%"}/>
        </form>
      </Stack>
    </HStack>
  );
};

export default Contactuspage;
