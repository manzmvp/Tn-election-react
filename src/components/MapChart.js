import React, { memo, useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography
} from "react-simple-maps";
import map from '../map/Tn.json';
import Tables from './Table'

const geoUrl = map;

const MapChart = ({ setTooltipContent }) => {
  const[district, setDistrict] = useState("Thiruvallur");
  return (
    <>
      <ComposableMap data-tip="" 
      projection="geoMercator"
      projectionConfig={{
        scale: 2900,
        center: [78, 9]
      }}
      >
        
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map(geo => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={
                    //code for displaying table
                    () => {
                      const { NAME_2 } = geo.properties;
                      setDistrict(NAME_2);
                    }
                  }
                  onMouseEnter={() => {
                    const { NAME_1, NAME_2 } = geo.properties;
                    setTooltipContent(`${NAME_1} — ${NAME_2}`);
                  }}
                  onMouseLeave={() => {
                    setTooltipContent("");
                  }}
                  style={{
                    default: {
                      fill: "grey",
                      outline: "white",
                      
                    },
                    hover: {
                      fill: "#F53",
                      outline: "none"
                    },
                    pressed: {
                      fill: "#E42",
                      outline: "none"
                    },
                  }}
                />
              ))
            }
          </Geographies>

      </ComposableMap>
      <Tables district={ district }/>
    </>
  );
};

export default memo(MapChart);
