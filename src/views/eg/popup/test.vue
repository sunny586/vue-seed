<template>
  <div>
    <div @click="haha()">haha</div>
  </div>
</template>

<script>
export default {
  props: {
    vm: {
      type: Object
    },
    data: {
      type: [Object, Array, String]
    }
  },
  data() {
    return {}
  },
  methods: {
    haha() {
      this.vm.close()
    }
  }
}
</script>
