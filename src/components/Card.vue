<template>
  <div :class="{'guessed': isGuessed}"
       class="card"
       @click="clicked" >
    <img v-if="isOpen || isGuessed"
         :src="image"
         class="pic">
  </div>
</template>

<script>
export default {
  props: {
    isGuessed: {
      type:    Boolean,
      default: false,
    },
    isOpen: {
      type:    Boolean,
      default: false,
    },
    image: {
      type:    String,
      require: true,
      default: '',
    },
  },
  methods: {
    clicked() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
  .card {
    margin: 10px;
    padding: 10px;
    width: 75px;
    height: 75px;
    vertical-align: middle;
    text-align: center;
    border: 1px solid black;
    box-sizing: border-box;
    display: table-cell;
  }
  .guessed {
    border: 2px solid red;
    box-sizing: border-box;
  }

  .pic {
    height: 100%;
    width: 100%;
  }
</style>
