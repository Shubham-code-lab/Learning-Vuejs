export default {
    
    addNewCoach(context, payLoad){
        // payLoad.newCoach.id = context.rootGetters.getUserId;
        context.commit('addNewCoach',payLoad);
    }
};