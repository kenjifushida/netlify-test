<template>
    <div class="content">
        <h2 v-html="procedure.text"></h2>
        <p>We're here to make your life here at SFC easier.</p>
        <p>For the official guide, please <a href="">click here</a>.</p>
        <Subpage :subpage="procedure.subpages[count]" />
        <ProgressBar :count="count" :total="procedure.subpages.length" />
        <div class="btn-container">
            <button @click="prevPage" class="btn" >Previous</button>
            <button @click="nextPage" class="btn" >Next</button>
        </div>
    </div>
</template>

<script>
import Subpage from './Subpage'
import ProgressBar from './ProgressBar'

export default {
    name: 'Procedure',
    props: {
        procedure: Object
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
.content {
    padding-top: 80px;
    width: 80%;
    margin: 0 auto;
    display: block;
}

.content h2 {
    padding: 10px 0px;
    font-style: normal;
    font-weight: 500;
    font-size: 2.5rem;
}

.content p {
    font-size: 1.2rem;
    font-style: normal;
    font-weight: normal;
    color: #272727;

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