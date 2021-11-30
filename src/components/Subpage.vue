<template>
    <div class="subpage">
        <h5>{{subpage.id}}. {{subpage.title}}</h5>
        <Steps :steps="subpage.steps" :subpage_id="subpage.id" />
    </div>
    
</template>

<script>
import Steps from './Steps'

export default {
    name: 'Subpage',
    props: {
        subpage: Object
    },
    components: {
        Steps
    }
}
</script>

<style scoped>
.subpage h5 {
    padding-top: 40px;
    padding-bottom: 40px;
    color: #FFAF51;
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;

}
</style>