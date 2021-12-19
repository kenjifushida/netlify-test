<template>
    <h2 v-html="procedure.text"></h2>
    <p>We're here to make your life here at SFC easier.</p>
    <p><span class="disclaimer">DISCLAIMER</span>: This is an assignment for a class and is an unofficial CNS Guide.</p>
    <p>For the official guide, please click on this URL: <a href="https://cns-guide.sfc.keio.ac.jp/2021/CNSguide2021_en.pdf">https://cns-guide.sfc.keio.ac.jp/2021/CNSguide2021_en.pdf</a></p>
    <Subpage :subpage="procedure.subpages[count]" />
    <ProgressBar :count="count" :total="procedure.subpages.length" v-if="procedure.subpages.length > 1" />
    <div class="btn-container" v-if="procedure.subpages.length > 1">
        <button @click="prevPage" class="btn" v-if="count!=0">Previous</button>
        <button onclick="location.href='/';" class="btn" v-if="count+1 == procedure.subpages.length || count==0">Back to Home</button>
        <button @click="nextPage" class="btn" v-if="count+1 != procedure.subpages.length">Next</button>
    </div>
    <div class="btn-container" v-if="(count+1 != procedure.subpages.length && count!=0) || procedure.subpages.length == 1">
        <button onclick="location.href='/';" class="btn">Back to Home</button>
    </div>
</template>

<script>
import Subpage from './Subpage'
import ProgressBar from './ProgressBar'

export default {
    name: 'Procedure',
    props: {
        procedure: Object,
    },
    data(){
        return {
            count: 0
        }
    },
    components: {
        Subpage,
        ProgressBar
    },
    methods: {
        nextPage() {
            if (this.count < this.procedure.subpages.length - 1) {
                this.count++;
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        },
        prevPage() {
            if (this.count > 0) {
                this.count--;
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        }
    }
}
</script>

<style scoped>

h2 {
    font-style: normal;
    font-weight: 500;
    font-size: 2.5rem;
}

p {
    font-size: 1.2rem;
    font-style: normal;
    font-weight: normal;
    color: #272727;

}

.disclaimer {
    font-weight: bold;
}

a:link {
    color: gray;
    text-decoration: none;
}

a:visited {
    color: darkslategray;
    text-decoration: none;
}

a:hover {
    text-decoration: underline;
}

.btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0rem;
}

.btn {
    background-color: #FFAF51;
    color: white;
    width: 190px;
    height: 53px;
    margin: 20px;
    border: none;
    border-radius: 31px;
    font-size: 20px;
    cursor: pointer;

}

.btn:focus {
    outline: none;
}

.btn:active {
    transform:scale(0.98);
    background: #face75;
}
</style>