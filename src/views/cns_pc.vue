<template>
    <div class="content">
      <p class="site-tracker"><a href="/">Home</a> > <a href="/wifi">Wi-Fi</a> > <a href="/cns-pc">PC</a></p>
      <Procedure :procedure="procedure" />
    </div>
    <Footer />
</template>

<script>
import Procedure from '../components/Procedure.vue'
import json from '../json/cns_to_pc.json'

export default {
    name:'cns_pc',
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

<style scoped>
.content {
    padding-top: 80px;
    width: 80%;
    margin: 0 auto;
    display: block;
}

.site-tracker {
  padding: 2rem 0;
}
</style>