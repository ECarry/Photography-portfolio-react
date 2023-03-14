import React, { useEffect, useState } from 'react';
import Mapbox from '../components/Mapbox';
import axios from 'axios'



const Map = () => {
  const [ markers, setMarkers ]= useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.ecarry.cc/api/photos/")
      .then((response) => {
        const data = response.data;
        const markers = data.map((item) => {
          const { id, lat, lon } = item;
          return {
            id,
            coordinates: [lon, lat],
          };
        });
        setMarkers(markers);
        setDataLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <section className='section fixed'>
    <div className='w-full h-full'>
      {dataLoaded ? (
        <Mapbox markers={markers} />
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  </section>;
};

export default Map;
