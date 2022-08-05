import { createApp } from 'vue';

import { createStore } from 'vuex';

import App from './App.vue';


const counterModule = {
    namespaced: true, //completly seprate module 
    state() {
        return {
            counter: 0,
        };
    },
    getters: {
        finalCounter(state) {
            return state.counter * 2;
        },
        normalizedCounter(_, getters) {
            const finalCounter = getters.finalCounter; //getting value from previously getter to keep code dry
            if (finalCounter < 0) return 0;
            else if (finalCounter > 100) return 100;
            else return finalCounter;
        },
    },
    mutations: {
        increment(state) {
            state.counter++;
        },
        increased(state, payLoad) { //javascript morden feature even when we send OBJECT as argument we can only access one property of that object
            state.counter += payLoad.value;
        },
    },
    actions: { //too perform asycronization 
        increment(context) {
            setTimeout(function() {
                    context.commit('increment')
                },
                1000);
        },
        increased(context, payLoad) {
            console.log(context);
            setTimeout(function() {
                    context.commit('increased', payLoad)
                },
                1000);
        },
    }
};

const store = createStore({
    modules: {
        number: counterModule //number is namespace for counterModule module
    },
    state() {
        return {
            isAuthorised: false
        };
    },
    getters: {
        checkAuthentication(state) {
            return state.isAuthorised;
        }
    },
    mutations: {
        authenticate(state, payLoad) {
            state.isAuthorised = payLoad.isValid;
        },
    },
    actions: { //too perform asycronization 
        authenticate(context, payLoad) {
            console.log('root', context);
            context.commit('authenticate', payLoad);
        }
    }
});

const app = createApp(App);
app.use(store);


app.mount('#app');