<template>
    <form @submit.prevent="submitData">
        <div class="form-control">
            <label for="email" >your Email</label>
            <input type="text" id="email" v-model.trim="email">
        </div>
        <div class="form-control">
            <label for="message" >Message</label>
            <textarea id="message" rows="5" v-model.trim="message"></textarea>
        </div>
        <p class="error" v-if="!isValidForm">Form is Not valid Please fill it correctly</p>
        <div class="actions" mode="outline">
            <base-button>Submit</base-button>
        </div>
    </form>
</template>
<script>
export default {
    created() {
        console.log("Contactcoach",this.$route);
    },
    data() {
        return {
            email: '',
            message: '',
            isValidForm: true,
        }
    },
    methods: {
        formValid(){
            if(this.email==="" || !this.email.includes('@') || this.message === '')
                this.isValidForm= false
            else this.isValidForm = true
        },
        submitData(){
            this.formValid();
            if(this.isValidForm){ 
                const newRequest = {
                    id: new Date().toISOString(),
                    coachId: this.$route.params.id,
                    userEmail: this.email,
                    userMessage: this.message
                };
                this.$store.dispatch('requests/addNewRequest', newRequest)
            }
        }
    },
}
</script>
<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.errors {
  font-weight: bold;
  color: red;
}

.actions {
  text-align: center;
}
</style>