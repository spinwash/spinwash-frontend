import { Heading, HStack, Text, VStack, Wrap } from '@chakra-ui/react';

const UserProfile = ({ data }) => {
  return (
    <>
      <VStack alignItems={'start'} gap='2rem'>
        <Heading fontSize={{ base: '2xl', md: '4xl' }} fontWeight={'500'}>
          Account
        </Heading>

        <VStack px='1rem'>
          <Wrap spacing={{ base: '2rem', md: '3rem' }} mx='auto'>
            <VStack
              alignItems='start'
              w={{ base: '80vw', md: '40vw', xl: '34rem' }}
            >
              <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight={500}>
                Name
              </Heading>
              <Text fontWeight={400}>{data?.name}</Text>
            </VStack>
            <VStack
              alignItems='start'
              w={{ base: '80vw', md: '40vw', xl: '34rem' }}
            >
              <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight={500}>
                Email
              </Heading>
              <Text fontWeight={300}>{data?.email}</Text>
            </VStack>
            <VStack
              alignItems='start'
              w={{ base: '80vw', md: '40vw', xl: '34rem' }}
            >
              <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight={500}>
                Phone Number
              </Heading>
              <Text fontWeight={300}>{data?.phoneNumber}</Text>
            </VStack>
            <VStack
              alignItems='start'
              w={{ base: '80vw', md: '40vw', xl: '34rem' }}
            >
              <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight={500}>
                Address
              </Heading>
              <Text fontWeight={300}>{data?.address}</Text>
            </VStack>
          </Wrap>
        </VStack>
      </VStack>
      <VStack alignItems={'start'} gap='2rem'>
        <Heading fontSize={{ base: '2xl', md: '4xl' }} fontWeight={'500'}>
          Preferences
        </Heading>
        <VStack px='1rem'>
          <Wrap spacing={{ base: '2rem', md: '3rem' }}>
            <VStack
              alignItems='start'
              w={{ base: '80vw', md: '40vw', xl: '34rem' }}
            >
              <Heading
                my='0.5rem'
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight={500}
              >
                Shirt Folding Preferences
              </Heading>
              <Text fontWeight={400} px='1rem'>
                {data?.shirtFoldingPreference}
              </Text>
            </VStack>
            <VStack
              alignItems='start'
              w={{ base: '80vw', md: '40vw', xl: '34rem' }}
            >
              <Heading
                my='0.5rem'
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight={500}
              >
                Shirt Washing Preferences
              </Heading>
              <Text fontWeight={400} px='1rem'>
                {data?.shirtWashingPreference}
              </Text>
            </VStack>
            <VStack
              alignItems='start'
              w={{ base: '80vw', md: '40vw', xl: '34rem' }}
            >
              <Heading
                my='0.5rem'
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight={500}
              >
                Bedding Preferences
              </Heading>
              <Text fontWeight={400} px='1rem'>
                {data?.beddingPreference}
              </Text>
            </VStack>
            <VStack
              alignItems='start'
              w={{ base: '80vw', md: '40vw', xl: '34rem' }}
            >
              <Heading
                my='0.5rem'
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight={500}
              >
                Any Personal Cleaning, Pressing & Packaging, Preferences
              </Heading>
              <HStack pl='1rem'>
                <Text fontWeight={400} px='1rem'>
                  {data?.preferences}
                </Text>
              </HStack>
            </VStack>
            {!data?.referralCodeUsed && (
              <VStack
                alignItems='start'
                w={{ base: '80vw', md: '40vw', xl: '34rem' }}
              >
                <Heading
                  pb='0.5rem'
                  fontSize={{ base: 'xl', md: '2xl' }}
                  fontWeight={500}
                >
                  Referral Code{' '}
                  <Text fontSize='md' fontWeight={'300'}>
                    ( Refer a friend and get £10 off )
                  </Text>
                </Heading>
                <Text
                  border={'2px dashed #1B4D7A'}
                  rounded='md'
                  p='1rem 2rem'
                  my='1rem'
                  bg='spinwash.100'
                  fontWeight={400}
                >
                  {data?._id?.slice(0, data?._id?.length / 2)}
                </Text>
              </VStack>
            )}
          </Wrap>
        </VStack>
      </VStack>
    </>
  );
};

export { UserProfile };
