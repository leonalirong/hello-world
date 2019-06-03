<template>

  <li>{{todo}}--<button @click="delTodo">DEl</button></li>

</template>

<script>
export default {
  props: {
    todo: String,
    id:Number,
    index: Number
  },
  methods: {
    delTodo () {
      this.$emit('abc', this.index, this.id)
    }
  }
}
</script>

<style lang="sass">

</style>
