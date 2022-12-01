<template>
    <div class="card vue">
        <a>
            <h2>
                Vue
                <span>&rarr;</span>
            </h2>
            <p class="flex justify-center items-center">
                Has been counting for: {{ seconds }} seconds.
            </p>
        </a>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            seconds: 0
        }
    },

    created() {
        setInterval(() => {
            this.tick();
        }, 1000)
    },

    methods: {
        tick() {
            this.seconds++
        }
    }
})
</script>


<style lang="scss">

</style>