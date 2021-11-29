<template>
    <Procedure :procedure="procedure" />
</template>

<script>
import Procedure from '../components/Procedure.vue'
import json from '../json/cns_to_mac.json'

export default {
    name:'cns_mac',
    components: {
        Procedure
    },
    data() {
      return {
        procedure: json
    }
  }
}
</script>