import React, { useState, useEffect } from 'react';
import {
  Box,
  Stack,
  Center,
  Text,
  Container,
  Avatar,
  Heading,
} from '@chakra-ui/react';
import Slider from 'react-slick';
import axios from 'axios';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import cards_data from './Testimonial_data.json'

const MotionContainer = motion(Container);

const variant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, y: 40 },
};

const settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        autoplay: true,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

export default function Testimonials() {
  const [slider, setSlider] = useState();
  const [cards, setCards] = useState([]);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  useEffect(() => {
   /* axios
      .get(`https://spinwash.herokuapp.com/api/reviews`)
      .then((res) => {
        const data = JSON.parse(res.data);
        // console.log(data.result.reviews);
        setCards(data.result.reviews);
      })
      .catch((err) => console.log(err));*/
      setCards(cards_data);
  }, []);

  return (
    <MotionContainer
      maxW='9xl'
      animate={controls}
      variants={variant}
      initial='hidden'
    >
      <Box
        maxW={'8xl'}
        mx='auto'
        px={{ base: '1rem', md: '4rem' }}
        pt={{ base: '4rem', md: '6rem' }}
      >
        <Heading
          fontWeight={'500'}
          fontSize={{ base: '2xl', md: '4xl' }}
          textAlign='center'
        >
          What our customers think
        </Heading>
      </Box>
      <Box ref={ref} width={'full'} overflow={'hidden'}>
        {/* CSS files for react-slick */}
        <link
          rel='stylesheet'
          type='text/css'
          charSet='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />

        {/* Slider */}
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards?.map((card, index) => (
            <Box key={index} position='relative'>
              <Center p={{ base: '1rem', xl: '4rem 6rem' }}>
                <Stack
                  h={{ base: '12rem', md: '14rem', lg: '22rem' }}
                  spacing={6}
                  w={'full'}
                  alignItems={'center'}
                  bg={'spinwash.100'}
                  p={{ base: '1rem', lg: '4rem 6rem' }}
                >
                  <Avatar src={card.profile_photo_url} />
                  <Text
                    textAlign={'center'}
                    fontSize={{ base: 'xs', lg: 'sm' }}
                    color='GrayText'
                    noOfLines={'3'}
                  >
                    {card.text}
                  </Text>
                  <Text
                    textAlign={'center'}
                    fontSize={{ base: 'md', md: 'xl', lg: '2xl' }}
                  >
                    {card.author_name}
                  </Text>
                </Stack>
              </Center>
            </Box>
          ))}
        </Slider>
      </Box>
      {/*}
        <Stack
        p='4rem 1rem'
        maxW='7xl'
        mx='auto'
        direction={{ base: 'column', md: 'row' }}
        justifyContent='space-between'
        spacing='2rem'
      >
        {' '}
        <Heading
          maxW='35rem'
          fontWeight={'500'}
          fontSize={{ base: 'lg', md: '2xl' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,{' '}
        </Heading>
        <Text
          maxW='35rem'
          fontWeight={'300'}
          fontSize={{ base: 'xs', md: 'md' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor rhoncus dolor purus non enim praesent elementum facilisis
          leo, vel
        </Text>
          </Stack>
          */}
    </MotionContainer>
  );
}
