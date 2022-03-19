import {
  Box,
  Container,
  Flex,
  Heading,
  VStack,
  Stack,
  Text,
} from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const MotionBox = motion(Box);

const variant = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  hidden: { opacity: 0, y: 40 },
};

const ServiceWrap = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <MotionBox
      py={{ base: '3rem', md: '5rem' }}
      bg='spinwash.100'
      ref={ref}
      animate={controls}
      variants={variant}
      initial='hidden'
    >
      <Flex
        gap={{ base: '1rem', sm: '1.5rem', md: '2rem' }}
        flexWrap={'wrap'}
        justifyContent={'center'}
        align='center'
      >
        <VStack
          bg='white'
          p={{ base: '2rem', md: '3rem 4rem' }}
          spacing={{ base: '3', md: '5' }}
        >
          <Box
            w={{ base: '3rem', md: '5rem' }}
            h={{ base: '3rem', md: '5rem' }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              viewBox='0 0 172 172'
            >
              <g
                fill='none'
                fill-rule='nonzero'
                stroke='none'
                stroke-width='1'
                stroke-linecap='butt'
                stroke-linejoin='miter'
                stroke-miterlimit='10'
                stroke-dasharray=''
                stroke-dashoffset='0'
                font-family='none'
                font-weight='none'
                font-size='none'
                text-anchor='none'
              >
                <path d='M0,172v-172h172v172z' fill='none'></path>
                <g fill='#1b4d7a'>
                  <path d='M48.375,17.91667c-12.79944,0 -23.29167,10.49222 -23.29167,23.29167v89.58333c0,12.79944 10.49222,23.29167 23.29167,23.29167h75.25c12.79944,0 23.29167,-10.49222 23.29167,-23.29167v-89.58333c0,-12.79944 -10.49222,-23.29167 -23.29167,-23.29167zM48.375,28.66667h75.25c6.98772,0 12.54167,5.55394 12.54167,12.54167v89.58333c0,6.98772 -5.55394,12.54167 -12.54167,12.54167h-75.25c-6.98772,0 -12.54167,-5.55394 -12.54167,-12.54167v-89.58333c0,-6.98772 5.55394,-12.54167 12.54167,-12.54167zM51.95833,39.41667c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375zM69.875,39.41667c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375zM118.25,39.41667c-3.95804,0 -7.16667,3.20863 -7.16667,7.16667c0,3.95804 3.20863,7.16667 7.16667,7.16667c3.95804,0 7.16667,-3.20863 7.16667,-7.16667c0,-3.95804 -3.20863,-7.16667 -7.16667,-7.16667zM86,57.33333c-19.72655,0 -35.83333,16.1068 -35.83333,35.83333c0,19.72653 16.10679,35.83333 35.83333,35.83333c19.72655,0 35.83333,-16.1068 35.83333,-35.83333c0,-19.72653 -16.10679,-35.83333 -35.83333,-35.83333zM86,68.08333c13.08133,0 23.38268,9.98936 24.61442,22.73177c-9.13237,4.27563 -13.80066,2.0797 -21.40902,-0.86784c-6.74337,-2.61243 -15.80209,-5.17239 -27.23193,-2.07161c2.4765,-11.26134 11.98968,-19.79232 24.02653,-19.79232zM71.40072,96.64502c0.90583,-0.06062 1.77439,-0.05139 2.60352,0.02099c3.9295,0.34307 7.34146,1.76327 11.31689,3.30339c6.27629,2.43147 14.27197,5.00285 23.87256,2.63151c-3.71316,9.18775 -12.62933,15.64909 -23.19368,15.64909c-11.85034,0 -21.25579,-8.27058 -23.92155,-19.26741c3.52971,-1.37271 6.60479,-2.15572 9.32226,-2.33757z'></path>
                </g>
              </g>
            </svg>
          </Box>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>Laundary</Text>
        </VStack>
        <VStack
          bg='white'
          p={{ base: '2rem', md: '3rem 4rem' }}
          spacing={{ base: '3', md: '5' }}
        >
          <Box
            w={{ base: '3rem', md: '5rem' }}
            h={{ base: '3rem', md: '5rem' }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              viewBox='0 0 172 172'
            >
              <g
                fill='none'
                fill-rule='nonzero'
                stroke='none'
                stroke-width='1'
                stroke-linecap='butt'
                stroke-linejoin='miter'
                stroke-miterlimit='10'
                stroke-dasharray=''
                stroke-dashoffset='0'
                font-family='none'
                font-weight='none'
                font-size='none'
                text-anchor='none'
              >
                <path d='M0,172v-172h172v172z' fill='none'></path>
                <g fill='#1b4d7a'>
                  <path d='M84.20833,14.33333c-10.8575,0 -19.70833,8.85083 -19.70833,19.70833v33.8597c2.43667,-0.50167 4.04693,-1.89581 4.87109,-2.82748c1.57667,-1.75583 3.62141,-3.04415 5.87891,-3.65332v-27.37891c0,-4.945 4.01333,-8.95833 8.95833,-8.95833h53.75c4.945,0 8.95833,4.01333 8.95833,8.95833v68.08333c0,4.945 -4.01333,8.95833 -8.95833,8.95833h-30.45833v10.75h30.45833c10.8575,0 19.70833,-8.85083 19.70833,-19.70833v-68.08333c0,-10.8575 -8.85083,-19.70833 -19.70833,-19.70833zM86,32.25c-1.97902,0 -3.58333,1.60431 -3.58333,3.58333c0,1.97902 1.60431,3.58333 3.58333,3.58333c1.97902,0 3.58333,-1.60431 3.58333,-3.58333c0,-1.97902 -1.60431,-3.58333 -3.58333,-3.58333zM100.33333,32.25c-1.97902,0 -3.58333,1.60431 -3.58333,3.58333c0,1.97902 1.60431,3.58333 3.58333,3.58333c1.97902,0 3.58333,-1.60431 3.58333,-3.58333c0,-1.97902 -1.60431,-3.58333 -3.58333,-3.58333zM134.375,32.25c-2.96853,0 -5.375,2.40647 -5.375,5.375c0,2.96853 2.40647,5.375 5.375,5.375c2.96853,0 5.375,-2.40647 5.375,-5.375c0,-2.96853 -2.40647,-5.375 -5.375,-5.375zM111.08333,50.16667c-8.56417,0 -16.15999,4.29748 -20.63916,10.85498c5.2675,0.215 10.49609,0.86532 15.65609,1.86865l9.24528,1.86165c6.62917,1.32583 10.99999,7.66749 9.88916,14.36833l-3.11442,18.63053c8.31333,-4.04917 14.04639,-12.61081 14.04639,-22.50081c0,-13.8675 -11.21583,-25.08333 -25.08333,-25.08333zM39.33268,68.08333c-6.25301,0 -12.49499,0.61799 -18.62353,1.84066l-9.22428,1.84766c-2.84366,0.56898 -4.72339,3.29103 -4.24821,6.15186l3.58333,21.5c0.43157,2.59354 2.67582,4.49433 5.30501,4.49316h8.95833v48.375c0.0003,2.96841 2.40659,5.3747 5.375,5.375h64.5c2.96841,-0.0003 5.3747,-2.40659 5.375,-5.375v-48.375h8.95833c2.6292,0.00117 4.87344,-1.89963 5.30501,-4.49316l3.58333,-21.5c0.47518,-2.86083 -1.40455,-5.58287 -4.24821,-6.15186l-9.22428,-1.84766c-6.13265,-1.22729 -12.37269,-1.84066 -18.62353,-1.84066h-7.38363c-1.52736,-0.00085 -2.98298,0.64807 -4.00326,1.78467c-2.97082,3.31142 -7.19291,5.382 -11.98877,5.382c-4.79586,0 -9.0236,-2.07386 -11.98877,-5.382c-1.02028,-1.1366 -2.47589,-1.78552 -4.00326,-1.78467zM39.33268,78.83333h5.80892c4.74281,4.22816 10.72661,7.16667 17.56673,7.16667c6.84012,0 12.82359,-2.94032 17.56673,-7.16667h5.80892c5.54549,0 11.08257,0.54315 16.51692,1.6307l4.11524,0.82585l-1.98063,11.87679h-9.77718c-2.96841,0.0003 -5.3747,2.40659 -5.375,5.375v48.375h-53.75v-48.375c-0.0003,-2.96841 -2.40659,-5.3747 -5.375,-5.375h-9.77718l-1.98063,-11.87679l4.11523,-0.82585c5.43845,-1.08499 10.97361,-1.6307 16.51693,-1.6307z'></path>
                </g>
              </g>
            </svg>
          </Box>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>Laundary</Text>
        </VStack>
        <VStack
          bg='white'
          p={{ base: '2rem', md: '3rem 4rem' }}
          spacing={{ base: '3', md: '5' }}
        >
          <Box
            w={{ base: '3rem', md: '5rem' }}
            h={{ base: '3rem', md: '5rem' }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              viewBox='0 0 172 172'
            >
              <g
                fill='none'
                fill-rule='nonzero'
                stroke='none'
                stroke-width='1'
                stroke-linecap='butt'
                stroke-linejoin='miter'
                stroke-miterlimit='10'
                stroke-dasharray=''
                stroke-dashoffset='0'
                font-family='none'
                font-weight='none'
                font-size='none'
                text-anchor='none'
              >
                <path d='M0,172v-172h172v172z' fill='none'></path>
                <g fill='#1b4d7a'>
                  <path d='M66.29167,17.91667c-1.93842,-0.02741 -3.74144,0.99102 -4.71865,2.66532c-0.97721,1.6743 -0.97721,3.74507 0,5.41937c0.97721,1.6743 2.78023,2.69273 4.71865,2.66532h58.55811c9.49012,0 15.54685,4.92762 16.62191,14.70427l2.71549,24.7124h-69.52506c-23.76526,0 -45.23211,14.58554 -54.01595,37.42903l-13.12256,34.09766c-0.63641,1.6533 -0.41738,3.51401 0.58554,4.97434c1.00293,1.46033 2.66096,2.33275 4.43252,2.3323h145.125c1.52735,-0.00095 2.98219,-0.65158 4.00113,-1.78937c1.01894,-1.13779 1.50576,-2.65531 1.33888,-4.17352l-10.84798,-98.75863c-1.59095,-14.46819 -13.32104,-24.27848 -27.30892,-24.27848zM74.66211,78.83333h70.70784l6.29883,57.33333h-131.29557l10.30208,-26.79101c0,-0.00233 0,-0.00467 0,-0.007c7.24082,-18.83051 24.58724,-30.53532 43.98682,-30.53532z'></path>
                </g>
              </g>
            </svg>
          </Box>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>Laundary</Text>
        </VStack>
        <VStack
          bg='white'
          p={{ base: '2rem', md: '3rem 4rem' }}
          spacing={{ base: '3', md: '5' }}
        >
          <Box
            w={{ base: '3rem', md: '5rem' }}
            h={{ base: '3rem', md: '5rem' }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              viewBox='0 0 172 172'
            >
              <g
                fill='none'
                fill-rule='nonzero'
                stroke='none'
                stroke-width='1'
                stroke-linecap='butt'
                stroke-linejoin='miter'
                stroke-miterlimit='10'
                stroke-dasharray=''
                stroke-dashoffset='0'
                font-family='none'
                font-weight='none'
                font-size='none'
                text-anchor='none'
              >
                <path d='M0,172v-172h172v172z' fill='none'></path>
                <g fill='#1b4d7a'>
                  <path d='M12.63265,28.58968c-1.61194,-0.03202 -3.15313,0.66116 -4.19868,1.88843c-1.04555,1.22727 -1.48504,2.85902 -1.19731,4.44539l14.92122,89.53434c2.15695,12.92383 13.41108,22.45882 26.51107,22.45882h74.66211c13.09998,0 24.35137,-9.53369 26.50407,-22.45882l14.92822,-89.53434c0.48702,-2.92988 -1.4933,-5.69983 -4.42318,-6.18685c-2.92988,-0.48702 -5.69983,1.4933 -6.18685,4.42318l-5.22103,31.34017h-3.80729c-13.00027,0 -19.55385,-5.65444 -26.65804,-12.75863c-2.0991,-2.09823 -5.50149,-2.09823 -7.60059,0c-7.41304,7.41304 -11.8661,12.75863 -24.86637,12.75863c-13.00027,0 -17.45333,-5.34559 -24.86637,-12.75863c-1.02666,-1.02708 -2.4252,-1.59508 -3.87728,-1.57471c-1.39872,0.02045 -2.73437,0.58534 -3.72331,1.57471c-7.10419,7.10419 -13.65777,12.75863 -26.65804,12.75863h-3.80729l-5.22103,-31.34017c-0.39207,-2.59045 -2.59454,-4.52094 -5.21403,-4.57015zM57.20736,62.40739c6.7155,6.39394 14.74027,12.84261 28.79264,12.84261c14.05237,0 22.07714,-6.44867 28.79264,-12.84261c7.22586,6.53508 16.25707,12.84261 30.33236,12.84261h2.01563l-7.90853,47.44417c-1.30164,7.8152 -7.98119,13.47249 -15.90104,13.47249h-74.66211c-7.91676,0 -14.59281,-5.66072 -15.90104,-13.47249l-7.90853,-47.44417h2.01563c14.07529,0 23.10649,-6.30753 30.33236,-12.84261zM68.08333,96.75c-3.95804,0 -7.16667,3.20863 -7.16667,7.16667c0,3.95804 3.20863,7.16667 7.16667,7.16667c3.95804,0 7.16667,-3.20863 7.16667,-7.16667c0,-3.95804 -3.20863,-7.16667 -7.16667,-7.16667zM103.91667,96.75c-3.95804,0 -7.16667,3.20863 -7.16667,7.16667c0,3.95804 3.20863,7.16667 7.16667,7.16667c3.95804,0 7.16667,-3.20863 7.16667,-7.16667c0,-3.95804 -3.20863,-7.16667 -7.16667,-7.16667z'></path>
                </g>
              </g>
            </svg>
          </Box>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>Laundary</Text>
        </VStack>
        <VStack
          bg='white'
          p={{ base: '2rem', md: '3rem 4rem' }}
          spacing={{ base: '3', md: '5' }}
        >
          <Box
            w={{ base: '3rem', md: '5rem' }}
            h={{ base: '3rem', md: '5rem' }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              viewBox='0 0 172 172'
            >
              <g transform='translate(0.516,0.516) scale(0.994,0.994)'>
                <g
                  fill='none'
                  fill-rule='nonzero'
                  stroke='none'
                  stroke-width='1'
                  stroke-linecap='butt'
                  stroke-linejoin='none'
                  stroke-miterlimit='10'
                  stroke-dasharray=''
                  stroke-dashoffset='0'
                  font-family='none'
                  font-weight='none'
                  font-size='none'
                  text-anchor='none'
                >
                  <g fill='#000000' stroke='#cccccc' stroke-linejoin='round'>
                    <path d='M70.48389,25.46126c0,0 2.84712,10.12012 15.51611,10.12012c12.66899,0 15.51611,-10.12012 15.51611,-10.12012c0.47346,-1.35669 1.47038,-2.46735 2.76824,-3.08406c1.29786,-0.61671 2.7886,-0.68814 4.13947,-0.19833c0,0 10.49451,3.7969 13.47949,4.72412c3.80745,1.18332 12.09412,3.82415 19.24642,11.13493c7.1523,7.31078 12.93359,19.27908 12.93359,37.56901v51.6014c0,8.84188 -7.28312,16.125 -16.125,16.125h-9.1403c-0.91346,8.00293 -7.71357,14.33333 -15.94303,14.33333h-53.75c-8.22947,0 -15.02957,-6.3304 -15.94303,-14.33333h-9.1403c-8.84188,0 -16.125,-7.28312 -16.125,-16.125v-51.6014c0,-18.28993 5.78129,-30.25823 12.93359,-37.56901c7.14869,-7.30709 15.42938,-9.94374 19.23942,-11.12793c2.99813,-0.9344 13.48649,-4.73112 13.48649,-4.73112c0.64781,-0.23356 1.33447,-0.34048 2.02262,-0.31494c2.21408,0.07789 4.1536,1.50613 4.88509,3.59733zM53.28809,37.17009c-3.6638,1.13868 -9.58141,3.09084 -14.76026,8.38444c-5.17884,5.29359 -9.86116,13.94234 -9.86116,30.05241v51.6014c0,3.03329 2.34171,5.375 5.375,5.375h8.95833v-55.54167c-0.04254,-2.96584 2.32523,-5.40565 5.29101,-5.45198c1.45344,-0.02272 2.85412,0.54416 3.88264,1.57136c1.02852,1.0272 1.5972,2.42715 1.57635,3.88062v64.5c0,3.03329 2.34171,5.375 5.375,5.375h21.5v-91.20703l-14.64128,11.2609c-1.62344,1.24718 -3.81435,1.46398 -5.65073,0.55916c-1.83638,-0.90482 -2.99942,-2.77417 -2.99965,-4.82136v-26.95199c-1.40619,0.49278 -2.90203,1.05744 -4.04525,1.41374zM114.66667,62.70833c-0.00024,2.04719 -1.16327,3.91654 -2.99965,4.82136c-1.83638,0.90482 -4.0273,0.68802 -5.65073,-0.55916l-14.64128,-11.2609v91.20703h21.5c3.03329,0 5.375,-2.34171 5.375,-5.375v-64.5c-0.02741,-1.93842 0.99102,-3.74144 2.66532,-4.71865c1.6743,-0.97721 3.74507,-0.97721 5.41937,0c1.6743,0.97721 2.69273,2.78023 2.66532,4.71865v55.54167h8.95833c3.03329,0 5.375,-2.34171 5.375,-5.375v-51.6014c0,-16.11007 -4.68232,-24.75881 -9.86116,-30.05241c-5.17884,-5.2936 -11.09645,-7.24576 -14.76026,-8.38444c-1.14807,-0.35677 -2.63918,-0.92098 -4.04525,-1.41374zM68.08333,51.79036l8.83236,-6.79573c-3.81081,-1.22788 -6.66208,-3.17081 -8.83236,-5.27702zM95.08431,44.99463l8.83236,6.79573v-12.07276c-2.17028,2.10621 -5.02155,4.04914 -8.83236,5.27702z'></path>
                  </g>
                  <path
                    d='M0,172v-172h172v172z'
                    fill='none'
                    stroke='none'
                    stroke-linejoin='miter'
                  ></path>
                  <g fill='#1b4d7a' stroke='none' stroke-linejoin='miter'>
                    <path d='M65.5988,21.86393c-0.68816,-0.02554 -1.37481,0.08138 -2.02262,0.31494c0,0 -10.48836,3.79672 -13.48649,4.73112c-3.81004,1.18419 -12.09073,3.82084 -19.23942,11.12793c-7.1523,7.31078 -12.93359,19.27908 -12.93359,37.56901v51.6014c0,8.84188 7.28312,16.125 16.125,16.125h9.1403c0.91346,8.00293 7.71357,14.33333 15.94303,14.33333h53.75c8.22947,0 15.02957,-6.3304 15.94303,-14.33333h9.1403c8.84188,0 16.125,-7.28312 16.125,-16.125v-51.6014c0,-18.28993 -5.78129,-30.25823 -12.93359,-37.56901c-7.1523,-7.31078 -15.43897,-9.95161 -19.24642,-11.13493c-2.98498,-0.92723 -13.47949,-4.72412 -13.47949,-4.72412c-1.35087,-0.48981 -2.84162,-0.41838 -4.13947,0.19833c-1.29786,0.61671 -2.29478,1.72737 -2.76824,3.08406c0,0 -2.84712,10.12012 -15.51611,10.12012c-12.66899,0 -15.51611,-10.12012 -15.51611,-10.12012c-0.73149,-2.0912 -2.67101,-3.51945 -4.88509,-3.59733zM57.33333,35.75635v26.95199c0.00024,2.04719 1.16327,3.91654 2.99965,4.82136c1.83638,0.90482 4.0273,0.68802 5.65073,-0.55916l14.64128,-11.2609v91.20703h-21.5c-3.03329,0 -5.375,-2.34171 -5.375,-5.375v-64.5c0.02085,-1.45347 -0.54782,-2.85342 -1.57635,-3.88062c-1.02852,-1.0272 -2.4292,-1.59408 -3.88264,-1.57136c-2.96578,0.04633 -5.33356,2.48614 -5.29101,5.45198v55.54167h-8.95833c-3.03329,0 -5.375,-2.34171 -5.375,-5.375v-51.6014c0,-16.11007 4.68232,-24.75881 9.86116,-30.05241c5.17884,-5.2936 11.09645,-7.24576 14.76026,-8.38444c1.14322,-0.3563 2.63906,-0.92096 4.04525,-1.41374zM114.66667,35.75635c1.40607,0.49275 2.89717,1.05697 4.04525,1.41374c3.6638,1.13868 9.58141,3.09084 14.76026,8.38444c5.17884,5.29359 9.86116,13.94234 9.86116,30.05241v51.6014c0,3.03329 -2.34171,5.375 -5.375,5.375h-8.95833v-55.54167c0.02741,-1.93842 -0.99102,-3.74144 -2.66532,-4.71865c-1.6743,-0.97721 -3.74507,-0.97721 -5.41937,0c-1.6743,0.97721 -2.69273,2.78023 -2.66532,4.71865v64.5c0,3.03329 -2.34171,5.375 -5.375,5.375h-21.5v-91.20703l14.64128,11.2609c1.62344,1.24718 3.81435,1.46398 5.65073,0.55916c1.83638,-0.90482 2.99942,-2.77417 2.99965,-4.82136zM68.08333,39.71761c2.17028,2.10621 5.02155,4.04914 8.83236,5.27702l-8.83236,6.79573zM103.91667,39.71761v12.07276l-8.83236,-6.79573c3.81081,-1.22788 6.66208,-3.17081 8.83236,-5.27702z'></path>
                  </g>
                  <path
                    d=''
                    fill='none'
                    stroke='none'
                    stroke-linejoin='miter'
                  ></path>
                  <path
                    d=''
                    fill='none'
                    stroke='none'
                    stroke-linejoin='miter'
                  ></path>
                </g>
              </g>
            </svg>
          </Box>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>Laundary</Text>
        </VStack>
        <VStack
          bg='white'
          p={{ base: '2rem', md: '3rem 4rem' }}
          spacing={{ base: '3', md: '5' }}
        >
          <Box
            w={{ base: '3rem', md: '5rem' }}
            h={{ base: '3rem', md: '5rem' }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              viewBox='0 0 172 172'
            >
              <g
                fill='none'
                fill-rule='nonzero'
                stroke='none'
                stroke-width='1'
                stroke-linecap='butt'
                stroke-linejoin='miter'
                stroke-miterlimit='10'
                stroke-dasharray=''
                stroke-dashoffset='0'
                font-family='none'
                font-weight='none'
                font-size='none'
                text-anchor='none'
              >
                <path d='M0,172v-172h172v172z' fill='none'></path>
                <g fill='#1b4d7a'>
                  <path d='M40.22851,32.25c-12.25761,0 -22.31185,10.05425 -22.31185,22.31185v10.93897c-6.22224,2.24245 -10.75,8.17234 -10.75,15.12419v39.41667c0,8.1506 6.2087,14.90451 14.10238,15.92204l-1.77767,1.77767c-1.40412,1.34815 -1.96972,3.35005 -1.47867,5.23364c0.49105,1.8836 1.96202,3.35457 3.84561,3.84562c1.8836,0.49105 3.88549,-0.07455 5.23364,-1.47867l9.17529,-9.17529h99.46549l9.17529,9.17529c1.34815,1.40412 3.35005,1.96971 5.23364,1.47866c1.88359,-0.49105 3.35456,-1.96202 3.84561,-3.84561c0.49105,-1.88359 -0.07455,-3.88549 -1.47866,-5.23364l-1.77767,-1.77767c7.89367,-1.01752 14.10238,-7.77143 14.10238,-15.92204v-39.41667c0,-6.95184 -4.52776,-12.88174 -10.75,-15.12419v-10.93897c0,-12.2576 -10.05425,-22.31185 -22.31185,-22.31185zM40.22851,43h91.54297c6.44739,0 11.56185,5.11446 11.56185,11.56185v10.93897c-6.22224,2.24245 -10.75,8.17234 -10.75,15.12419v19.70833h-93.16667v-19.70833c0,-6.95184 -4.52776,-12.88174 -10.75,-15.12419v-10.93897c0,-6.44739 5.11446,-11.56185 11.56185,-11.56185zM22.78076,75.29899c0.33983,0.03245 0.68198,0.03245 1.02181,0c2.77601,0.25114 4.8641,2.46902 4.8641,5.32601v25.08333c0.0003,2.96841 2.40659,5.3747 5.375,5.375h103.91667c2.96841,-0.0003 5.3747,-2.40659 5.375,-5.375v-25.08333c0,-2.85698 2.08808,-5.07487 4.8641,-5.32601c0.33983,0.03245 0.68198,0.03245 1.02181,0c2.77602,0.25114 4.8641,2.46902 4.8641,5.32601v39.41667c0,3.03329 -2.34171,5.375 -5.375,5.375h-10.07113c-0.24338,-0.03545 -0.48892,-0.05416 -0.73486,-0.05599c-0.24595,0.00183 -0.49148,0.02054 -0.73486,0.05599h-102.40495c-0.27361,-0.03752 -0.54971,-0.0539 -0.82585,-0.04899c-0.19204,0.00606 -0.38361,0.02242 -0.57389,0.04899h-10.07113c-3.03329,0 -5.375,-2.34171 -5.375,-5.375v-39.41667c0,-2.85698 2.08808,-5.07487 4.8641,-5.32601z'></path>
                </g>
              </g>
            </svg>
          </Box>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>Laundary</Text>
        </VStack>
        <VStack
          bg='white'
          p={{ base: '2rem', md: '3rem 4rem' }}
          spacing={{ base: '3', md: '5' }}
        >
          <Box
            w={{ base: '3rem', md: '5rem' }}
            h={{ base: '3rem', md: '5rem' }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              viewBox='0 0 172 172'
            >
              <g
                fill='none'
                fill-rule='nonzero'
                stroke='none'
                stroke-width='1'
                stroke-linecap='butt'
                stroke-linejoin='miter'
                stroke-miterlimit='10'
                stroke-dasharray=''
                stroke-dashoffset='0'
                font-family='none'
                font-weight='none'
                font-size='none'
                text-anchor='none'
              >
                <path d='M0,172v-172h172v172z' fill='none'></path>
                <g fill='#1b4d7a'>
                  <path d='M51.87435,3.50635c-2.96578,0.04633 -5.33356,2.48614 -5.29101,5.45199v16.125h-12.54167c-10.65378,0 -19.70833,8.64782 -19.70833,19.70833c0,4.91728 0.92495,13.65127 1.82666,21.62598c0.90171,7.97471 1.79866,14.90023 1.79867,14.90023c0.3485,2.67911 2.63133,4.68333 5.33301,4.68213h8.95833v5.375c-0.02741,1.93842 0.99102,3.74144 2.66532,4.71865c1.6743,0.97721 3.74507,0.97721 5.41937,0c1.6743,-0.97721 2.69273,-2.78023 2.66532,-4.71865v-5.375h8.95833c2.46671,-0.00063 4.61644,-1.68001 5.21403,-4.07324l2.22559,-8.90234c0.20667,-0.82482 0.89205,-1.35775 1.73568,-1.35775h18.94547c2.6314,0 4.83433,1.80114 5.26302,4.26221c0.22771,1.30415 0.65788,8.49865 0.65788,11.86279c0,3.36414 -0.42905,10.55035 -0.65788,11.86279c-0.42869,2.46107 -2.63162,4.26221 -5.26302,4.26221h-53.2041c-10.82086,0 -19.70833,8.88748 -19.70833,19.70833v17.91667c0,6.86192 5.67975,12.54167 12.54167,12.54167h7.56559v3.58333c0,1.978 1.60533,3.58333 3.58333,3.58333h10.75c1.978,0 3.58333,-1.60533 3.58333,-3.58333v-3.58333h71.66667v3.58333c0,1.978 1.60533,3.58333 3.58333,3.58333h10.75c1.978,0 3.58333,-1.60533 3.58333,-3.58333v-3.58333h6.76774c6.86192,0 12.54167,-5.67974 12.54167,-12.54167v-8.95833h5.375c6.86192,0 12.54167,-5.67974 12.54167,-12.54167v-14.33333c0,-6.86192 -5.67974,-12.54167 -12.54167,-12.54167h-5.375v-19.71533h5.375c6.86192,0 12.54167,-5.67974 12.54167,-12.54167v-7.15967c0,-6.86192 -5.67974,-12.54167 -12.54167,-12.54167h-6.10986c-1.75519,-9.06771 -9.42121,-16.125 -18.97347,-16.125h-1.79167v-16.125c0.02741,-1.93842 -0.99102,-3.74144 -2.66532,-4.71865c-1.6743,-0.97721 -3.74507,-0.97721 -5.41937,0c-1.6743,0.97721 -2.69273,2.78023 -2.66532,4.71865v16.125h-14.33333v-16.125c0.02741,-1.93842 -0.99102,-3.74144 -2.66532,-4.71865c-1.6743,-0.97721 -3.74507,-0.97721 -5.41937,0c-1.6743,0.97721 -2.69273,2.78023 -2.66532,4.71865v16.125h-14.33333v-16.125c0.02741,-1.93842 -0.99102,-3.74144 -2.66532,-4.71865c-1.6743,-0.97721 -3.74507,-0.97721 -5.41937,0c-1.6743,0.97721 -2.69273,2.78023 -2.66532,4.71865v16.125h-14.33333v-16.125c0.02085,-1.45347 -0.54782,-2.85342 -1.57635,-3.88062c-1.02852,-1.0272 -2.4292,-1.59408 -3.88264,-1.57136zM34.04167,35.83333h17.03483c0.57703,0.09479 1.16565,0.09479 1.74268,0h23.34066c0.57703,0.09479 1.16565,0.09479 1.74268,0h23.34066c0.57703,0.09479 1.16565,0.09479 1.74268,0h23.34066c0.57703,0.09479 1.16565,0.09479 1.74268,0h6.30583c5.01031,0 8.95833,3.94802 8.95833,8.95833v96.75c0,1.05724 -0.73442,1.79167 -1.79167,1.79167h-121.83333c-1.05725,0 -1.79167,-0.73442 -1.79167,-1.79167v-17.91667c0,-5.01031 3.94802,-8.95833 8.95833,-8.95833h53.2041c7.68143,0 14.51058,-5.46329 15.85205,-13.16455c0.63834,-3.66122 0.81885,-9.75026 0.81885,-13.71045c0,-3.96019 -0.17939,-10.0481 -0.81885,-13.71045c-1.34147,-7.70126 -8.17062,-13.16455 -15.85205,-13.16455h-18.94547c-5.72821,0 -10.77224,3.94372 -12.16374,9.49723l-1.21078,4.8361h-19.70133c-0.32494,-2.56944 -0.61092,-4.66912 -1.21777,-10.03613c-0.88996,-7.87079 -1.75667,-17.05481 -1.75667,-20.4222c0,-5.50882 3.78094,-8.95833 8.95833,-8.95833zM154.08333,51.95833h5.375c1.05724,0 1.79167,0.73442 1.79167,1.79167v7.15967c0,1.05724 -0.73442,1.79167 -1.79167,1.79167h-5.375zM154.08333,103.91667h5.375c1.05724,0 1.79167,0.73442 1.79167,1.79167v14.33333c0,1.05724 -0.73442,1.79167 -1.79167,1.79167h-5.375z'></path>
                </g>
              </g>
            </svg>
          </Box>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>Laundary</Text>
        </VStack>
        <VStack
          bg='white'
          p={{ base: '2rem', md: '3rem 4rem' }}
          spacing={{ base: '3', md: '5' }}
        >
          <Box
            w={{ base: '3rem', md: '5rem' }}
            h={{ base: '3rem', md: '5rem' }}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              viewBox='0 0 172 172'
            >
              <g
                fill='none'
                fill-rule='nonzero'
                stroke='none'
                stroke-width='1'
                stroke-linecap='butt'
                stroke-linejoin='miter'
                stroke-miterlimit='10'
                stroke-dasharray=''
                stroke-dashoffset='0'
                font-family='none'
                font-weight='none'
                font-size='none'
                text-anchor='none'
              >
                <path d='M0,172v-172h172v172z' fill='none'></path>
                <g fill='#1b4d7a'>
                  <path d='M62.82031,17.84668c-0.33739,-0.00836 -0.67482,0.01507 -1.00781,0.06999h-2.92545h-22.69678c-10.02926,0 -18.2806,8.24433 -18.2806,18.2736v103.2028c0,10.02927 8.25133,18.2736 18.2806,18.2736h103.1958c10.02926,0 18.2736,-8.24433 18.2736,-18.2736v-103.2028c0,-10.02926 -8.24433,-18.2736 -18.2736,-18.2736h-22.24886c-0.2457,-0.03577 -0.49358,-0.05448 -0.74186,-0.05599c-0.24595,0.00183 -0.49148,0.02054 -0.73486,0.05599h-1.93164c-0.26384,-0.04314 -0.53053,-0.06653 -0.79785,-0.06999c-0.29303,-0.00055 -0.58562,0.02285 -0.87484,0.06999h-48.50797c-0.24075,-0.03982 -0.48394,-0.06321 -0.72786,-0.06999zM36.19027,28.66667h9.95215l-8.74137,8.74137c-1.81136,1.81167 -2.09255,4.64987 -0.67187,6.78174l5.25602,7.88053l-5.35401,8.67839c-1.1397,1.84454 -1.05966,4.19321 0.20296,5.95589l41.99219,58.64209v21.56999h-42.63607c-4.21806,0 -7.5306,-3.30554 -7.5306,-7.5236v-103.2028c0,-4.21806 3.31253,-7.5236 7.5306,-7.5236zM69.69303,28.66667h7.96452l7.16667,10.62402l-6.30583,22.64778zM97.91178,28.66667h7.5026l-10.42106,31.24919l-4.62614,-20.06527zM129.43392,28.66667h9.95215c4.21806,0 7.5236,3.30554 7.5236,7.5236v103.2028c0,4.21806 -3.30554,7.5236 -7.5236,7.5236h-49.80973v-21.36003l48.94189,-59.43294c1.50672,-1.82703 1.64031,-4.42486 0.32894,-6.39681l-5.17904,-7.76856l5.17904,-7.76856c1.42067,-2.13187 1.13949,-4.97007 -0.67187,-6.78174zM116.1154,30.55632l11.33789,11.33789l-4.72412,7.08268c-1.20343,1.80547 -1.20343,4.15742 0,5.96289l4.95508,7.43262l-37.1001,45.05062l-0.04199,-0.16797zM59.14599,30.87126l20.18425,76.04785l-0.15397,0.45491l-31.52214,-44.02181l5.29102,-8.57341c1.10362,-1.78704 1.06535,-4.05317 -0.09798,-5.80192l-4.72412,-7.08268zM107.493,125.41667c-3.95804,0 -7.16667,3.20863 -7.16667,7.16667c0,3.95804 3.20863,7.16667 7.16667,7.16667c3.95804,0 7.16667,-3.20863 7.16667,-7.16667c0,-3.95804 -3.20863,-7.16667 -7.16667,-7.16667z'></path>
                </g>
              </g>
            </svg>
          </Box>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>Laundary</Text>
        </VStack>
      </Flex>
    </MotionBox>
  );
};

export default ServiceWrap;
