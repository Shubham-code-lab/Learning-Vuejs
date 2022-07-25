<template>
    <div>
        <h1>Second components active</h1>
        <input type="text" ref="textbox">
        <button @click="submit">Submit</button>
        <teleport to="body">
            <error-model v-if="invalidText">
                <h1>Invalid text entered</h1>
                <p>PLease enter sometext in to submit</p>
                <button @click="closeDialog">Close Model</button>
            </error-model>
        </teleport>
    </div>
</template>

<script>
import ErrorModel from './ErrorModel.vue';

export default {
    components: {
        ErrorModel
    },
    data() {
        return {
            invalidText: false,
        };
    },
    methods: {
        submit() {
            if (this.$refs.textbox.value === '') {
                this.invalidText = true;
            }
        },
        closeDialog() {
            this.invalidText = false;
        }
    }
};
</script>


