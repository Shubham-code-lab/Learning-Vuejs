import getters from './getters.js'
import actions from './actions.js'
import mutations from './mutations.js'


const coaches = {
    namespaced: true,
    state() {
        return {
            coaches: [],
            lastUpdateTime: null,
        }
    },
    getters: getters,
    mutations: mutations,
    actions: actions,
}


export default coaches;