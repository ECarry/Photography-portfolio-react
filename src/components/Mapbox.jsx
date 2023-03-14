import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ({ markers }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_APP_MAPBOX_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/ecarry/cldmhu6tr000001n33ujbxf7j',
      center: [118, 24],
      zoom: 1,
      //antialias: true, //抗锯齿
      projection: 'mercator',
    });

    console.log('markers', markers)

    // 添加标记
    markers.forEach((marker) => {
      const { id, coordinates } = marker;
      // const el = document.createElement('div');
      // el.className = 'marker';
      // el.style.backgroundImage = 'url(../assets/paw.svg)';
      // el.style.width = '50px';
      // el.style.height = '50px';

      new mapboxgl.Marker()
        .setLngLat(coordinates)
        //.setPopup(new mapboxgl.Popup({ offset: 25 }).setHTML(title))
        .addTo(map);
    });

    // 添加地图导航小控件
    const nav = new mapboxgl.NavigationControl({
      showCompass: true, // 是否显示指南针
      showZoom: true, // 是否显示缩放控件
      visualizePitch: true // 是否可视化俯仰角度
    });

    map.addControl(nav, 'bottom-right'); // 将导航控件添加到地图并设置位置

    return () => map.remove();
  }, []);

  return <div ref={mapContainer} style={{ width: '100%', height: '100%' }} />;
};

export default Map;
