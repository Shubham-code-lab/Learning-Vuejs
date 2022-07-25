<template>
    <div>
        <!-- header compnenet will always be there in dom tree even we if we don't use it in other component so v-if to check if used or not -->
        <header v-if="$slots.header">
            <!-- slot are replaced by the content that are wrapped inside base-card tag also futher they are distingushed by slots name -->
            <slot name="header">
                <!-- if header slot is not used in other compnent inside basecard than h1 tag is dislpayed -->
                <!-- <h1>The default</h1> -->
            </slot>
        </header>
        <slot></slot>
    </div>
</template>

<script>
export default {
    mounted() {
        console.log(this.$slots);
        console.log(this.$slots.default);
        console.log(this.$slots.header);
    }
}
</script>

<style scoped>
div {
    margin: 2rem auto;
    max-width: 30rem;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
}

div header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>