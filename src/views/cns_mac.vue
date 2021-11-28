<template>
    <Procedure :procedure="procedure" />
</template>

<script>
import Procedure from '../components/Procedure.vue'

export default {
    name:'cns_mac',
    components: {
        Procedure
    },
    data() {
    return {
      procedure: {
        "text": "Connecting your Mac (MacOS) to CNS",
        "subpages": [
          {
          "id": "1",
          "title": "Generating your Certificate" 
          },
          {
          "id": "2",
          "title": "Authenticate your certificate" 
          },
          {
          "id": "3",
          "title": "Connecting to CNS Wi-Fi" 
          },
          {
          "id": "a",
          "title": "Deleting Old Certificates" 
          }
        ]
      }
    }
  }
}
</script>