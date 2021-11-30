<template>
<div id="bar-cont">
    <div id="prog-bar" v-bind:style="{width: computedWith}"></div>
</div>
</template>

<script>
export default {
    name: 'ProgressBar',
    props: {
        count: Number,
        total: Number
    },
    data() {
        return {
            width: "100%"
        }
    },
    computed: {
        computedWith: function() {
            let currentCount = this.count + 1;
            let progress = (currentCount/this.total) * 100;
            this.width = progress.toString() + "%";
            return this.width;
        }
    }
}
</script>

<style scoped>
#bar-cont {
    width: 100%;
    height: 2rem;
    margin: 0;
    padding: 0;
    background-color: rgb(204, 204, 204);
    border-radius: 100px;
}
#prog-bar {
    width: 100%;
    height: 100%;
    background-color: #FFAF51;
    border-radius: 100px;

}
</style>