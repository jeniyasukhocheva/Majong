<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">Welcome!</h1>
        <hr>
        <h4>CLick to start the game!</h4>
        <button class="btn btn-primary btn-lg"
                @click="startGame">Start!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:    'Start',
  methods: {
    startGame() {
      this.$router.push({ name: 'Game' });
    },
  },

};
</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
