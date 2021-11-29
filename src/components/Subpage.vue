<template>
    <div class="subpage">
        <h5>{{subpage.id}}. {{subpage.title}}</h5>
        <Steps :steps="steps" :subpage_id="subpage.id" />
    </div>
    
</template>

<script>
import Steps from './Steps'
import json from '../json/cns_mac_subpages.json'

export default {
    name: 'Subpage',
    props: {
        subpage: Object
    },
    components: {
        Steps
    },
    data() {
        return {
            steps: json
        }
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