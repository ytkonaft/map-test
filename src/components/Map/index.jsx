import React, { useState, createRef } from "react";
import { compose, withProps, withHandlers } from "recompose";
import { withGoogleMap, GoogleMap } from "react-google-maps";
import { DrawingManager } from "react-google-maps/lib/components/drawing/DrawingManager";
import "./Map.scss";

const drawingOptions = {
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
}

const Map = compose(
  withProps({
    loadingElement: <div className="map-loading" />,
    containerElement: <div className="map-container" />,
    mapElement: <div className="map-element" />
  }),
  withHandlers(() => {
    const refs = {
      map: undefined,
    }

    return {
      onMapMounted: () => ref => {
        refs.map = ref
      },
      reactangleIsAdded: (...t) => (...a) => {
        console.log(t)
        console.log(a)
        console.log(refs.map)
      }
    }
  }),
  withGoogleMap
)(({
  onMapMounted,
  reactangleIsAdded
}) => {

  const [drawMode, changeMode] = useState(true);

  return (
    <div className="map-wrp">
      <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}
        ref={onMapMounted}>
        <DrawingManager
          drawingMode={drawMode ? "rectangle" : null}
          onRectangleComplete={reactangleIsAdded}
          defaultOptions={drawingOptions}
        />

      </GoogleMap>
    </div >
  );
});
export default Map;
