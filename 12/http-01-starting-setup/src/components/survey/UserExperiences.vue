// loading error empty data
<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadExperiences">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">....Loading</p>
      <p v-else-if="error">{{ error }}</p>
      <p v-else-if="!results || results.length === 0">No stored experiences found. Starting adding some survey result
      </p>
      <ul v-else>
        <survey-result v-for="result in results" :key="result.id" :name="result.name" :rating="result.rating">
        </survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: true,
      error: null
    };
  },
  methods: {
    loadExperiences() {
      this.error = null;
      //then execute when data is arrive at the client side becoz javascript don't pause or app don't freeze on server request
      fetch('https://vue-http-demo-ac3b1-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json').then((response) => {
        if (response.ok) {                    //weather it is successfull request or not //404 error
          return response.json();             //to parce or convert the data we recieve we use json which in then return promise that we again return usgin return keyword
        }
      }).then((datas) => {
        this.isLoading = false;
        console.log(datas);
        const result = []
        for (const id in datas) {
          result.push({ id: id, name: datas[id].name, rating: datas[id].rating });
        }
        this.results = result;
      }).catch(error => {       //error due to sending data to invalid link
        this.isLoading = false;
        console.log(error);
        this.error = 'Server site error'
      });
    }
  },
  mounted() {
    this.loadExperiences();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>