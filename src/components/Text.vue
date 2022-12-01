<template>
    <div>
        <h1>DOES IT WORK? {{ count }}</h1>
    </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            count: 1
        }
    },

    created() {
        setInterval(() => {
            this.add();
        }, 1000)
    },

    methods: {
        add() {
            this.count++
        }
    }
})
</script>


<style lang="scss">
div {
    h1 {
        background-color: aqua;
    }
}
</style>