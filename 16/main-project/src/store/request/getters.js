export default{
    getRequest(state,getters,rootState,rootGetters){
        console.log("get request", state.requests);
        const id = rootGetters.getUserId;
        return state.requests.filter(request => request.coachId === id);
    },
    getHaveRequest(state,getters){
        return getters.getRequest && getters.getRequest.length > 0;
    },
    updateCoaches(state){
        if(!state.lastUpdateTime)return true;
        const lastRequest = state.lastUpdateTime;
        const curretTime = new Date().getTime();
        return (curretTime - lastRequest)/1000 > 60;
    }
};