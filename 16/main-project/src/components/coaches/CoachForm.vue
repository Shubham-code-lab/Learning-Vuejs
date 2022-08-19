<template>
    <form @submit.prevent="submitForm">
        <div class="form-control" :class="{invalid: !newCoach.firstName.isValid}">
            <label for="firstName" >First Name</label>
            <input type="text" id="firstName" v-model.trim="newCoach.firstName.value" @blur="validInputField('firstName')">
            <p v-if="!newCoach.firstName.isValid">PLease Enter your first Name</p>
        </div>
        <div class="form-control" :class="{invalid:!newCoach.lastName.isValid}">
            <label for="lastName" >Last Name</label>
            <input type="text" id="lastName" v-model.trim="newCoach.lastName.value" @blur="validInputField('lastName')">
            <p v-if="!newCoach.lastName.isValid">PLease Enter your Last Name</p>
        </div>
        <div class="form-control" :class="{invalid:!newCoach.description.isValid}">
            <label for="description" >Description</label>
            <textarea rows="5" id="description" v-model.trim="newCoach.description.value" @blur="validInputField('description')"></textarea>
            <p v-if="!newCoach.description.isValid">Please Enter your description</p>
        </div>
        <div class="form-control" :class="{invalid:!newCoach.hourlyRate.isValid}">
            <label for="hourlyRate" >Hourly Rate</label>
            <input type="number" id="hourlyRate" v-model.number="newCoach.hourlyRate.value" @blur="validInputField('hourlyRate')">
            <p v-if="!newCoach.hourlyRate.isValid">Please Enter your payment</p>
        </div>
        <div class="form-control" :class="{invalid:!newCoach.areas.isValid}">
          <div>
              <input type="checkbox" id="frontend" value="frontend" v-model="newCoach.areas.value" @blur="validInputField('areas')">
              <label for="frontend">Frontend</label>
            </div>
            <div>
              <input type="checkbox" id="backend" value="backend" v-model="newCoach.areas.value" @blur="validInputField('areas')">
              <label for="backend">Backend</label>
            </div>
            <div>
              <input type="checkbox" id="carrer" value="carrer" v-model="newCoach.areas.value" @blur="validInputField('areas')">
              <label for="carrer">Carrer</label>
            </div>
            <p v-if="!newCoach.areas.isValid">Please choose your field</p>
        </div>
        <base-button mode="outline">submit</base-button>
    </form>
</template>
<script>
export default {
    emits:['addCoach'],
    data(){
        return {
            newCoach:{
                firstName:{
                    isValid: true,
                    value: "",
                },
                lastName:{
                    isValid: true,
                    value: "",
                },
                description:{
                    isValid: true,
                    value: "",
                },
                hourlyRate:{
                    isValid: true,
                    value: null,
                },
                areas:{
                    isValid: true,
                    value: [],
                },
            },
            isFormValid: true,
        }
    },
    methods: {
        validInputField(field){
          this.newCoach[field].isValid = true; 
        },

        ValidateForm(){
          this.isFormValid = true;
          if(this.newCoach.firstName.value === ""){
            this.newCoach.firstName.isValid = false;
             this.isFormValid = false
          }
          if(this.newCoach.lastName.value === ""){
            this.newCoach.lastName.isValid = false;
            this.isFormValid = false
          }
          if(this.newCoach.description.value === ""){
            this.newCoach.description.isValid = false;
            this.isFormValid = false
          }
          if(!this.newCoach.hourlyRate.value || this.newCoach.hourlyRate < 0){
            this.newCoach.hourlyRate.isValid = false;
            this.isFormValid = false
          }
          if(this.newCoach.areas.value.length === 0){
            this.newCoach.areas.isValid = false;
            this.isFormValid = false
          }
        },
        submitForm(){
          this.ValidateForm();
          if(this.isFormValid){
            const confirmCoach = {
              firstName:this.newCoach.firstName.value,
              lastName:this.newCoach.lastName.value,
              description:this.newCoach.description.value,
              hourlyRate:this.newCoach.hourlyRate.value,
              areas:this.newCoach.areas.value,
            }
            this.$emit('addCoach', confirmCoach);
            this.$router.replace('/coaches');
          }
        }
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