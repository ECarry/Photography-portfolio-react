import React, { useState} from "react";
import Mapbox from './Mapbox';

const MapPop = ({props}) => {
  const [ showPop, setShowPop ] = useState(false); // 是否显示 Pop
  const [ coordinates, setCoordinates ] = useState([0, 0]); // 坐标位置

  setShowPop(props.isShowPop)
  setCoordinates(props.coordinates)

  return (
    <>
      { showPop && <div>
        <Mapbox markers={ '' } />
      </div> }
    </>
  )
};

export default MapPop;
