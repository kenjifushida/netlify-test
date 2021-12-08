<template>
    <div class="content">
      <p class="site-tracker"><a href="/">Home</a> > <a href="/wifi">Wi-Fi</a> > <a href="/wifi/cns-android">Android</a></p>
      <Procedure :procedure="procedure" />
      <div class="link-item">
        <a href="/">Back to Home</a>
      </div>
    </div>
    <Footer />
</template>

<script>
import Procedure from '../components/Procedure.vue'
import Footer from '../components/Footer.vue'
import json from '../json/cns_to_android.json'

export default {
    name:'cns_android',
    components: {
        Procedure,
        Footer
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

.link-item a{
    display: inline-block;
    background-color: #FFAF51;
    color: white;
    padding: 1rem 2rem;
    margin: 0.3rem 0rem;
    border: none;
    border-radius: 100px;
    font-size: 1.3rem;
    text-align: center;
    text-decoration: none;
}

.link-item {
    text-align: center;
    margin-bottom: 2rem;
}
</style>