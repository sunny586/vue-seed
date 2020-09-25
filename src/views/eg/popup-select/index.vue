<template>
  <div class="eg-popup-select">
    <popup-select
      :data="list"
      v-model="text"
      placeholder="请选择公司"
      :options="options"
    ></popup-select>
  </div>
</template>

<script>
import PopupSelect from '@/qzd-ui/popup-select'

export default {
  components: {
    PopupSelect
  },
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
  }
}
</script>
