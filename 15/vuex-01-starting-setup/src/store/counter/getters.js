export default {
    finalCounter(state) {
        return state.counter * 2;
    },
    normalizedCounter(_, getters) {
        const finalCounter = getters.finalCounter; //getting value from previously getter to keep code dry
        if (finalCounter < 0) return 0;
        else if (finalCounter > 100) return 100;
        else return finalCounter;
    },
}