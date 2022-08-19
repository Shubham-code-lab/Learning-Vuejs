<template>
<div>
    <coach-filter @filterCoaches="filterCoaches"></coach-filter>
    <section>
        <base-card>
        <div class="control">
            <base-button >refresh</base-button> 
            <base-button mode="outline" link to="/register" v-if="!getUserIsCoach">Register to Coach</base-button >
        </div>
        <ul v-if="hasCoaches">
            <coach-item v-for="coaches in getCoaches" :key="coaches.id" 
                :id="coaches.id"
                :first-name="coaches.firstName"
                :last-name="coaches.lastName"
                :areas="coaches.areas"
                :rate="coaches.hourlyRate"
            ></coach-item>
        </ul>
        <h3 v-else>No Coaches found</h3>
        </base-card>
    </section>
</div>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem.vue';
import CoachFilter from '../../components/coaches/CoachFilter.vue';


export default {
    components:{
        CoachItem,
        CoachFilter
    },
    data(){
        return{
            filters:{
                frontend:true,
                backend: true,
                career:true,
            }
        }
    },
    computed:{
        hasCoaches(){
            return this.$store.getters['coaches/hasCoaches'];
        },
        getCoaches(){
            const coaches = this.$store.getters['coaches/getCoaches'];
            return coaches.filter(coach=>{
                if(this.filters.frontend && coach.areas.includes('frontend'))
                return true;
                else if(this.filters.backend && coach.areas.includes('backend'))
                return true;
                else if(this.filters.career && coach.areas.includes('career'))
                return true;
            });
        },
        getUserIsCoach(){
            return this.$store.getters.getUserIsCoach;
        }
    },
    methods:{
        filterCoaches(newUpdatedFilters){
            this.filters = newUpdatedFilters
        }
    }
}
</script>
<style scoped>
    ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>