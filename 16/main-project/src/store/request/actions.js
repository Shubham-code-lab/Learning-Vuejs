export default{
    async addNewRequest(context, payLoad){
        const coachId = payLoad.coachId;
        const newRequest ={
            id:payLoad.id,
            userEmail:payLoad.userEmail,
            userMessage:payLoad.userMessage
        }

        const response = await fetch(`https://coaches-e2269-default-rtdb.firebaseio.com/requests/${coachId}.json`,{
            method: 'POST',     //POST method add new item while put update existing data
            body: JSON.stringify(newRequest)
        });    //instead of using then as we user await we can use it like below

        // const responseData = await response.json();
        if(!response.ok){
            //error
        }
        context.commit('addNewRequest', payLoad);
    },

    async loadRequest(context,payLoad){
        console.log(context.getters.updateCoaches);
        if(!context.getters.updateCoaches)return;
        const response  = await fetch(`https://coaches-e2269-default-rtdb.firebaseio.com/requests/${payLoad.coachId}.json`);
        const responseData = await response.json();   //{{},{}}  to [{},{}]
        if(!response.ok){
            const error = new Error(response.message || "Failed to fetch");
            throw error;
        }
        const requests = []
        console.log("databse object",responseData);
        for(const request in responseData){    //receice data in object format to convert data in array   {c1:{}, c2:{}}
            const newRequest={
                id: responseData[request].id,
                coachId: payLoad.coachId,
                userEmail: responseData[request].userEmail,
                userMessage: responseData[request].userMessage
            };
            requests.push(newRequest);
        }
        console.log("loading",requests);
        context.state.lastUpdateTime = new Date().getTime();
        context.commit('loadRequest',requests);
    }
};