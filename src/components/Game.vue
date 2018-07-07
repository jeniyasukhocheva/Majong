<template>
  <div>
    <div v-for="(card, i) in cards"
         :key="i"
         class="card"
         @click="press(i)" >
      {{ card.isOpen ? card.content : '--' }}
    </div>
    <button>Try again</button>
  </div>

</template>
<script>
export default {
  name: 'Game',
  data() {
    return {
      N:         2,
      M:         2,
      cards:     [],
      openCards: 0,
    };
  },
  computed: {
    size() {
      return Math.floor((this.N * this.M) / 2);
    },
  },
  mounted() {
    for (let i = 0; i < this.size; i++) {
      const card = {
        isOpen:  true,
        content: i + 1,
      };

      this.cards.push({ ...card }, { ...card });
    }
    setTimeout(this.hideAll, 3000);
  },
  methods: {
    press(i) {
      if (this.openCards === 0) {
        this.showCard(i);

        return;
      }

      if (this.openCards === 1) {
        if (this.cards[i].isOpen) {
          return;
        }
        this.showCard(i);
        setTimeout(this.hideAll, 1000);
      }
    },
    hideCard(i) {
      this.$set(this.cards[i], 'isOpen', false);
    },
    showCard(i) {
      this.$set(this.cards[i], 'isOpen', true);
      this.openCards++;
    },
    hideAll() {
      for (let i = 0; i < this.size * 2; i++) {
        this.hideCard(i);
      }
      this.openCards = 0;
    },
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
