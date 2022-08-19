<template>
    <section>
        <base-card>
            <h2>Register as a coach now</h2>
            <coach-form @addCoach="addCoach"></coach-form>
        </base-card>
    </section>
</template>

<script>
import CoachForm from '../../components/coaches/CoachForm.vue';

export default {
    components:{
        CoachForm
    },
    methods: {
        addCoach(newCoach){
            this.$store.dispatch('updateUserIsCoach');
            const userId = this.$store.getters.getUserId;
            newCoach.id = userId
            this.$store.dispatch('coaches/addNewCoach', {newCoach:newCoach});
        }
    },      
}
</script>

<style lang="">
    
</style>