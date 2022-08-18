<template>
    <form @submit.prevent="">
        <div class="form-control">
            <label for="firstName" :class="{invalid:newCoach.firstName.isValid}">First Name</label>
            <input type="text" id="firstName" v-model="newCoach.firstName.value">
            <p v-if="newCoach.firstName.isValid">PLease Enter your first Name</p>
        </div>
        <div class="form-control">
            <label for="lastName" :class="{invalid:newCoach.lastName.isValid}">Last Name</label>
            <input type="text" id="lastName" v-model="newCoach.lastName.value">
            <p v-if="newCoach.lastName.isValid">PLease Enter your Last Name</p>
        </div>
        <div class="form-control">
            <label for="description" :class="{invalid:newCoach.description.isValid}">Description</label>
            <textarea rows="5" id="description" v-model="newCoach.description.value"></textarea>
            <p v-if="newCoach.description.isValid">Please Enter your description</p>
        </div>
        <div class="form-control">
            <label for="hourlyRate" :class="{invalid:newCoach.hourlyRate.isValid}">Hourly Rate</label>
            <input type="number" id="hourlyRate" v-model="newCoach.hourlyRate.value">
            <p v-if="newCoach.hourlyRate.isValid">Please Enter your payment</p>
        </div>
        <div class="form-control">
            <input type="checkbox" id="frontend" value="frontend" v-model="newCoach.areas.value">
            <label for="frontend">Frontend</label>
            <input type="checkbox" id="backend" value="backend" v-model="newCoach.areas.value">
            <label for="backend">Backend</label>
            <input type="checkbox" id="carrer" value="carrer" v-model="newCoach.areas.value">
            <label for="carrer">Carrer</label>
            <p v-if="newCoach.areas.isValid">Please choose your field</p>
        </div>
        <base-button mode="outline">submit</base-button>
    </form>
</template>
<script>
export default {
    data(){
        return {
            newCoach:{
                firstName:{
                    isValid: false,
                    value: "",
                },
                lastName:{
                    isValid: false,
                    value: "",
                },
                description:{
                    isValid: false,
                    value: "",
                },
                hourlyRate:{
                    isValid: false,
                    value: null,
                },
                areas:{
                    isValid: false,
                    value: [],
                },
            },
            isFormValid: true,
        }
    },
    methods: {
        Validation(){},
        submitForm(){}
    },
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}    
</style>