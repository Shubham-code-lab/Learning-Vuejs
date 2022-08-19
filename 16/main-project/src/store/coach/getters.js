export default {
    getCoaches(state) {
        console.log(state);
        return state.coaches;
    },
    hasCoaches(_, getters) {
        return getters.getCoaches && getters.getCoaches.length > 0;
    },
   
};