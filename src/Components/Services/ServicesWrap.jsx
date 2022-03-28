import { Box, Flex, VStack, Text } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

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
        <Link to={'/service/dryCleaning'}>
          <VStack
            _hover={{
              shadow: '2xl',
              transition: 'all 0.5s',
            }}
            transition='all 0.5s'
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
            <Text fontSize={{ base: 'xs', md: 'sm' }}>Dry Cleaning</Text>
          </VStack>
        </Link>
        <Link to={'service/bedding'}>
          <VStack
            _hover={{
              shadow: '2xl',
              transition: 'all 0.5s',
            }}
            transition='all 0.5s'
            bg='white'
            p={{ base: '2rem', md: '3rem 4rem' }}
            spacing={{ base: '3', md: '5' }}
          >
            <Box
              w={{ base: '3rem', md: '5rem' }}
              h={{ base: '3rem', md: '5rem' }}
              p='0.2rem'
            >
              <svg
                viewBox='0 0 78 68'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M55.625 1C58.6399 0.999539 61.5421 2.13716 63.743 4.18212C65.9438 6.22708 67.2785 9.02625 67.4762 12.0118L67.5 12.7849V24.8056C70.0452 25.3222 72.3496 26.6525 74.0603 28.5929C75.771 30.5332 76.7936 32.9766 76.9715 35.5487L77 36.3548V64.6387C77.0011 65.2277 76.7799 65.7957 76.3801 66.231C75.9802 66.6662 75.4307 66.9371 74.8396 66.9904C74.2485 67.0436 73.6588 66.8752 73.1865 66.5185C72.7143 66.1618 72.3937 65.6425 72.288 65.0629L72.25 64.6387V52.8537H5.75V64.6387C5.75109 65.2277 5.52994 65.7957 5.13009 66.231C4.73023 66.6662 4.18066 66.9371 3.5896 66.9904C2.99853 67.0436 2.4088 66.8752 1.93655 66.5185C1.46429 66.1618 1.14374 65.6425 1.038 65.0629L1 64.6387V36.3548C0.999442 33.638 1.94474 31.0045 3.6759 28.8999C5.40706 26.7953 7.81776 25.3489 10.5 24.8056V12.7849C10.4995 9.79289 11.6459 6.91269 13.7064 4.72854C15.767 2.5444 18.5876 1.21985 21.596 1.02357L22.375 1H55.625ZM65.125 29.2839H12.875C11.1045 29.2838 9.39751 29.9379 8.08649 31.1188C6.77547 32.2996 5.95439 33.9225 5.78325 35.6713L5.75 36.3548V48.1398H72.25V36.3548C72.25 34.5978 71.5909 32.9037 70.4011 31.6026C69.2112 30.3015 67.5759 29.4867 65.8137 29.3169L65.125 29.2839ZM55.625 5.71398H22.375C20.6038 5.71406 18.8961 6.36884 17.585 7.55063C16.2739 8.73242 15.4533 10.3565 15.2832 12.1061L15.25 12.7849V24.5699H20V22.2129C20 21.5878 20.2502 20.9883 20.6956 20.5462C21.141 20.1042 21.7451 19.8559 22.375 19.8559H34.25C34.8799 19.8559 35.484 20.1042 35.9294 20.5462C36.3748 20.9883 36.625 21.5878 36.625 22.2129V24.5699H41.375V22.2129C41.375 21.5878 41.6252 20.9883 42.0706 20.5462C42.516 20.1042 43.1201 19.8559 43.75 19.8559H55.625C56.2549 19.8559 56.859 20.1042 57.3044 20.5462C57.7498 20.9883 58 21.5878 58 22.2129V24.5699H62.75V12.7849C62.75 11.0279 62.0909 9.33382 60.9011 8.03274C59.7112 6.73167 58.0759 5.91682 56.3137 5.74697L55.625 5.71398Z'
                  fill='#1B4D7A'
                  stroke='#1B4D7A'
                />
              </svg>
            </Box>
            <Text fontSize={{ base: 'xs', md: 'sm' }}>Bedding</Text>
          </VStack>
        </Link>
        <Link to={'service/household'}>
          <VStack
            _hover={{
              shadow: '2xl',
              transition: 'all 0.5s',
            }}
            transition='all 0.5s'
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

            <Text fontSize={{ base: 'xs', md: 'sm' }}>Household</Text>
          </VStack>
        </Link>
        <Link to={'service/shirts'}>
          <VStack
            _hover={{
              shadow: '2xl',
              transition: 'all 0.5s',
            }}
            transition='all 0.5s'
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
            <Text fontSize={{ base: 'xs', md: 'sm' }}>Shirts</Text>
          </VStack>
        </Link>
        <Link to={'service/laundry'}>
          <VStack
            _hover={{
              shadow: '2xl',
              transition: 'all 0.5s',
            }}
            transition='all 0.5s'
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
            <Text fontSize={{ base: 'xs', md: 'sm' }}>Laundry</Text>
          </VStack>
        </Link>
        <Link to={'service/ironing'}>
          <VStack
            _hover={{
              shadow: '2xl',
              transition: 'all 0.5s',
            }}
            transition='all 0.5s'
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
            <Text fontSize={{ base: 'xs', md: 'sm' }}>Ironing</Text>
          </VStack>
        </Link>
        <Link to={'service/curtains'}>
          <VStack
            _hover={{
              shadow: '2xl',
              transition: 'all 0.5s',
            }}
            transition='all 0.5s'
            bg='white'
            p={{ base: '2rem', md: '3rem 4rem' }}
            spacing={{ base: '3', md: '5' }}
          >
            <Box
              w={{ base: '3rem', md: '5rem' }}
              h={{ base: '3rem', md: '5rem' }}
              p='0.2rem'
            >
              <svg
                viewBox='0 0 67 67'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M33.1828 13.6484C32.5832 22.4436 25.547 40.7937 2.19954 43.8321M2.19954 43.8321V4.6532C1.93301 3.72037 1.99964 1.89469 4.39835 2.0546C6.79706 2.21452 44.0437 2.12123 62.3671 2.0546C62.9002 1.85471 63.9663 2.09458 63.9663 4.6532C63.9663 7.21183 63.9663 43.9653 63.9663 62.0223C64.0995 62.8218 64.0063 64.421 62.567 64.421C61.1278 64.421 22.7885 64.421 3.79869 64.421C3.26564 64.5542 2.19954 64.461 2.19954 63.0217C2.19954 61.5825 2.19954 49.629 2.19954 43.8321Z'
                  stroke='#1B4D7A'
                  stroke-width='4'
                />
                <path
                  d='M14.1938 40.8337C18.1251 44.6317 24.3484 54.6263 17.7919 64.2211'
                  stroke='#1B4D7A'
                  stroke-width='4'
                />
                <path
                  d='M33.1836 13.8481C33.9832 22.5768 41.2592 40.8336 63.967 44.0319'
                  stroke='#1B4D7A'
                  stroke-width='4'
                />
                <path
                  d='M51.7734 40.4341C47.7755 44.2987 41.4589 54.5065 48.1753 64.4212'
                  stroke='#1B4D7A'
                  stroke-width='4'
                />
                <path
                  d='M2 13.2485H63.5668'
                  stroke='#1B4D7A'
                  stroke-width='4'
                />
              </svg>
            </Box>
            <Text fontSize={{ base: 'xs', md: 'sm' }}>Curtains</Text>
          </VStack>
        </Link>
        <Link to={'/service/alterations'}>
          <VStack
            _hover={{
              shadow: '2xl',
              transition: 'all 0.5s',
            }}
            transition='all 0.5s'
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

            <Text fontSize={{ base: 'xs', md: 'sm' }}>Alterations</Text>
          </VStack>
        </Link>
      </Flex>
    </MotionBox>
  );
};

export default ServiceWrap;
