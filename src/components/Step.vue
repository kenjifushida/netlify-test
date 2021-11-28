<template>
    <div class="step-container">
        <div class="step-img"><img :src="require(`@/assets/cns_mac/${step.img}`)" alt="duck"></div>
        <div class="step-info">
            <h1>{{step.id}}</h1>
            <p v-html="step.text"></p>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'Step',
    props: {
        step: Object,
    }
}
</script>

<style scoped>
.step-container {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border: 2px solid #dee2e6;
    border-radius: 15px;
    margin-bottom: 1rem;
}

.step-info {
    padding: 20px;
}

.step-info p{
    padding-top: 20px;
    color: #272727;
}

</style>