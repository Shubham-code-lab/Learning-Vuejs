<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: validInput === 'Invalid' }">
      <label for="user-name">Your Name</label>
      <!-- @blur trigger when input lose focus  -->
      <!-- @input  -->
      <input id="user-name" name="user-name" type="text" @blur="checkValidInput" v-model.trim="userName" />
      <p v-if="validInput === 'Invalid'">Please input a valid input</p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <!-- v-model= when used on type= number will set variable userAge to type number  -->
      <!-- v-model.number= no need but it forces to get number type but no need as it does automatically -->
      <!-- ref=   while ref return string -->
      <input id="age" name="age" type="number" v-model='userAge' ref="userAge" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <!--v-model option value are automatically store in refferrer varibale  -->
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <div>
        <!-- for single checkbox v-model return a true or false value -->
        <input type="checkbox" id="accept-term" name="accept-term" v-model="confirm">
        <label for="accept-term"> Accpet terms and condition</label>
      </div>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <!-- when we have multiple checkboxes v-model create group of value and store it in  varibale(insterest)-->
      <div>
        <input id="interest-news" name="interest" type="checkbox" value="news" v-model="interest" />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input id="interest-tutorials" name="interest" type="checkbox" value="tutorials" v-model="interest" />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input id="interest-nothing" name="interest" type="checkbox" value="nothing" v-model="interest" />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <!-- in radio button only one value is select at a time so v-model does not return array but retrun a single value-->
      <div>
        <input id="how-video" name="how" type="radio" value="Video Courses" v-model="learningMethod" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input id="how-blogs" name="how" type="radio" value="Blogs" v-model="learningMethod" />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input id="how-other" name="how" type="radio" value="Other" v-model="learningMethod" />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">
      <rating-option v-model="rating"></rating-option>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<script>
import RatingOption from './RatingOption.vue';

export default {
  components: { RatingOption },
  data() {
    return {
      userName: '',
      userAge: null,      //we can't set to empty string '' or 0 becoz zero is also a number that user might enter so we set it to null
      referrer: 'wom',    //wom represent default value of dropdown box
      interest: [],       //[] is an empty array which contain list of value selected by user by checking the checkbox
      learningMethod: null, //
      confirm: false,
      validInput: 'Pending',
      rating: null
    };
  },
  methods: {
    submitForm() {
      console.log(this.userName);
      console.log(this.userAge);                 //display data as number or string depend on type of input tag
      console.log(this.$refs.userAge.value);     //display data as string data type only
      console.log(this.referrer);                 //display the option selected in select tag we can also set default option selected   
      console.log(this.interest);
      console.log(this.learningMethod);
      console.log(this.confirm);
      console.log(this.rating);

      //Reset values
      this.userName = ''
      this.userAge = null
      this.referrer = 'wom'
      this.interest = []
      this.learningMethod = null;
      this.confirm = false;
      this.rating = null;
    },
    checkValidInput() {
      if (this.userName === '')
        this.validInput = 'Invalid'
      else this.validInput = 'Pending'
    }
  },
};
</script>


<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid input {
  border-color: red;
}

.form-control.invalid label {
  color: red;
}

label {
  font-weight: bold;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox']+label,
input[type='radio']+label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>