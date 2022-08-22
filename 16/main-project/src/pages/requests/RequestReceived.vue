<template>
    <section>
        <base-card>
        <header>
            <h2>Request Received</h2>
        </header>
        <ul v-if="getHaveRequest">
            <request-item v-for="request in getRequest" :key="request" :email="request.userEmail" :message="request.userMessage"></request-item>
        </ul>
        <h3 v-else>No reuqest!!</h3>
        </base-card>
    </section>
</template>
<script>
import RequestItem from '../../components/request/RequestItem.vue';
export default {
    components:{
        RequestItem
    },
    computed:{
        getRequest(){
            return this.$store.getters['requests/getRequest'];
        },
        getHaveRequest(){
            return this.$store.getters['requests/getHaveRequest'];
        }
    }
}
</script>
<style scoped>
    header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>