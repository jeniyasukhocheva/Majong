<template>
  <div>
    <button @click="startGame">Press here to start!</button>
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
