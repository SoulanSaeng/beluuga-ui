<script>
import { POINT_MARKER_ICON_CONFIG } from "@/common/map.config.js";

export default {
  props: {
    google: {
      type: Object,
      required: true
    },
    map: {
      type: Object,
      required: true
    },
    marker: {
      type: Object,
      required: true
    },
  },

  mounted() {
    const { Marker } = this.google.maps;

    new Marker({
      position: this.marker.position,
      title: this.marker.title,
      marker: this.marker,
      map: this.map,
      icon: POINT_MARKER_ICON_CONFIG
    });
  },

  render() {}
};
</script>