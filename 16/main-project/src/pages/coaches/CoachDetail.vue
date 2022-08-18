<template>
    <section>
        <base-card>
            <h2>{{fullName}}</h2>
            <h3>${{rate}}/hour</h3>
        </base-card>
    </section>
    <section>
        <base-card>
            <header>
                <h2>Intrested? Reach out now</h2>
                <base-button link mode="outline" :to="contactPage">contact</base-button>
            </header>
            <router-view></router-view>
        </base-card>
    </section>
    <section>
        <base-card>
            <base-badge v-for="area in areas" :key="area" :type="area">{{area}}</base-badge>
            <p>{{description}}</p>
        </base-card>
    </section>
</template>
<script>
export default {
    props:['id'],
    data() {
        return {
            currentCoach: null,
        }
    },
    created() {
        this.currentCoach = this.$store.getters['coaches/getCoaches'].find(coaches=>coaches.id === this.id);
    },
    computed:{
        fullName(){
            return this.currentCoach.firstName + ' ' + this.currentCoach.lastName;
        },
        rate(){
            return this.currentCoach.hourlyRate;
        },
        description(){
            return this.currentCoach.description;
        },
        areas(){
            return this.currentCoach.areas;
        },
        contactPage(){
            return this.$route.path + '/contact';
        }
    },
}
</script>
<style lang="">
    
</style>