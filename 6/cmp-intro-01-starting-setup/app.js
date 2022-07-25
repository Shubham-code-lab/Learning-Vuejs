const app = Vue.createApp({

});

app.component('friend-component', {
    data() {
        return {
            toggleDetail: false,
            friendList: [{
                id: 'manuel',
                name: 'Manuel Lorenz',
                phone: '0123 4567 8991',
                email: 'manuel@localhost.com'
            }]
        };
    },
    methods: {
        toggler() {
            this.toggleDetail = !this.toggleDetail;
        }
    },
    template: `
    <li v-for="friend in friendList" :key="friend.id">
    <h2>{{friend.name}}</h2>
    <button @click="toggler">{{toggleDetail ? 'Hide': 'Show'}} Details</button>
    <ul v-if="toggleDetail">
        <li><strong>Phone:</strong> {{friend.phone}}</li>
        <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
</li>
    `
});

app.mount('#app');