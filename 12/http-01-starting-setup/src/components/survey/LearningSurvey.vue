<template>
  <section>
    <base-card>
      <h2>How was you learning experience?</h2>
      <form @submit.prevent="submitSurvey">
        <div class="form-control">
          <label for="name">Your Name</label>
          <input type="text" id="name" name="name" v-model.trim="enteredName" />
        </div>
        <h3>My learning experience was ...</h3>
        <div class="form-control">
          <input type="radio" id="rating-poor" value="poor" name="rating" v-model="chosenRating" />
          <label for="rating-poor">Poor</label>
        </div>
        <div class="form-control">
          <input type="radio" id="rating-average" value="average" name="rating" v-model="chosenRating" />
          <label for="rating-average">Average</label>
        </div>
        <div class="form-control">
          <input type="radio" id="rating-great" value="great" name="rating" v-model="chosenRating" />
          <label for="rating-great">Great</label>
        </div>
        <p v-if="invalidInput">One or more input fields are invalid. Please check your provided data.</p>
        <div>
          <base-button>Submit</base-button>
        </div>
        <p v-if="error">{{ error }}</p>
      </form>
    </base-card>
  </section>
</template>

<script>
export default {
  data() {
    return {
      enteredName: '',
      chosenRating: null,
      invalidInput: false,
      error: null
    };
  },
  // emits: ['survey-submit'],
  methods: {
    submitSurvey() {
      this.error = null;
      if (this.enteredName === '' || !this.chosenRating) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;

      // this.$emit('survey-submit', {
      //   userName: this.enteredName,
      //   rating: this.chosenRating,
      // });

      fetch('https://vue-http-demo-ac3b1-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json', {   //suervs.json is unique key requied by firbase
        method: 'POST',         //sending data to server by default it is GET to get data other are PATCH to update DELETE to delete data
        headers: {
          'Content-Type': 'application/json'       //it tell that data sent is in json format
        },
        body: JSON.stringify({                    //Json.stringify convert javascript object into json format
          name: this.enteredName,
          rating: this.chosenRating
        })
      }).then(response => {
        if (response.ok) {
          //....
        } else {
          throw new Error('Could not save data');        //throw when sever don't recieve json object
        }
      }).catch(error => {                                //catch error for both invalid link and not json object
        console.log(error.message);
        this.error = error.message;
      });

      this.enteredName = '';
      this.chosenRating = null;
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

input[type='text'] {
  display: block;
  width: 20rem;
  margin-top: 0.5rem;
}
</style>