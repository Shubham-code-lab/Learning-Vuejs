export default {
    addNewCoach(state, payLoad){      //from form
        state.coaches.push(payLoad.newCoach);
    },
    setCoaches(state,  payLoad){     //from database
        console.log("database",payLoad);
        state.coaches = payLoad;
    },
    
};