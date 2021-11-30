<template>
    <div class="steps-container">
        <div :key="step.id" v-for="step in steps">
            <Step :step="step" />
        </div>
    </div>
</template>

<script>
import Step from './Step'
export default {
    name: 'Steps',
    props: {
        steps: Array,
        subpage_id: String
    },
    components: {
        Step
    }
}
</script>

<style scoped>
.steps-container {
    display: block;
}

</style>