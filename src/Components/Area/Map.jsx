import { Box, Container } from '@chakra-ui/react';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  Polygon,
} from '@react-google-maps/api';
import { useCallback, useState } from 'react';

const containerStyle = {
  width: 'full',
  height: '24rem',
};

const position = { lat: 18.466, lng: -66.118 };

const options = {
  fillColor: '#E1F6FF',
  fillOpacity: 0.3,
  strokeColor: '#1B4D7A',
  strokeOpacity: 1,
  strokeWeight: 1,
  clickable: false,
  draggable: false,
  editable: false,
  geodesic: false,
  zIndex: 1,
};

const paths = [
  { lat: 25.774, lng: -80.19 },
  { lat: 18.466, lng: -66.118 },
  { lat: 32.321, lng: -64.757 },
  { lat: 35.774, lng: -120.19 },
  { lat: 25.774, lng: -100.19 },
];

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'ChIJF27lkrQBdkgR618XtZrh7L0',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_PLACES_KEY,
  });

  const [map, setMap] = useState(null);

  const onLoad = (polygon) => {
    console.log('polygon: ', polygon);
  };

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <Container maxW='full' p={{ base: '1rem', sm: '2rem' }}>
      <Box
        mx={'auto'}
        w='full'
        maxW={'7xl'}
        minH={{ base: '20rem', md: '24rem' }}
        h='full'
        bg='gray.100'
        mt={'2rem'}
      >
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={position}
            zoom={14}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            <Polygon onLoad={onLoad} paths={paths} options={options} />
          </GoogleMap>
        ) : (
          ''
        )}
      </Box>
    </Container>
  );
};

export default Map;
