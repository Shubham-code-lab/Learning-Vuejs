export default{
    addNewRequest(state, payLoad){
        state.requests.push(payLoad);
        console.log("mutation",state.requests);
    }
};