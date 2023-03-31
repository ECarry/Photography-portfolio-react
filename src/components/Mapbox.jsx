import React, { useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const accessToken = import.meta.env.VITE_APP_MAPBOX_ACCESS_TOKEN;

const Mapbox = ({ markers }) => {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) {
      map.remove(); // 清空地图容器元素
      setMap(null);
    }

    if (!map) {
      mapboxgl.accessToken = accessToken
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

      // 清除地图对象
      return () => map.remove();
    }   
  }, []);

  
  useEffect(() => {
    if (map && markers.length > 0) {
      // 添加标记
      markers.forEach((marker) => {
        const { coordinates, thumbnail, timestamp, altitude, aperture, shutter_speed, iso } = marker;

        const imgHtml = `
          <div>
            <h1>${timestamp}</h1>
            <div style="display: flex; justify-content: space-between;">
              <span>${shutter_speed} 秒 (f/ ${aperture}),  ISO ${iso}</span>
              <span>高度 ${altitude ? altitude : '0'}m</span>
            </div>
            <img src="${thumbnail}"/>
          </div>
        `

        const popup = new mapboxgl.Popup({closeButton: false})
          .setHTML(imgHtml)
          .setMaxWidth("480px")

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
