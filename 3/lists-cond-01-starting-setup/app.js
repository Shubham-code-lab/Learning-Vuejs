const app = Vue.createApp({
    data() {
        return {
            goals: [],
            newGoal: '',
        };
    },
    methods: {
        addGoal() {
            if (this.newGoal != '') {
                this.goals.push(this.newGoal);
                this.$refs.inputfield.value = '';
            }
        },
        removeGoal(index) {
            this.goals.splice(index, 1);
        }
    }
});

app.mount('#user-goals');