/*
    when to use method, watcher, computed
    method := when event binding
    computed := ouputing data
    watcher := exeute when data value changes
*/



const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            last: '',
            fullName: ''
        };
    },
    computed: { //when you want to output value and don't want your method execute mutiple time whenever a changes on page take place
        // fullName() {
        //     console.log('exicuting fullName method');
        //     if (this.name === "" || this.last === "")
        //         return '';
        //     return this.name + " " + this.last;
        // }
    },
    watch: {
        name(value) {
            if (value === '')
                this.fullName = ''
            else this.fullName = value + " " + this.last
        },
        last(value) {
            if (value === '')
                this.fullName = ''
            else this.fullName = this.name + " " + value
        }
    },
    methods: { //when you want evet handler method
        outputFullName() {
            console.log('exicuting outputFullName method');
            if (this.name === "")
                return '';
            return this.name + " shinde";
        },
        setName(event, lastName) {
            this.name = event.target.value;
        },
        add(num) {
            console.log("counter lol");
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
            // this.counter--;
        }
    }
});

app.mount('#events');