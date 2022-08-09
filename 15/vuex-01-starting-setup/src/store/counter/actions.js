export default { //too perform asycronization 
    increment(context) {
        setTimeout(function() {
                context.commit('increment')
            },
            1000);
    },
    increased(context, payLoad) {
        console.log(context);
        setTimeout(function() {
                context.commit('increased', payLoad)
            },
            1000);
    },
}