# Picker 选择器

### 代码演示

> 使用方法：

```html
<qzd-picker :data="list" v-model="selected" :options="options"></qzd-picker>
```

```js
export default {
  components: {},
  data() {
    return {
      selected: [],
      list: [
        {
          code: 'jd',
          name: '京东',
          children: [
            {
              code: 'jd-1',
              name: '京东-商品1'
            },
            {
              code: 'jd-2',
              name: '京东-商品2'
            },
            {
              code: 'jd-3',
              name: '京东-商品3'
            },
            {
              code: 'jd-4',
              name: '京东-商品4'
            }
          ]
        },
        {
          code: 'taobao',
          name: '淘宝',
          children: [
            {
              code: 'taobao-1',
              name: '淘宝-商品1'
            },
            {
              code: 'taobao-2',
              name: '淘宝-商品2'
            },
            {
              code: 'taobao-3',
              name: '淘宝-商品3'
            },
            {
              code: 'taobao-4',
              name: '淘宝-商品4'
            }
          ]
        },
        {
          code: 'tianmao',
          name: '天猫',
          children: [
            {
              code: 'tianmao-1',
              name: '天猫-商品1'
            },
            {
              code: 'tianmao-2',
              name: '天猫-商品2'
            },
            {
              code: 'tianmao-3',
              name: '天猫-商品3'
            },
            {
              code: 'tianmao-4',
              name: '天猫-商品4'
            }
          ]
        },
        {
          code: 'meituan',
          name: '美团',
          children: [
            {
              code: 'meituan-1',
              name: '美团-商品1',
              children: [
                {
                  code: 'meituan-1-1',
                  name: '美团-商品1-1'
                },
                {
                  code: 'meituan-1-2',
                  name: '美团-商品1-2'
                }
              ]
            },
            {
              code: 'meituan-2',
              name: '美团-商品2'
            },
            {
              code: 'meituan-3',
              name: '美团-商品3'
            },
            {
              code: 'meituan-4',
              name: '美团-商品4'
            }
          ]
        },
        {
          code: 'elm',
          name: '饿了么',
          children: [
            {
              code: 'elm-1',
              name: '饿了么-商品1'
            },
            {
              code: 'elm-2',
              name: '饿了么-商品2'
            },
            {
              code: 'elm-3',
              name: '饿了么-商品3'
            },
            {
              code: 'elm-4',
              name: '饿了么-商品4'
            }
          ]
        }
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

### API

#### Attributes

| 参数    | 说明       | 类型   |
| ------- | ---------- | ------ |
| data    | 数据源     | Array  |
| v-model | 选中的数据 | Array  |
| options | 配置项     | Object |
