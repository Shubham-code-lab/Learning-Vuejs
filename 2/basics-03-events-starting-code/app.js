const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            fullName: '',
            confirmName: ''
        };
    },
    methods: {
        createName(event, lastName) {
            // this.fullName = event.target.value + ' ' + lastName;
            this.fullName = event.target.value;
        },
        setConfirmName() {
            this.confirmName = this.fullName;
        },
        resetName() {
            this.fullName = '';
        },
        addFunction() {
            this.counter++;
        },
        removeFunction() {
            this.counter--;
        },
        pageReload(event) {
            // event.preventDefault();     //valnila javascript way of preventing  page reload on submiting
            alert("page doesn't reload");
        }
    }
});

app.mount('#events');