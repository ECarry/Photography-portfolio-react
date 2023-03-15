import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Mapbox = ({ markers }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!map) {
      mapboxgl.accessToken = import.meta.env.VITE_APP_MAPBOX_ACCESS_TOKEN;
      const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/ecarry/cldmhu6tr000001n33ujbxf7j',
        center: [118, 24],
        zoom: 1,
        //antialias: true, //抗锯齿
        projection: 'mercator',
      });

    // 添加地图导航小控件
    const nav = new mapboxgl.NavigationControl({
      showCompass: true, // 是否显示指南针
      showZoom: true, // 是否显示缩放控件
      visualizePitch: true // 是否可视化俯仰角度
    });

    map.addControl(nav, 'bottom-right'); // 将导航控件添加到地图并设置位置

    setMap(map);
    }   
  }, [map]);

  
  useEffect(() => {
    if (map && markers.length > 0) {
      // 添加标记
      markers.forEach((marker) => {
        const { coordinates, thumbnail } = marker;
        //const bounds = new mapboxgl.LngLatBounds();
        const el = document.createElement('div');
        el.className = 'marker';
        const popup = new mapboxgl.Popup().setHTML(`<img src="${thumbnail}" />`);
        // el.style.backgroundImage = 'url(../assets/paw.svg)';
        // el.style.width = '50px';
        // el.style.height = '50px';

        const markerObj = new mapboxgl.Marker()
          .setLngLat(coordinates)
          .setPopup(popup)
          .addTo(map);
        //bounds.extend(markerObj.getLngLat());
      });
      //map.fitBounds(bounds, { padding: 50 });
    }  
  }, [map, markers])

  return <div id='map' style={{ width: '100%', height: '100%' }} />;
};

export default Mapbox;
