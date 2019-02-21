import mapboxgl from 'mapbox-gl';

const initMapbox = () => {
  const mapElement = document.getElementById('map');
  const fitMapToMarkers = (map, markers) => {
    const bounds = new mapboxgl.LngLatBounds();
    markers.forEach(marker => bounds.extend([ marker.lng, marker.lat ]));
    map.fitBounds(bounds, { padding: 70, maxZoom: 15 });
    // const sw = new mapboxgl.LngLat(-73.9876, 40.7661);
    // const ne = new mapboxgl.LngLat(-73.9397, 40.8002);
    // const bounds = new mapboxgl.LngLatBounds(sw, ne);
    // map.fitBounds(bounds, { padding: 70, maxZoom: 15 });
  };

  if (mapElement) { // only build a map if there's a div#map to inject into
    mapboxgl.accessToken = mapElement.dataset.mapboxApiKey;
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v10'
    });
    const markers = JSON.parse(mapElement.dataset.markers);
    markers.forEach((marker) => {
      const popup = new mapboxgl.Popup().setHTML(marker.infoWindow);

      new mapboxgl.Marker()
        .setLngLat([ marker.lng, marker.lat ])
        .setPopup(popup)
        .addTo(map);
    });
    // fitMapToMarkers(map, markers);

    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-right');

    map.addControl(new mapboxgl.GeolocateControl({
    fitBoundsOptions: {
        maxZoom: 15
    },
}));
  }
};

export { initMapbox };
