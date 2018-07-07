<template>
  <div>
    <div>
      <p>{{ tries }}</p>
    </div>
    <button @click="$router.push({ name: 'Game' })">New game</button>
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
