<template>
    <base-card>
        <h2>Find your coach</h2>
        <span class="filter-option">
            <label for="frontend">frontend</label>
            <input type="checkbox" id="frontend" checked @change="updateFilter">
        </span>
        <span class="filter-option">
            <label for="backend">backend</label>
            <input type="checkbox" id="backend" checked @change="updateFilter">
        </span>
        <span class="filter-option">
            <label for="career">career</label>
            <input type="checkbox" id="career" checked @change="updateFilter">
        </span>
    </base-card>
</template>

<script>
export default {
    emits:['filterCoaches'],
    data(){
      return{
        filters:{
          frontend:true,
          backend: true,
          career:true,
        }
      }
    },
    methods: {
      updateFilter(event){
        const filterItem = event.target.id;
        const newUpdatedFilters = {
          ...this.filters,
          [filterItem]: event.target.checked,
        }
        this.filters = newUpdatedFilters
        this.$emit('filterCoaches',this.filters);
      }
    },
}
</script>

<style scoped>
    h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>