// import React, { useState } from "react";
// import DatamapsIndia from "react-datamaps-india";

// const IndiaMap = () => {
//     const [zoom, setZoom] = useState(1);

//   const handleZoomIn = () => {
//     console.log(zoom,'zoom')
//     setZoom(zoom + 0.1);
//   };

//   const handleZoomOut = () => {
//     setZoom(zoom - 0.1);

//   };
//   const handleButtonClick = () => {
//     console.log("Button clicked!",DatamapsIndia); // Display a message in the console
//   };
//   return (
//     <>
//         <DatamapsIndia
//         infoWindowPosition={{x: 2, y:2}}
//         regionData={{
//             Maharashtra: {
//             value: 10
//             },
//             Rajasthan: {
//             value: 1000
//             },
//             Gujarat: {
//             value: 800
//             },
//             Karnataka: {
//             value: 700
//             },
//             TamilNadu: {
//             value: 190
//             },
//             Kerala: {
//             value: 890
//             }
//         }}
//         zoom={0.6}
//         width={800} // Adjust the map width as needed
//         height={400}
//         hoverComponent={({ value }) => {
//             console.log(value)
//             return (
//             <div>
//                 <h3>{value.name}</h3>
//                 <div>{value.value} tenders</div>
//             </div>
//             );
//         }}
//         mapLayout={{
//             title: false,
//             legendTitle: false,
//             startColor: "#4EC3B9",
//             endColor: "#1B776F",
//             hoverTitle: "Count",
//             noDataColor: "#f5f5f5",
//             borderColor: "#8D8D8D",
//             hoverBorderColor: "#8D8D8D",
//             hoverColor: "green",
//             height: 50,
//             weight: 30
//         }}
//         />
//         <div style={{position: "relative"}}>
//         <button onClick={handleZoomIn}>Zoom In (+)</button>
//         <button onClick={handleZoomOut}>Zoom Out (-)</button>
//         <button onClick={handleButtonClick}>Click Me</button>
//       </div>
//     </>
//   );
// };

// import React, { useState } from "react";
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   ZoomableGroup
// } from "react-simple-maps";

// import geoUrl from './india_state.geojson';

// const IndiaMap = () => {
//   const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

//   function handleZoomIn() {
//     if (position.zoom >= 4) return;
//     setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
//   }

//   function handleZoomOut() {
//     if (position.zoom <= 1) return;
//     setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
//   }

//   function handleMoveEnd(position) {
//     setPosition(position);
//   }

//   return (
//     <div>
//       <ComposableMap>
//         <ZoomableGroup
//           zoom={position.zoom}
//           center={position.coordinates}
//           onMoveEnd={handleMoveEnd}
//         >
//           <Geographies geography={geoUrl}>
//             {({ geographies }) =>
//               geographies.map((geo) => (
//                 <Geography key={geo.rsmKey} geography={geo} />
//               ))
//             }
//           </Geographies>
//         </ZoomableGroup>
//       </ComposableMap>
//       <div className="controls">
//         <button onClick={handleZoomIn}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="3"
//           >
//             <line x1="12" y1="5" x2="12" y2="19" />
//             <line x1="5" y1="12" x2="19" y2="12" />
//           </svg>
//         </button>
//         <button onClick={handleZoomOut}>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="3"
//           >
//             <line x1="5" y1="12" x2="19" y2="12" />
//           </svg>
//         </button>
//       </div>
//     </div>
//   );
// };

// import React, { useState } from 'react';
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   ZoomableGroup,
// } from 'react-simple-maps';
// import { Tooltip } from 'react-tooltip'; // Import Tooltip from react-tooltip
// import geoJSONData from './india.json';


// const IndiaMap = () => {
//   const [zoom, setZoom] = useState(5);
//   const [tooltipContent, setTooltipContent] = useState('');

//   // Function to handle zoom in and zoom out
//   const handleZoomIn = () => {
//     setZoom(zoom + 1);
//   };

//   const handleZoomOut = () => {
//     if (zoom > 1) {
//       setZoom(zoom - 1);
//     }
//   };
//   console.log(geoJSONData)

//   // Function to render tooltips with condition
//   const renderTooltip = (geoJSONData) => {
//     console.log(geoJSONData.properties)
//     const { st_nm, value } = geoJSONData.properties; // Adjust property names as needed

//     // Define a condition based on the state name
//     const showTooltip = st_nm === 'Punjab'; // Replace 'YourCondition' with your desired state name

//     return showTooltip ? (
//       <Tooltip>
//         <strong>{st_nm}</strong>
//         <br />
//         Value: {value}
//       </Tooltip>
//     ) : null; // Return null to hide the tooltip when the condition is not met
//   };

//   return (
//     <div style={{ width: '100%', height: '500px' }}>
//       {/* Zoom buttons */}
//       <button onClick={handleZoomIn}>Zoom In (+)</button>
//       <button onClick={handleZoomOut}>Zoom Out (-)</button>

//       {/* Map */}
//       <ComposableMap data-tip="" projection="geoMercator">
//         <ZoomableGroup zoom={zoom}>
//           <Geographies geography={geoJSONData}
//           onMouseEnter={(e) => {
//             console.log(e, 'data');
//             setTooltipContent(geoJSONData.properties);
//           }}
//           onMouseLeave={() => {
//             setTooltipContent('');
//           }}
//           style={{
//             default: {
//               fill: '#ECEFF1',
//               outline: 'none',
//             },
//             hover: {
//               fill: '#2196F3',
//               outline: 'none',
//             },
//             pressed: {
//               fill: '#FF5722',
//               outline: 'none',
//             },}}
//           >
//             {({ geographies }) =>
//               geographies.map((geo) => (
//                 <Geography
//                   key={geo.rsmKey}
//                   geography={geo}
//                   onMouseEnter={() => {
//                     Tooltip.show(); // Show tooltip on hover
//                   }}
//                   onMouseLeave={() => {
//                     Tooltip.hide(); // Hide tooltip on mouse leave
//                   }}
//                   style={{
//                     default: {
//                       fill: '#ECEFF1',
//                       outline: 'none',
//                     },
//                     hover: {
//                       fill: '#2196F3',
//                       outline: 'none',
//                     },
//                     pressed: {
//                       fill: '#FF5722',
//                       outline: 'none',
//                     },
//                   }}
//                 >
//                   {renderTooltip(geo)}
//                 </Geography>
//               ))
//             }
//           </Geographies>
//         </ZoomableGroup>
//       </ComposableMap>

//       {/* Tooltip */}
//       {tooltipContent && (
//         <div className="tooltip">
//           <strong>{tooltipContent}</strong>
//           {/* Add other tooltip content here */}
//         </div>
//       )}
//     </div>
//   );
// };

// import React, { useState } from 'react';
// import {
//   ComposableMap,
//   Geographies,
//   Geography,
//   ZoomableGroup,
// } from 'react-simple-maps';
// import geoJSONData from './india.json';

// const IndiaMap = () => {
//   const [zoom, setZoom] = useState(7);
//   const [tooltipContent, setTooltipContent] = useState(null);

//   // Function to handle zoom in and zoom out
//   const handleZoomIn = () => {
//     setZoom(zoom + 1);
//   };

//   const handleZoomOut = () => {
//     if (zoom > 1) {
//       setZoom(zoom - 1);
//     }
//   };

//   return (
//     <div style={{ width: '100%', height: '300px' }}>
//       {/* Zoom buttons */}
//       <button onClick={handleZoomIn}>Zoom In (+)</button>
//       <button onClick={handleZoomOut}>Zoom Out (-)</button>

//       {/* Map */}
//       <ComposableMap data-tip="" projection="geoMercator">
//         <ZoomableGroup zoom={zoom}>
//           <Geographies geography={geoJSONData}>
//             {({ geographies }) =>
//               geographies.map((geo) => (
//                 <Geography
//                   key={geo.rsmKey}
//                   geography={geo}
//                   onMouseEnter={() => {
//                     console.log(geo.properties.st_nm)
//                     setTooltipContent(geo.properties.st_nm);
//                   }}
//                   onMouseLeave={() => {
//                     setTooltipContent(null);
//                   }}
//                   style={{
//                     default: {
//                       fill: '#ECEFF1',
//                       outline: 'none',
//                     },
//                     hover: {
//                       fill: '#2196F3',
//                       outline: 'none',
//                     },
//                     pressed: {
//                       fill: '#FF5722',
//                       outline: 'none',
//                     },
//                   }}
//                 />
//               ))
//             }
//           </Geographies>
//         </ZoomableGroup>
//       </ComposableMap>

//       {/* Tooltip */}
//       {tooltipContent && (
//         <div className="tooltip"> hiiiiii
//           <strong>{tooltipContent}</strong>
//           {/* Add other tooltip content here */}
//         </div>
//       )}
//     </div>
//   );
// };

// export default IndiaMap;


import React, { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import geoJSONData from './india.json';

const IndiaMap = () => {
    const initialZoom = 7; // Adjust the initial zoom level as needed
  const initialCenter = [-10, -10];
  const [zoom, setZoom] = useState(initialZoom);
  const [tooltipContent, setTooltipContent] = useState('');
  const [tooltipPosition, setTooltipPosition] = useState({});

  // Function to handle zoom in and zoom out
  const handleZoomIn = () => {
    setZoom(zoom + 1);
  };

  const handleZoomOut = () => {
    if (zoom > 1) {
      setZoom(zoom - 1);
    }
  };

  // Function to show the tooltip
  const showTooltip = (geo, event) => {
    const { st_nm } = geo.properties; // Adjust property names as needed
    console.log(event)
    const { clientX, clientY } = event;
    setTooltipContent(st_nm);
    setTooltipPosition({ left: clientX - 100, top: clientY + 30, position: "absolute", width: "20%" });
  };

  // Function to hide the tooltip
  const hideTooltip = () => {
    // setTooltipContent('');
    // setTooltipPosition({});
  };

  return (
    <div style={{ width: '100%', height: '400px' }}>
      {/* Zoom buttons */}
      <button onClick={handleZoomIn}>Zoom In (+)</button>
      <button onClick={handleZoomOut}>Zoom Out (-)</button>

      {/* Map */}
      <ComposableMap data-tip="" projection="geoMercator"
        projectionConfig={{
            scale: 30, // Adjust the scale as needed
            center: [-50, 50],
            // center: initialCenter,
            // scale: 1100, 
        }}>
        <ZoomableGroup zoom={zoom}>
          <Geographies geography={geoJSONData}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onMouseEnter={(event) => showTooltip(geo, event)}
                  onMouseLeave={hideTooltip}
                  style={{
                    default: {
                      fill: '#ECEFF1',
                      outline: 'none',
                    },
                    hover: {
                      fill: '#2196F3',
                      outline: 'none',
                    },
                    pressed: {
                      fill: '#FF5722',
                      outline: 'none',
                    },
                  }}
                />
              ))
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      {/* Tooltip */}
      {tooltipContent && (
        <div className="tooltip" style={tooltipPosition} >
          {tooltipContent}
        </div>
      )}
    </div>
  );
};

export default IndiaMap;
