import { createStore } from 'vuex';
import coaches from '../coach/index.js';

const store = createStore({
    modules: {
        coaches: coaches
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