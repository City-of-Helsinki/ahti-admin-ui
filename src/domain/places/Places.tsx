import { useQuery } from '@apollo/react-hooks';
import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';

import PLACES_QUERY from './placesQuery';
import { PLACES } from './__generated__/PLACES';

const PlacesContainer: React.FC = () => {
  const { loading, error, data } = useQuery<PLACES>(PLACES_QUERY, { variables: { limit: 10 } });

  const [viewport, setViewport] = useState({
    width: 1000,
    height: 700,
    latitude: 60.1699,
    longitude: 24.9384,
    zoom: 12
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading places</p>;

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={vp => setViewport(vp)}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_API_ACCESS_TOKEN}
    >
      {data &&
        data.places &&
        data.places.map((place: any) => (
          <Marker longitude={place.location.lon} latitude={place.location.lat} key={place.id}>
            <div>{place.name.fi}</div>
          </Marker>
        ))}
    </ReactMapGL>
  );
};

export default PlacesContainer;
