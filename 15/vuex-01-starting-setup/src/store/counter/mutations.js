export default {
    increment(state) {
        state.counter++;
    },
    increased(state, payLoad) { //javascript morden feature even when we send OBJECT as argument we can only access one property of that object
        state.counter += payLoad.value;
    },
}