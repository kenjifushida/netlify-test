<template>
    <Header />
    <div class="content">
        <h1>Sitemap</h1>
        <h3><a href="/wifi">Connect to CNS Wi-Fi</a></h3>
        <ul class="first-list">
            <li><a href="/wifi/cns-pc">PC</a>
                <ul class="sec-list">
                    <li><a href="/wifi/cns-pc/del-certificate">Delete Certificate</a></li>
                </ul>
            </li>
            <li><a href="/wifi/cns-mac">Mac</a>
                <ul class="sec-list">
                    <li><a href="/wifi/cns-mac/del-certificate">Delete Certificate</a></li>
                </ul>
            </li>
            <li><a href="/wifi/cns-ios">iOS</a></li>
            <li><a href="/wifi/cns-android">Android</a></li>
        </ul>
        <h3><a href="/email">Connect your Device to CNS Email</a></h3>
        <ul class="first-list">
            <li><a href="/email/cns-email-pc">PC</a>
            </li>
            <li><a href="/email/cns-email-mac">Mac</a>
            </li>
            <li><a href="/email/cns-email-ios">iOS</a></li>
            <li><a href="/email/cns-email-android">Android</a></li>
        </ul>
        <h3><a href="/printer">Connect your Device to CNS Printer</a></h3>
        <ul class="first-list">
            <li><a href="/printer/cns-printer-pc">PC</a>
            </li>
            <li><a href="/printer/cns-printer-mac">Mac</a>
            </li>
        </ul>
    </div>
    <Footer />
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    name: "sitemap",
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
.content {
  padding-top: 80px;
  width: 70%;
  margin: 0 auto;
  display: block;
  padding-bottom: 29rem;
}

.content h1 {
    font-size: 2.5rem;
    margin: 1rem 0rem;
}

.content h3 {
    font-size: 2.1rem;
    margin: 1rem 0rem;
}

.content p{
    font-size: 1.4rem;
    margin: 1rem 0rem;
}

.first-list li {
    list-style: inside;
    font-size: 1.4rem;
    margin-left: 2rem;
}

.sec-list li {
    list-style: inside;
    font-size: 1.4rem;
    margin-left: 2rem;
}

a:link {
    color: lightgray;
    text-decoration: underline;
}

a:visited {
    color: darkslategray;
    text-decoration: underline;
}

a:hover {
    text-decoration: underline;
}
</style>