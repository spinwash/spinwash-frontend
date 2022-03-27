import { Container } from '@chakra-ui/react';
import ExtraServices from '../Components/Home/ExtraServices';
import AreaHero from '../Components/Area/AreaHero';

const Areas = () => {
  return (
    <Container maxW='full' p='0'>
      <AreaHero />
      <ExtraServices />
    </Container>
  );
};

export { Areas };
