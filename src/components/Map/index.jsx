import React, { useState, createRef } from "react";
import { compose, withProps, withHandlers } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import { DrawingManager } from "react-google-maps/lib/components/drawing/DrawingManager";
import "./Map.scss";

const Map = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)((...props) => {
  const map = createRef();
  const [drawMode, changeMode] = useState(true);
  const reactangleIsAdded = () => {
    changeMode(false);
    getDrawedOverlay();
  };

  const getDrawedOverlay = () => {
    console.log(props.getRef);
  };

  return (
    <div className="map-wrp">
      <button onClick={getDrawedOverlay}>asdasd</button>
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
        {drawMode && (
          <DrawingManager
            defaultDrawingMode={"rectangle"}
            onRectangleComplete={reactangleIsAdded}
            defaultOptions={{
              drawingControl: false,
              rectangleOptions: {
                fillColor: "transparent",
                strokeColor: "#ed4e79",
                fillOpacity: 1,
                strokeWeight: 5,
                clickable: true,
                editable: true,
                zIndex: 1
              }
            }}
          />
        )}
      </GoogleMap>
    </div>
  );
});
export default Map;
