# Tab 选项卡

### 代码演示

> 使用方法：

```html
<qzd-tab
  class="ol-ly-tab"
  v-model="selectedIdx"
  :items="items"
  :options="options"
  @change="handleTabChange"
>
</qzd-tab>
```

```javascript
export default {
  data() {
    return {
      selectedIdx: 0,
      items: [
        { label: '首页' },
        { label: '推荐' },
        { label: 'Android' },
        { label: '前端' },
        { label: '后端' },
        { label: 'iOS' },
        { label: '产品' },
        { label: '人工智能' },
        { label: '设计' }
      ],
      options: {
        activeColor: '#1d98bd'
        // 可在这里指定labelKey为你数据里文字对应的字段
      }
    }
  }
}
```

## 可选的配置项：

| 配置项             | 类型    | 描述                                                                      | 默认值 |
| ------------------ | ------- | ------------------------------------------------------------------------- | ------ |
| labelKey           | String  | 指定 item 的文字部分在 item 对象中的 key                                  | label  |
| lineWidth          | Number  | fixBottom 为 false 时 tabbar 底部滑条高度                                 | 1px    |
| activeColor        | String  | 激活状态下字体以及滑条颜色                                                | red    |
| fixBottom          | Boolean | 是否固定在视图底部                                                        | false  |
| additionalX        | Number  | 近似等于超出边界时最大可拖动距离                                          | 50px   |
| reBoundExponent    | Number  | 惯性回弹指数(值越大，幅度越大，惯性回弹距离越长)                          | 10     |
| sensitivity        | Number  | 惯性滑动时的灵敏度(值越小，阻力越大),可近似认为手松开后速度减为零所需时间 | 1000ms |
| reBoundingDuration | Number  | 回弹动画 duration                                                         | 360ms  |

## 事件

| 事件名 | 参数        | 描述                       |
| ------ | ----------- | -------------------------- |
| change | item, index | 当前点击的 item 以及索引值 |
