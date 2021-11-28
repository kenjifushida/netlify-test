<template>
  <Header />
  <Procedure :procedure="procedure" />
</template>

<script>
import Header from './components/Header.vue'
import Procedure from './components/Procedure.vue'

export default {
  name: 'App',
  components: {
    Header,
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

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

</style>
