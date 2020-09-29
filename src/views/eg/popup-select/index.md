# Popup-Select 弹层选择框

### 代码演示

> 使用方法：

```html
<template>
  <qzd-cell title="公司名称" required arrow>
    <qzd-popup-select
      :data="list"
      v-model="text"
      placeholder="请选择"
      :options="options"
    ></qzd-popup-select>
  </qzd-cell>
</template>
```

```js
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
  methods: {}
}
```

#### Attributes

| 参数    | 说明       | 类型   |
| ------- | ---------- | ------ |
| data    | 数据源     | Array  |
| v-model | 选中的数据 | Array  |
| options | 配置项     | Object |
