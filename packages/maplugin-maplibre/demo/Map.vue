<template>
  <div id="map"></div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import 'maplibre-gl/dist/maplibre-gl.css';
import maplibregl from 'maplibre-gl';

const props = defineProps<{
  onMapLoad(map: maplibregl.Map): void
}>();

onMounted(() => {
  const map = new maplibregl.Map({
    container: 'map',
    zoom: 2,
    style: "https://demotiles.maplibre.org/style.json",
    attributionControl: false
  });

  map.on('load', () => {
    props.onMapLoad(map);
  });
})
</script>

<style scoped>
#map {
  width: 100%;
  height: 400px;
}
</style>