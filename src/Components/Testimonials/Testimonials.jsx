import React, { useState } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Center,
  Text,
  Container,
  Avatar,
  Heading,
} from '@chakra-ui/react';
import Slider from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

export default function Testimonials() {
  const [slider, setSlider] = useState();

  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const cards = [
    {
      title: 'Lorem ipsum dolor',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image: 'https://miro.medium.com/max/785/0*Ggt-XwliwAO6QURi.jpg',
    },
    {
      title: 'Lorem ipsum dolor',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    },
    {
      title: 'Lorem ipsum dolor',
      text: "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-J04gXCOsTHzwjH5Ay2IWfnWBzFfBlP0sg&usqp=CAU',
    },
  ];

  return (
    <Container maxW='9xl'>
      <Box maxW={'8xl'} mx='auto' px={{ base: '1rem', md: '2rem' }} pt='4rem'>
        <Heading fontWeight={'500'} fontSize={{ base: '2xl', md: '4xl' }}>
          Testimonials
        </Heading>
        <Text
          py={{ base: '1rem', md: '2rem' }}
          maxW='36rem'
          fontWeight={'300'}
          fontSize={{ base: 'xs', md: 'md' }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </Text>
      </Box>
      <Box width={'full'} overflow={'hidden'}>
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
          {cards.map((card, index) => (
            <Box key={index} position='relative'>
              <Center p={{ base: '1rem', xl: '4rem 6rem' }}>
                <Stack
                  spacing={6}
                  w={'full'}
                  alignItems={'center'}
                  bg={'spinwash.100'}
                  p={{ base: '1rem', lg: '4rem 6rem' }}
                >
                  <Avatar src={card.image} />
                  <Text
                    textAlign={'center'}
                    fontSize={{ base: 'xs', lg: 'sm' }}
                    color='GrayText'
                  >
                    {card.text}
                  </Text>
                  <Text
                    textAlign={'center'}
                    fontSize={{ base: 'md', md: 'xl', lg: '2xl' }}
                  >
                    {card.title}
                  </Text>
                </Stack>
              </Center>
            </Box>
          ))}
        </Slider>
      </Box>
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
    </Container>
  );
}
