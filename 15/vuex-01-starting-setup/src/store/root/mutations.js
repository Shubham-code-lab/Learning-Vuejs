export default {
    authenticate(state, payLoad) {
        state.isAuthorised = payLoad.isValid;
    },
}