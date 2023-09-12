import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { IconButton, useBreakpointValue, Image, Box, Button, Heading, Grid, GridItem, Text, HStack, Card, CardHeader, CardBody, CardFooter, Flex, Stack } from "@chakra-ui/react";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import axios from "axios";

// Settings for the sliderr
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Homepage = () => {
  const [products, setProducts] = useState([]);

  const getAllData = async () => {
    try {
      const res = await axios.get("http://localhost:8000/CartsDatas");
      console.log(res.data);
      setProducts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCart=async()=>{
    try {
      const response = await axios.post('http://localhost:8000/CartData', products);
      console.log('Response:', response.data);
      alert(`data is added to`)
    } catch (error) {
      console.error('Error:', error);
    }
  }

  useEffect(() => {
    getAllData();
  }, []);
 
  const [slider, setSlider] = React.useState(0);

  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  const images = [
    {
      imageUrl: "https://i.ytimg.com/vi/UGcA1Qch2R8/maxresdefault.jpg",
    },
    {
      imageUrl: "./Images/logo3.png",
    },
    {
      imageUrl: "./Images/logo4.png",
    },
    {
      imageUrl: "./Images/logo1.png",
    },
    {
      imageUrl: "./Images/logo2.png",
    },
  ];
  return (
    <div>
      <Box
        position={"relative"}
        height={["auto","auto","auto","600px"]}
        width={"full"}
        overflow={"hidden"}
        mt={"10px"}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        {/* Left Icon */}
        <IconButton
          aria-label="left-arrow"
          variant="ghost"
          position="absolute"
          left={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickPrev()}
        >
          <BiLeftArrowAlt size="40px" />
        </IconButton>
        {/* Right Icon */}
        <IconButton
          aria-label="right-arrow"
          variant="ghost"
          position="absolute"
          right={side}
          top={top}
          transform={"translate(0%, -50%)"}
          zIndex={2}
          onClick={() => slider?.slickNext()}
        >
          <BiRightArrowAlt size="40px" />
        </IconButton>
        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {images.map((card, index) => (
            <Box
              key={index}
              w={"full"}
              // border={"1px solid black"}
              height={["auto","auto","auto","600px"]}
              position="relative"
              backgroundPosition="center"
              backgroundRepeat="no-repeat"
              backgroundSize="cover"
              zIndex={2}
              //   backgroundImage={`url(${card.imageUrl})`}
            >
              <Image src={card.imageUrl} w={"full"} />
            </Box>
          ))}
        </Slider>
      </Box>

      <Box py={"10px"}>
        <Heading py={"20px"}>ALL PRODUCTS</Heading>
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(4, 1fr)",
          ]}
          gap={6}
          w={"90%"}
          m={"auto"}

          // border={"1px solid red"}
        >
          {products.map((e) => (
            <GridItem height={"300px"} boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px">
              {/* <Link to={`/singlesale/${e.id}`}> */}
              <Link to={`/singleproduct/${e.id}`}><Box
                  key={e.id}
                  _hover={{ backgroundSize: "120%" }}
                  position="relative"
                  backgroundPosition="center"
                  backgroundRepeat="no-repeat"
                  backgroundSize="cover"
                  overflow={"hidden"}
                  height={"200px"}
                  cursor={"pointer"}
                  border={"1px solid grey"}
                  m={"10px"}
                  borderRadius={"5px"}
                  backgroundImage={`url(${e.imageURL2})`}
                  transition="background-size 0.5s ease"
                >
                  <Box backgroundColor={"#a4e1f4"} fontWeight={500} color={"#E22D4A"} w={"50%"} mt={"175px"}>₹{e.pricecashback}</Box>
                </Box>
                
              </Link>
              <Box px={"5px"}>
                <Text noOfLines={1}>{e.name}</Text>
                <HStack m={"auto"} justifyContent={"space-around"} color={"#E22D4A"}><Text fontWeight={500}><span style={{color:"#E22D4A"}}>₹</span> {e.price}</Text><Button _hover={{ backgroundColor: "#bbd9c1" }} backgroundColor={"#bbd9c1 "} onClick={handleCart} >Add To Cart</Button></HStack>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>

      <Link to={"/store"}><Button mt={"40px"} backgroundColor={"#5cb85c"} borderRadius={"0px"} fontWeight={600} fontSize={"20px"} p={"30px"}>Load More</Button></Link>


      <Grid
        spacing={8}
        templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)"]}
        m="auto"
        mt={"40px"}
        mb={"40px"}
        w={"85%"}
        gap={"30px"}
        // bgGradient='linear(to-b, #ccd9c3,#ccd9c3 )'
        // p={"20px"}
      >
        <Card  textAlign={"left"} color={"white"} bgGradient='linear(to-b, #0D4444, #48735B,#981c3b)' p={"20px"} pt={"100px"} borderRadius={"0px"}>
          <CardHeader >
            <Heading fontSize={"50px"}>Free Delivery all over Gondia</Heading>
          </CardHeader>
          <CardBody>
            <Text >Get Free Delivery for Cart Value More Then Rs. 100</Text>
          </CardBody>
          <CardFooter>
            <Flex justifyContent="center">
              <Button textAlign="center" backgroundColor={"#e7e7e7"} borderRadius={"0px"}>
                Shop Now
              </Button>
            </Flex>
          </CardFooter>
        </Card>

        <Card textAlign={"left"} color={"white"} bgGradient='linear(to-b, #85a07f, #47576b,#26305e)' p={"20px"} pt={"100px"} borderRadius={"0px"}>
          <CardHeader >
            <Heading fontSize={"50px"}>Delivery With in 4Hr All over Gondia.</Heading>
          </CardHeader>
          <CardBody>
            <Text >Max to Max we take 4hr To delivered Poduct in Your Hand</Text>
          </CardBody>
          <CardFooter>
            <Flex justifyContent="center">
              <Button textAlign="center" backgroundColor={"#e7e7e7"} borderRadius={"0px"}>
                Shop Now
              </Button>
            </Flex>
          </CardFooter>
        </Card>

        <Card textAlign={"left"} color={"white"} bgGradient='linear(to-b, #6d7098, #935680,#b1284f)' p={"20px"} pt={"100px"} borderRadius={"0px"}>
          <CardHeader >
            <Heading fontSize={"50px"}>Support Local Go hard</Heading>
          </CardHeader>
          <CardBody>
            <Text >Your Local Ecommerce Site</Text>
          </CardBody>
          <CardFooter>
            <Flex justifyContent="center">
              <Button textAlign="center" backgroundColor={"#e7e7e7"} borderRadius={"0px"}>
                Shop Now
              </Button>
            </Flex>
          </CardFooter>
        </Card>
      </Grid>

      <HStack h={["auto","auto","auto","400px"]}  gap={"20px"} p={"40px"} bg={"#818a91"} display={["block","block","flex","flex"]}>
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
    </div>
  );
};

export default Homepage;
