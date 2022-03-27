import { Container } from '@chakra-ui/react';
import AboutHero from '../Components/About/AboutHero';
import ExtraServices from '../Components/Home/ExtraServices';

const About = () => {
  return (
    <Container maxW='full' p={['1rem', '3rem', '0rem']}>
      <AboutHero />
      <ExtraServices />
    </Container>
  );
};

export { About };
