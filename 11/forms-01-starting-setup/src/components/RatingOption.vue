<template>
    <ul>
        <li :class="{ active: modelValue === 'poor' }"><button type="button"
                @click="selectedRating('poor')">poor</button></li>
        <li :class="{ active: modelValue === 'average' }"><button type="button"
                @click="selectedRating('average')">average</button></li>
        <li :class="{ active: modelValue === 'great' }"><button type="button"
                @click="selectedRating('great')">great</button></li>
    </ul>
</template>

<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    methods: {
        selectedRating(option) {
            this.$emit('update:modelValue', option);
        }
    }
};
</script>

<style>
.active {
    border-color: #a00078;
}

.active button {
    color: #a00078;
}

ul {
    list-style: none;
    margin: 0.5rem 0;
    padding: 0;
    display: flex;
}

li {
    margin: 0 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    font: inherit;
    border: none;
    background-color: transparent;
    cursor: pointer;
}
</style>