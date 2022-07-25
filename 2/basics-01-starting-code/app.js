const app = Vue.createApp({ //object of configuration setting
    data() { //options :- data function         
        return { //return object containing data
            courseGoal1: "Started learning Vue!",
            courseGoal2: "Finished Learning Vue!",
            vueLink: 'https://www.google.com/',
            htmlCode: '<p>this is html paragraph tag</p>'
        }
    },
    methods: { //options :- methods object contain methods
        outputGoals() { //property of type method 
            const rand = Math.random();
            if (rand < 0.5)
                return this.courseGoal1
            else return this.courseGoal2
        },
        outputHtml() {
            return this.htmlCode
        }
    }
});

app.mount('#user-goal');