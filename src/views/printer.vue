<template>
    <Header />
    <div class="content">
        <div id="home-img" class="item">
            <img src="../assets/home_img_reversed.png" alt="home_img">
        </div>
        <div id="text-container" class="item">
                <h1>Connect your Device to CNS Printer</h1>
                <div class="links-container">
                    <div class="link-item">
                        <a href="/printer/cns-printer-pc">PC</a>
                    </div>
                    <div class="link-item">
                        <a href="/printer/cns-printer-mac">Mac</a>
                    </div>
                </div>
        </div>
    </div>
    <Footer />
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
    name: 'printer',
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
.content {
  padding-top: 105px;
  width: 100%;
  margin: 0 auto;
  display: table;
}

#text-container {
    width: 50%;
    height: 100%;
    display: table-cell;
    text-align: center;
    vertical-align: top;
}

#text-container h1{
    font-size: 3rem;
    margin: 3rem;
}

.links-container{
    width: 40%;
    display: block;
    margin: 0 auto;

}

.link-item a{
    display: block;
    background-color: #FF961B;
    color: white;
    padding: 1rem 2rem;
    margin: 2.2rem 0rem;
    border: none;
    border-radius: 100px;
    font-size: 1.3rem;
    text-align: center;
}

#home-img {
    width: 50%;
    height: 100%;
    display: table-cell;
    text-align: left;
    vertical-align: middle;
}

</style>