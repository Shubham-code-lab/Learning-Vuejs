import { createStore } from 'vuex';
import coaches from '../coach/index.js';

const store = createStore({
    modules: {
        coaches: coaches
    }
});


export default store;