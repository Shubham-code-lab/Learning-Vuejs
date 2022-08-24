export default{
    addNewRequest(state, payLoad){
        // state.requests.push(payLoad);
        console.log("mutation",state.requests,payLoad);
    },
    loadRequest(state,payLoad){
        state.requests = payLoad;
    }
};