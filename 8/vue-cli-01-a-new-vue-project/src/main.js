import { createApp } from 'vue'; //named export

import App from './App.vue'; //default export

import AddFriend from './components/AddFriend.vue';

import FriendDetail from './components/FriendDetail.vue';



const app = createApp(App);
app.component('add-friend', AddFriend);
app.component('friend-detail', FriendDetail);
app.mount('#app');