<template>
    <div class="content">
        <h2 v-html="procedure.text"></h2>
        <p>We're here to make your life here at SFC easier.</p>
        <p>For the official guide, please <a href="">click here</a>.</p>
        <Subpage :subpage="procedure.subpages[count]" />
        <div class="prev-next-container">
            <button @click="prevPage">Previous</button>
            <button @click="nextPage">Next</button>
        </div>
        <p>{{count}}</p>
    </div>
</template>

<script>
import Subpage from './Subpage'

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
        Subpage
    },
    methods: {
        nextPage() {
            if (this.count < this.procedure.subpages.length - 1) {
                this.count++;
            }
        },
        prevPage() {
            if (this.count > 0) {
                this.count--;
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
    font-size: 32px;
}

.content p {
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

.prev-next-container {
    text-align: center;
}
</style>