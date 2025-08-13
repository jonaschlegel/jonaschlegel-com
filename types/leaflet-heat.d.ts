import * as L from 'leaflet';

declare module 'leaflet' {
  interface HeatMapOptions {
    radius?: number;
    blur?: number;
    maxZoom?: number;
    max?: number;
    gradient?: { [key: number]: string };
  }

  function heatLayer(
    latlngs: Array<[number, number] | [number, number, number]>,
    options?: HeatMapOptions,
  ): L.Layer;
}
