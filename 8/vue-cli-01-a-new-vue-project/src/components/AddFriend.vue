<template>
    <form @submit.prevent="confirmedDetail">
        <label for="name">Name:-</label><input id="name" ref="name" type="text">
        <label for="phone">Phone:-</label><input id="phone" ref="phone" type="text">
        <label for="email">Email:-</label><input id="email" ref="email" type="text">
        <label for="favroite">Favroite:-</label><input ref="favroite" id="favroite" type="checkbox">
        <button>Confirm</button>
    </form>
</template>


<script>
export default {
    emits: ['newFriend'],
    data() {
        return {
        };
    },
    methods: {
        confirmedDetail() {
            console.log(this.$refs.name.value, this.$refs.phone.value, this.$refs.email.value, this.$refs.favroite.checked);
            this.$emit('newFriend', this.$refs.name.value, this.$refs.phone.value, this.$refs.email.value, this.$refs.favroite.checked);
        }
    }
};
</script>