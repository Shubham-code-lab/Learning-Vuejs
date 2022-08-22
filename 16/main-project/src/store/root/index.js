import { createStore } from 'vuex';
import coaches from '../coach/index.js';
import requests from '../request/index.js';

const store = createStore({
    modules: {
        coaches: coaches,
        requests
    },
    state(){
        return{
            userId: 'c3',
            UserIsCoach: false,
        }
    },
    getters:{
        getUserId(state){
            return state.userId;
        },
        getUserIsCoach(state){
            return state.UserIsCoach;
        }
    },
    mutations:{
        updateUserIsCoach(state){
            state.UserIsCoach = true;
        }
    },
    actions:{
        updateUserIsCoach(context){
            context.commit('updateUserIsCoach');
        }
    }
});


export default store;