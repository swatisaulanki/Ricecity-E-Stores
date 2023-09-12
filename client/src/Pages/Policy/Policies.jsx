// import React from 'react'

// const Policies = () => {
//   return (
//     <div>Policies</div>
//   )
// }

// export default Policies

import { Container, Stack, Text, Button } from "@chakra-ui/react";
import { FaDiscourse } from "react-icons/fa";
export default function CallToActionWithVideo() {
  return (
    <>
      <Container
        maxW={"6xl"}
        bg={"gray.50"}
        mt={"40px"}
        pb={"30px"}
        borderRadius={"20PX"}
      >
        <Stack marginLeft={"-54px"}>
          <Text
            textAlign={"left"}
            fontSize={{ lg: "5xl" }}
            marginTop="5px"
            fontWeight={"bold"}
            color={"red.600"}
            p={10}
          >
            Policies
          </Text>
        </Stack>

        <Stack textAlign={"left"}>
          <Stack>
            <Stack lineHeight={1.1} fontWeight={600}>
              <Text fontSize={{ lg: "3xl" }} fontWeight={"bold"}>
                Who we are
              </Text>
              <Text fontWeight={"bold"}>Hello Every one We are one of You</Text>
              <Text>Our websites address is:</Text>
            </Stack>
          </Stack>
          <br />
          <Stack>
            <Stack lineHeight={1.5} fontWeight={600}>
              <Text fontSize={{ lg: "3xl" }} fontWeight={"bold"}>
                Comments
              </Text>
              <Text>
                When visitors leave comments on the site we show comments form
                browser user agent string to help spam detection.
              </Text>
            </Stack>
          </Stack>

          <br />

          <Stack>
            <Stack lineHeight={1.5} fontWeight={600}>
              <Text fontSize={{ lg: "3xl" }} fontWeight={"bold"}>
                Media
              </Text>
              <Text>
                If you upload images to the website, you should avoid uploading
                images with embedded location data (EXIF GPS) included. Visitors
                to the website can download and extract any location data from
                images on the websites
              </Text>
            </Stack>
          </Stack>

          <br />
          <Stack>
            <Stack lineHeight={1.5} fontWeight={600}>
              <Text fontSize={{ lg: "3xl" }} fontWeight={"bold"}>
                Cookies
              </Text>
              <Text>
                If you leave a comment on our site you may opt-in to saving your
                name, email address and website in cookies. These are for your
                convenience so that you do not have to fill in your details
                again when you leave another comment. These cookes will last for
                one year.
              </Text>
              <Text>
                If you visit our login page, we will set a temporary cookie to
                determine if your browser accepts cookies. This cookie contains
                no personal data and is discarded when you close your browser.
              </Text>

              <Text>
                When you log in, we will also set up several cookies to save
                your login information and your screen display choices. Login
                cookies last for two days, and screen options cookies last for a
                year. If you select “Remember Me”, your login will persist for
                two weeks. If you log out of your account, the login cookies
                will be removed.
              </Text>
              <Text>
                If you edit or publish an article, an additional cookie will be
                saved in your browser. This cookie includes no personal data and
                simply indicates the post ID of the article you just edited. It
                expires after 1 day.
              </Text>
            </Stack>
          </Stack>
          <br />
          <Stack>
            <Stack lineHeight={1.5} fontWeight={600}>
              <Text fontSize={{ lg: "3xl" }} fontWeight={"bold"}>
                Embedded content from other websites
              </Text>
              <Text>
                Articles on this site may include embedded content (e.g. videos,
                images, articles, etc.). Embedded content from other websites
                behaves in the exact same way as if the visitor has visited the
                other website.
              </Text>
              <Text>
                These websites may collect data about you, use cookies, embed
                additional third-party tracking, and monitor your interaction
                with that embedded content, including tracking your interaction
                with the embedded content if you have an account and are logged
                in to that website.
              </Text>
            </Stack>
          </Stack>

          <br />

          <Stack>
            <Stack lineHeight={1.5} fontWeight={600}>
              <Text fontSize={{ lg: "3xl" }} fontWeight={"bold"}>
                Who we share your data with
              </Text>

              <Text>
                If you request a password reset, your IP address will be
                included in the reset email.
              </Text>
            </Stack>
          </Stack>

          <br />

          <Stack>
            <Stack lineHeight={1.5} fontWeight={600}>
              <Text fontSize={{ lg: "3xl" }} fontWeight={"bold"}>
                How long we retain your data
              </Text>
              <Text>
                If you leave a comment, the comment and its metadata are
                retained indefinitely. This is so we can recognize and approve
                any follow-up comments automatically instead of holding them in
                a moderation queue.
              </Text>
              <Text>
                For users that register on our website (if any), we also store
                the personal information they provide in their user profile. All
                users can see, edit, or delete their personal information at any
                time (except they cannot change their username). Website
                administrators can also see and edit that information.
              </Text>
            </Stack>
          </Stack>

          <br />

          <Stack>
            <Stack lineHeight={1.5} fontWeight={600}>
              <Text fontSize={{ lg: "3xl" }} fontWeight={"bold"}>
                What rights you have over your data
              </Text>
              <Text>
                If you have an account on this site, or have left comments, you
                can request to receive an exported file of the personal data we
                hold about you, including any data you have provided to us. You
                can also request that we erase any personal data we hold about
                you. This does not include any data we are obliged to keep for
                administrative, legal, or security purposes.
              </Text>
            </Stack>
          </Stack>
          <br />

          <Stack>
            <Stack lineHeight={1.5} fontWeight={600}>
              <Text fontSize={{ lg: "3xl" }} fontWeight={"bold"}>
                Where we send your data
              </Text>
              <Text>
                Visitor comments may be checked through an automated spam
                detection service.
              </Text>
            </Stack>
          </Stack>

          <br />
          <Stack>
            <Stack lineHeight={1.5} fontWeight={600}>
              <Text fontSize={{ lg: "3xl" }} fontWeight={"bold"}>
                Return, Refund and Replacement Policy
              </Text>
              <Text>
                Don’t worry we also accept Your Return, Refund or any
                Replacement Genuine Request. For this You can easily contact
                With us by clicking on Button
              </Text>
            </Stack>
          </Stack>
          <br />
          <br />
        </Stack>

        <Stack direction="row" spacing={4}>
          <Button
            leftIcon={<FaDiscourse />}
            bg={"#58C47F"}
            color={"white"}
            variant="solid"
            colorScheme="black"
            w={"16vw"}
            h={"8vh"}
            margin={"auto"}
            fontSize={{ md: "1xl" }}
            fontWeight={"bold"}
          >
            How Can I Help You
          </Button>
        </Stack>
        <br />
      </Container>
      <br />
      <br />
    </>
  );
}
