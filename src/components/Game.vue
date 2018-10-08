<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">Pick same cards!</h1>
        <hr>
        <div v-for="(line, i) in lines"
             :key="i"
             class="line">
          <app-card v-for="(card, j) in line"
                    :key="j"
                    :is-guessed="card.isGuessed"
                    :is-open="card.isOpen"
                    :image="card.content"
                    @click="press((i * colCount) + j)"/>
        </div>
        <button class="btn btn-outline-primary btn-lg btn-block"
                @click="startGame()">Try again</button>
      </div>
    </div>
  </div>


</template>
<script>
import shuffle from '../utils';
import randomPics from '../images';
import Card from './Card';

export default {
  name:       'Game',
  components: {
    'app-card': Card,
  },
  data() {
    return {
      rowsCount: 4,
      colCount:  6,
      cards:     [],
      openCards: [],
      tries:     0,
    };
  },
  computed: {
    size() {
      return Math.floor((this.rowsCount * this.colCount) / 2);
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
    lines() {
      const matr = [];
      let k = 0;

      for (let row = 0; row < this.rowsCount; row++) {
        const line = [];

        for (let col = 0; col < this.colCount; col++) {
          line.push(this.cards[k]);
          k++;
        }
        matr.push(line);
      }

      return matr;
    },
  },
  created() {
    this.startGame();
  },
  methods: {
    startGame() {
      this.openCards = 0;
      this.cards = [];
      this.tries = 0;

      const pics = randomPics(this.size);

      for (let i = 0; i < this.size; i++) {
        const card = {
          isOpen:    true,
          /* eslint-disable-next-line */
          content:   require(`../assets/images/${pics[i]}`),
          isGuessed: false,
        };

        this.cards.push({ ...card }, { ...card });
      }
      this.cards = shuffle(this.cards);
      setTimeout(this.hideAll, 1000);
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
        setTimeout(this.hideAll, 500);
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
  .line {
    justify-content: center;
    float: none;
    display: flex;
  }
  .btn{
    margin: auto;
  }
  .flip-enter-active {
    animation: flip-in 0.5s ease-out forwards;
  }


  .flip-leave-active {
    animation: flip-out 0.5s ease-out forwards;
  }

  @keyframes flip-out {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(90deg);
    }
  }

  @keyframes flip-in {
    from {
      transform: rotateY(90deg);

    }
    to {
      transform: rotateY(0deg);
    }
  }
</style>
