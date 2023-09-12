import { Box, Button, HStack, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Reducer, dec, inc } from "../Reducer/Reducer";
import axios from "axios";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [state, dispatch] = useReducer(Reducer, { count: 1 });
  const navigate=useNavigate()

  const [selectedImage, setSelectedImage] = useState("");
  let  total=(product.price)*(state.count);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:8000/CartsDatas/${id}`)
        .then((res) => res.json())
        .then((d) => setProduct(d));
    }
  }, [id]);

  
  const handleCart=async()=>{
    try {
      const response = await axios.post('http://localhost:8000/CartData', product);
      console.log('Response:', response.data);
      alert(`data is added to`)
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const handleBuy=()=>{
    navigate("/cart")
  }

  const renderSelectedImage = () => {
    if (selectedImage) {
      return (
        <Box
          id="selected-image"
          w={"700px"}
          h={"100%"}
          border={"1px solid black"}
        >
          <Image w={"100%"} h={"100%"} src={selectedImage} alt="Selected Image" />
        </Box>
      );
    } else {
      return (
        <Box id="selected-image" w={"700px"} border={"1px solid black"}>
          <Image w={"100%"} h={"100%"} src={product.imageURL1} alt="No Image Selected" />
        </Box>
      );
    }
  };

  return (
    <>
      <Box textAlign={"left"} px={"40px"} pt={"40px"}>
        <Text fontSize={"24px"}>Home/Products/{product.name}</Text>
      </Box>
      <Box>
        <HStack gap={"40px"} p={"90px"}>
          <Box h={"900px"} w={"150px"}>
            <Image
              src={product.img1}
              onClick={() => handleImageClick(product.img1)}
              alt="Image 1"
              width={"100%"}
              height={"150px"}
              mb={"20px"}
            />
            <Image
              src={product.img2}
              onClick={() => handleImageClick(product.img2)}
              alt="Image 2"
              width={"100%"}
              height={"150px"}
              mb={"20px"}
            />
            <Image
              src={product.img3}
              onClick={() => handleImageClick(product.img3)}
              alt="Image 3"
              width={"100%"}
              height={"150px"}
              mb={"20px"}
            />
            <Image
              src={product.img4}
              onClick={() => handleImageClick(product.img4)}
              alt="Image 4"
              width={"100%"}
              height={"150px"}
              mb={"20px"}
            />
          </Box>
          <Box>{renderSelectedImage()}</Box>
          <Box w={"700px"} h={"900px"} lineHeight={"10"} textAlign={"left"}>
            <Heading fontWeight={"medium"}>{product.name}</Heading>
            <Text fontSize={"24px"}>
              ₹ {total}
            </Text>
            <hr />
            <Text fontSize={"24px"} >Quantity</Text>
            <HStack border={"1px solid black"} justifyContent={"space-between"} width={"150px"}>
              <Button backgroundColor={"white"} _hover={{
            backgroundColor:"white" 
          }}  isDisabled={state.count <= 1} onClick={() => dispatch(dec)}>
                -
              </Button>
              <span>{state.count}</span>
              <Button backgroundColor={"white"} _hover={{
            backgroundColor:"white" 
          }}  onClick={() => dispatch(inc)} flexDirection={"end"}>+</Button>
            </HStack>
            <Box pt={"20px"}>
              <Button
                w={"100%"}
                m={"5px"}
                h={"50px"}
                backgroundColor={"#343a40"}
                color={"white"}
                border={"1px solid #343a40"}
                borderRadius={"0px"}
                onClick={handleCart}
              >
                ADD TO CART
              </Button>
              <Button
                w={"100%"}
                m={"5px"}
                h={"50px"}
                backgroundColor={"white"}
                border={"1px solid #343a40"}
                borderRadius={"0px"}
                onClick={handleBuy}
              >
                BUY IT NOW
              </Button>
            </Box>
            <Text>Ships in 4 business days.</Text>
          </Box>
        </HStack>
      </Box>
    </>
  );
};

export default SingleProduct;
