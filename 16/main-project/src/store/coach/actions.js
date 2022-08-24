export default {
    
    async addNewCoach(context, payLoad){
        // payLoad.newCoach.id = context.rootGetters.getUserId;
        const userId = payLoad.newCoach.id;
        const coachData ={
            firstName:payLoad.newCoach.firstName,
            lastName:payLoad.newCoach.lastName,
            description:payLoad.newCoach.description,
            hourlyRate:payLoad.newCoach.hourlyRate,
            areas:payLoad.newCoach.areas,
        }

        const response = await fetch(`https://coaches-e2269-default-rtdb.firebaseio.com/coaches/${userId}.json`,{
            method: 'PUT',     //POST method add new item while put update existing data
            body: JSON.stringify(coachData)
        });    //instead of using then as we user await we can use it like below

        // const responseData = await response.json();
        if(!response.ok){
            //error
        }
        console.log(payLoad);
        context.commit('addNewCoach',payLoad);
    },
    
    async loadCoaches(context){
        console.log(context.getters.updateCoaches);
        if(!context.getters.updateCoaches)return;

        const response  = await fetch(`https://coaches-e2269-default-rtdb.firebaseio.com/coaches.json`);
        const responseData = await response.json();
        if(!response.ok){
            const error = new Error(response.message || "Failed to fetch");
            throw error;
        }
        const coaches = []
        console.log("databse object",responseData);
        for(const userId in responseData){    //receice data in object format to convert data in array
            const coach={
                id: userId,
                firstName:responseData[userId].firstName,
                lastName:responseData[userId].lastName,
                description:responseData[userId].description,
                hourlyRate:responseData[userId].hourlyRate,
                areas:responseData[userId].areas,
            };
            coaches.push(coach);
        }
        context.state.lastUpdateTime = new Date().getTime();
        context.commit('setCoaches',coaches);
    }
};