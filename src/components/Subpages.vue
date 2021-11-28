<template>
    <div :key="subpage.id" v-for="subpage in subpages">
        <Subpage :subpage="subpage" />
    </div>
</template>

<script>
import Subpage from './Subpage'

export default {
    name: 'Subpages',
    props: {
        subpages: Array
    },
    components: {
        Subpage
    }
}
</script>