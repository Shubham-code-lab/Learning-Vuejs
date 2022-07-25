<template>
    <div>
        <base-dialog v-if="invalidInput" title="Invalid Input" @close="confirmError">
            <template #default>
                <p>Unfortunately, at least one input value is invalid.</p>
                <p>make sure to fill all the textbox given</p>
            </template>
            <template #actions>
                <base-button @click="confirmError">Okay</base-button>
            </template>
        </base-dialog>

        <base-card>
            <form @submit.prevent="newSong">
                <div>
                    <label for="title">Title</label>
                    <input type="text" id="title" name="title" ref="newTitle">
                </div>
                <div>
                    <label for="description">Description</label>
                    <textarea id="description" name="description" rows="3" ref="newDescription"></textarea>
                </div>
                <div>
                    <label for="link">Link</label>
                    <input type="text" id="link" name="link" ref="newLink">
                </div>
                <BaseButton type="submit">submit</BaseButton>
            </form>
        </base-card>
    </div>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
export default {
    inject: ['addNewSong'],
    data() {
        return {
            invalidInput: false,
        }
    },
    methods: {
        newSong() {
            const newTitle = this.$refs.newTitle.value;
            const newDescription = this.$refs.newDescription.value;
            const newLink = this.$refs.newLink.value;
            if (newTitle.trim() === '' || newDescription.trim() === '' || newLink.trim() === '') {
                this.invalidInput = true;
                return;
            }
            this.addNewSong(newTitle, newDescription, newLink);
        },
        confirmError() {
            this.invalidInput = false;
        }
    },
    components: { BaseButton }
};
</script>

<style>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>