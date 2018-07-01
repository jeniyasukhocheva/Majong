<template>
  <div>
    <div v-for="(card, i) in cards"
         :key="i"
         class="card">{{ card }}</div>
    <button>Try again</button>
  </div>

</template>
<script>
export default {
  name: 'Game',
  data() {
    return {
      N:     2,
      M:     2,
      cards: [],
    };
  },
  computed: {
    size() {
      return Math.floor((this.N * this.M) / 2);
    },
  },
  mounted() {
    for (let i = 0; i < this.size; i++) {
      this.cards.push(i + 1, i + 1);
    }
  },
};
</script>

<style scoped>


  .card {
    margin: 10px;
    padding: 10px;
    width: 50px;
    height: 50px;
    vertical-align: middle;
    text-align: center;
    float: left;
    border: 1px solid black;
    background-color: green;
    display: table-cell;
  }
</style>
