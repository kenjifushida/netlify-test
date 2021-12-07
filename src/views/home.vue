<template>
    <div class="content">
        <div id="text-container" class="item">
            <div id="inner-text-cont">
                <h1>Welcome!</h1>
                <p>We’re here to make your life at SFC easier. 
                    Click on any of the buttons below to learn more about how to access CNS services.
                </p>
                <div class="links-container">
                    <div class="link-item">
                        <a href="/wifi">Connect to CNS Wi-Fi</a>
                    </div>
                    <div class="link-item">
                        <a href="#">Set Up Mail and Client</a>
                    </div>
                    <div class="link-item">
                        <a href="#">Connect to CNS Printer</a>
                    </div>
                </div>
                <p>Please note this is not the official CNS Guide. This is a website made by SFC students as a course assignment.
                    For the official guide, please click here.
                </p>
            </div>
        </div>
        <div id="home-img" class="item">
            <img src="../assets/home_img.png" alt="home_img">
        </div>
    </div>
    <Footer />
</template>

<script>
import Footer from '../components/Footer.vue'
export default {
    name: 'home',
    components: {
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
    vertical-align: middle;
}

#inner-text-cont {
    width: 60%;
    margin: 0 auto;
    text-align: left;
}

#inner-text-cont h1{
    font-size: 3rem;
    margin-bottom: 3rem;
}

#inner-text-cont p{
    font-size: 1.4rem;
}

.links-container{
    display: block;
    margin: 2.5rem 0rem;
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
}

#home-img {
    width: 50%;
    height: 100%;
    display: table-cell;
    text-align: right;
    vertical-align: middle;
}

</style>