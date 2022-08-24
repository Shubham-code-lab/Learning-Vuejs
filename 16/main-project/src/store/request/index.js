import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

const requests = {
    namespaced:true,
    state(){
        return{
            requests:[],
            lastUpdateTime: null,
        }
    },
    getters,
    actions,
    mutations
}

export default requests;