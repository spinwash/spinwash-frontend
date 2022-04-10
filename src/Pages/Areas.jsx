import { Container } from '@chakra-ui/react';
import ExtraServices from '../Components/Home/ExtraServices';
import AreaHero from '../Components/Area/AreaHero';
import ContactUs from '../Components/Area/ContactUs';
import Map from '../Components/Area/Map';

const Areas = () => {
  return (
    <Container maxW='full' p='0' px='2rem'>
      <AreaHero />
      <ContactUs />
      <Map />
    </Container>
  );
};

export { Areas };
