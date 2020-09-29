<template>
  <div>
    <qzd-cell title="单元格1" clearable :data="haha" @clear="inputClear">
      <input v-model="haha" placeholder="请输入" />
    </qzd-cell>
    <qzd-cell title="单元格2" required>
      <input v-model="haha2" placeholder="请输入" />
    </qzd-cell>
    <qzd-cell title="单元格3">hahaha</qzd-cell>
    <qzd-cell title="单元格4" required arrow>
      <qzd-popup-select
        :data="list"
        v-model="text"
        placeholder="请选择"
        :options="options"
      ></qzd-popup-select>
    </qzd-cell>
  </div>
</template>

<script>
export default {
  data() {
    return {
      haha: '1233',
      haha2: '',
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
    inputClear() {
      this.haha = ''
    },
    inputClear2() {
      this.haha2 = ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
