<template>
    <Header />
    <div class="content">
      <div class="links">
        <p class="site-tracker"><a href="/">Home</a> > <a href="/email">Email</a> > <a href="/email/cns-email-android">Android</a></p>
        <p class="faq"><a href="/faq">FAQ</a></p>
      </div>
      <Procedure :procedure="procedure" />
    </div>
    <Footer />
</template>

<script>
import Procedure from '../components/Procedure.vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import json from '../json/cns_email_to_android.json'

export default {
    name:'cns_email_android',
    components: {
        Procedure,
        Header,
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

.links p {
  display: inline-block;
}

.site-tracker {
  padding: 2rem 0;
}

.faq {
  padding: 2rem 0;
  float: right;
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