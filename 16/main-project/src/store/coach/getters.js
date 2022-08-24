export default {
    getCoaches(state) {
        console.log(state);
        return state.coaches;
    },
    hasCoaches(_, getters) {
        return getters.getCoaches && getters.getCoaches.length > 0;
    },
    updateCoaches(state){
        if(!state.lastUpdateTime)return true;
        const lastRequest = state.lastUpdateTime;
        const curretTime = new Date().getTime();
        return (curretTime - lastRequest)/1000 > 60;
    }
};