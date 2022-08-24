<template>
    <section>
        <base-dialog :show="!!error" title="FireBase Error occur"  @close="closeDialog">
        <p>Chack what happen at the database</p>
    </base-dialog>
        <base-card>
        <header>
            <h2>Request Received</h2>
        </header>
        <base-spinner v-if="isLoading"></base-spinner>
        <ul v-else-if="getHaveRequest">
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
    created() {
        this.loadRequest();
    },
    data() {
        return {
            isLoading: false,
            error: null,
        }
    },
    computed:{
        getRequest(){
            return this.$store.getters['requests/getRequest'];
        },
        getHaveRequest(){
            return this.$store.getters['requests/getHaveRequest'];
        }
    },
    methods: {
        async loadRequest(){
            const coachId = this.$store.getters.getUserId;
            this.isLoading = true;
            try {
                await this.$store.dispatch('requests/loadRequest',{coachId});
            } catch (error) {
                this.error = error.message || 'Something went wrong';
            }   
            this.isLoading = false;
        },
        closeDialog(){
            this.error = null;
        }
    },
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