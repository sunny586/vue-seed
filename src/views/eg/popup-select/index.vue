<template>
  <div class="eg-popup-select">
    <div>{{ JSON.stringify(list) }}</div>
    <button @click="add()">添加</button>
    <qzd-popup-select
      :data="list"
      v-model="text"
      placeholder="请选择公司"
      :options="options"
    ></qzd-popup-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: ['taobao'],
      list: [
        { name: '京东', code: 'jd' },
        { name: '天猫', code: 'tianmao' },
        { name: '淘宝', code: 'taobao' }
      ],
      options: {
        value: 'code',
        label: 'name'
      }
    }
  },
  methods: {
    add() {
      this.list.push({ name: '美团', code: 'meituan' })
    }
  }
}
</script>
