import getters from "./getters.js";

import mutations from "./mutations.js";

import actions from "./actions.js";

const counterModule = {
    namespaced: true, //completly seprate module 
    state() {
        return {
            counter: 0,
        };
    },
    getters: getters,
    mutations: mutations,
    actions: actions,
};

export default counterModule;