export default{
    getRequest(state,getters,rootState,rootGetters){
        console.log("get request", state.requests);
        const id = rootGetters.getUserId;
        return state.requests.filter(request => request.coachId === id);
    },
    getHaveRequest(state,getters){
        return getters.getRequest && getters.getRequest.length > 0;
    }
};