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

const position = { lat: 51.379103, lng: -0.01553 };

const options = {
  fillColor: '#E1F6FF',
  fillOpacity: 0.1,
  strokeColor: '#1B4D7A',
  strokeOpacity: 1,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  geodesic: false,
  zIndex: 1,
};

const paths = [
  { lat: 51.283381, lng: -0.202692 },
  { lat: 51.278531, lng: -0.202612 },
  { lat: 51.27174, lng: -0.193241 },
  { lat: 51.271704, lng: -0.193144 },
  { lat: 51.271364, lng: -0.190483 },
  { lat: 51.260977, lng: -0.083234 },
  { lat: 51.265675, lng: -0.037068 },
  { lat: 51.272873, lng: -0.006562 },
  { lat: 51.322318, lng: 0.121994 },
  { lat: 51.359907, lng: 0.17081 },
  { lat: 51.361587, lng: 0.170725 },
  { lat: 51.369027, lng: 0.168403 },
  { lat: 51.409697, lng: 0.14263 },
  { lat: 51.466872, lng: 0.084074 },
  { lat: 51.470803, lng: 0.060303 },
  { lat: 51.454983, lng: -0.088932 },
  { lat: 51.453154, lng: -0.092358 },
  { lat: 51.444321, lng: -0.104451 },
  { lat: 51.394307, lng: -0.144516 },
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
            zoom={10.5}
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
