import { createStore } from 'vuex';

import counterModule from '../counter/index.js';

import getters from './getters.js';

import mutations from './mutations.js';

import actions from './actions.js';

const store = createStore({
    modules: {
        number: counterModule //number is namespace for counterModule module
    },
    state() {
        return {
            isAuthorised: false
        };
    },
    getters: getters,
    mutations: mutations,
    actions: actions,
});

export default store;