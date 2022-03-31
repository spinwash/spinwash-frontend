import { Container } from '@chakra-ui/react';
import ExtraServices from '../Components/Home/ExtraServices';
import AreaHero from '../Components/Area/AreaHero';
import ContactUs from '../Components/Area/ContactUs';

const Areas = () => {
  return (
    <Container maxW='full' p='0' px='2rem'>
      <AreaHero />
      <ContactUs />
    </Container>
  );
};

export { Areas };
