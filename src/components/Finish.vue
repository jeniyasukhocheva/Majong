<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">Congratulations!</h1>
        <hr>
        <h4>Attempts: {{ tries }}</h4>
        <h4>Click to start new game!</h4>
        <button class="btn btn-primary btn-lg"
                @click="$router.push({ name: 'Game' })">New game</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:  'Finish',
  props: {
    tries: {
      type:    Number,
      default: 0,
    },
  },
};
</script>
