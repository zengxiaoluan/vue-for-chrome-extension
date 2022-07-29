<template>
    <div>
        <Tsx></Tsx>
        <p class="greeting" @click="click">{{ greeting }}666</p>
    </div>
</template>

<script lang="ts">
import Tsx from './tsx.vue'
export default {
    data() {
        let a: string = 'zzzzzzzzzzzz'
        console.log(a)
        return {
            greeting: a
        }
    },

    components: { Tsx },

    methods: {
        click() {
            let a: string = '2'
            alert(a)
        }
    }
}
</script>



<style>
.greeting {
    color: red;
    font-weight: bold;
}
</style>