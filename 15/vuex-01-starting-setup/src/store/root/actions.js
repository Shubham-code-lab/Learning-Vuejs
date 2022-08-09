export default { //too perform asycronization 
    authenticate(context, payLoad) {
        console.log('root', context);
        context.commit('authenticate', payLoad);
    }
}