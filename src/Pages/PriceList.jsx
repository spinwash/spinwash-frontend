import { Container } from '@chakra-ui/react';
import ExtraServices from '../Components/Home/ExtraServices';
import PriceListHero from '../Components/Price List/PriceListHero';

const PriceList = () => {
  return (
    <Container maxW='full' p='0'>
      <PriceListHero />
      <ExtraServices />
    </Container>
  );
};

export { PriceList };
