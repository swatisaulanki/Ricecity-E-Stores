import {
  AspectRatio,
  Box,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const Aboutpage = () => {
  return (
    <>
      <HStack bg="#818A91" display={["block","block","flex","flex"]} mt={["30px","30px","30px","0%"]}>
        <Box w={["100%","100%","100%","50%"]}>
          <Box>
            <Heading mb={"30px"}>Who We Are</Heading>
            <Box w={"100px"} m={"auto"} borderBottom={"6px solid red"}></Box>
            <Text color={"white"} mt={"20px"} fontSize={"20px"}>
              We are a group of local student of Gondia to provide easiness to{" "}
              <br /> our localhood for Buying of products and other services…
            </Text>
          </Box>
        </Box>
        <Box w={["100%","100%","100%","50%"]}>
          <Image
            src="https://mh-gnd.cf/wp-content/uploads/2018/12/slide-image-free-img-1024x576.jpg"
            alt="aboutimage"
          />
        </Box>
      </HStack>
      {/* <Box>
        <Text>A Few Words About</Text>
        <Heading>Our Team</Heading>
        <Text>
          Money don’t matter your trust make us rich… <br /> support us… <br />
          We need your support…
        </Text>
      </Box> */}
      {/* <Box>
        <HStack>
          <Stack>
            <Image src="https://mh-gnd.cf/wp-content/uploads/2021/07/circle-cropped.png" />
            <Text>Vaibhav Katre</Text>
          </Stack>
        </HStack>
      </Box> */}
      <HStack h={["auto","auto","auto","400px"]}  gap={"20px"} p={"40px"} bg={"#e7e7e7"} display={["block","block","flex","flex"]}>
        <Stack align={"center"}>
          <Image w={"70px"} h="70px" src="https://mh-gnd.cf/wp-content/uploads/2018/12/globe-free-img.png" />
          <Heading fontSize={"24px"}>Gondia_wide ShippingOnly</Heading>
          <Text>
            We Provide Shipping Delivered all over Gondia at Same day or Next
            Day.
          </Text>
        </Stack>
        <Stack align={"center"}>
          <Image w={"70px"} h="70px" src="https://mh-gnd.cf/wp-content/uploads/2018/12/quality-free-img.png" />
          <Heading fontSize={"24px"}>Best Quality</Heading>
          <Text>Our Motive to Provide Best Quality Product At Best Price.</Text>
        </Stack>
        <Stack align={"center"}>
          <Image w={"70px"} h="70px" src="https://mh-gnd.cf/wp-content/uploads/2018/12/tag-free-img.png" />
          <Heading fontSize={"24px"}>Best Offers</Heading>
          <Text>
            We always try to Provide best product at best Offer and Price.
          </Text>
        </Stack>
        <Stack align={"center"}>
          <Image w={"70px"} h="70px" src="https://mh-gnd.cf/wp-content/uploads/2018/12/lock-free-img.png" />
          <Heading fontSize={"24px"}>Secure Payments</Heading>
          <Text>
            You can Pay via Multiple payment methods and also CASH ON DELIVERY
            available.
          </Text>
        </Stack>
      </HStack>

      <AspectRatio m={"20px"} ml={"80px"} mr={"80px"} h={"500px"}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118815.33520062623!2d80.13433633264843!3d21.469331777871613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2baead0a4b0175%3A0x718607d421888196!2sGondia%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1691210785713!5m2!1sen!2sin" />
      </AspectRatio>
    </>
  );
};

export default Aboutpage;
