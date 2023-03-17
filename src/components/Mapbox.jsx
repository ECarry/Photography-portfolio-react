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
        center: [118.079986, 24.439984],
        zoom: 8,
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

      map.on('load', () => {
        setMap(map);
      });
    }   
  }, [map]);

  
  useEffect(() => {
    if (map && markers.length > 0) {
      // 添加标记
      markers.forEach((marker) => {
        const { coordinates, thumbnail } = marker;

        const imgHtml = `
          <div>
            <h1>廈門</h1>
            <p>思明區</p>
            <img src="${thumbnail}" />
          </div>
        `

        const popup = new mapboxgl.Popup().setHTML(imgHtml);
        const el = document.createElement('div');
        el.className = 'marker';
        el.style.backgroundImage = 'url(https://cdn-icons-png.flaticon.com/512/763/763755.png)';
        el.style.width = '25px';
        el.style.height = '25px';
        el.style.backgroundSize = '100%';

        new mapboxgl.Marker(el)
          .setLngLat(coordinates)
          .setPopup(popup)
          .addTo(map);

        // 监听地图缩放事件
        // map.on('zoom', () => {
        //   const zoom = map.getZoom();
        //   if (zoom < 30) {
        //     markerObj.getElement().style.display = 'none';
        //   } else {
        //     markerObj.getElement().style.display = 'block';
        //   }
        // });
      });
    }  
  }, [map, markers])

  return <div id='map' style={{ width: '100%', height: '100%' }} />;
};

export default Mapbox;
