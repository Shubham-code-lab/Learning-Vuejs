<template>
    <div>
        <the-header title="I'm Top"></the-header>
        <the-resources></the-resources>
    </div>
</template>

<script>
import TheHeader from "./Layout/TheHeader.vue";
import TheResources from "./LearningResources/TheResources.vue";

export default {
    components: {
        TheResources,
        TheHeader
    },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
    box-sizing: border-box;
}

html {
    font-family: 'Roboto', sans-serif;
}

body {
    margin: 0;
}
</style>