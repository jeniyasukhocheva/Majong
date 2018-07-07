<template>
  <div>
    <div v-for="(card, i) in cards"
         :key="i"
         :class="{'guessed': card.isGuessed}"
         class="card"
         @click="press(i)" >
      {{ card.isOpen || card.isGuessed ? card.content : '--' }}
    </div>
    <button @click="startGame()">Try again</button>
  </div>

</template>
<script>
import shuffle from '../utils';

export default {
  name: 'Game',
  data() {
    return {
      N:         3,
      M:         2,
      cards:     [],
      openCards: [],
      tries:     0,
    };
  },
  computed: {
    size() {
      return Math.floor((this.N * this.M) / 2);
    },
    guessedCards() {
      let counter = 0;

      for (let j = 0; j < this.cards.length; j++) {
        if (this.cards[j].isGuessed) {
          counter++;
        }
      }

      return counter;
    },
  },
  mounted() {
    this.startGame();
  },
  methods: {
    startGame() {
      this.openCards = 0;
      this.cards = [];
      this.tries = 0;
      for (let i = 0; i < this.size; i++) {
        const card = {
          isOpen:    true,
          content:   i + 1,
          isGuessed: false,
        };

        this.cards.push({ ...card }, { ...card });
      }
      this.cards = shuffle(this.cards);
      setTimeout(this.hideAll, 3000);
    },
    press(i) {
      if (this.openCards.length === 0) {
        this.showCard(i);
        this.tries++;

        return;
      }

      if (this.openCards.length === 1) {
        if (this.cards[i].isOpen) {
          return;
        }
        this.showCard(i);
        if (this.cards[this.openCards[0]].content ===
          this.cards[this.openCards[1]].content) {
          this.cards[this.openCards[0]].isGuessed = true;
          this.cards[this.openCards[1]].isGuessed = true;
          if (this.guessedCards === this.size * 2) {
            this.$router.push({ name: 'Finish', params: { tries: this.tries } });
          }
        }
        setTimeout(this.hideAll, 1000);
      }
    },
    hideCard(i) {
      this.$set(this.cards[i], 'isOpen', false);
    },
    showCard(i) {
      this.$set(this.cards[i], 'isOpen', true);
      this.openCards.push(i);
    },
    hideAll() {
      for (let i = 0; i < this.size * 2; i++) {
        this.hideCard(i);
      }
      this.openCards = [];
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
  .guessed {
    border: 2px solid red;
  }
</style>
