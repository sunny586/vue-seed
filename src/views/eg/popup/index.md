# popup 弹层

### 代码演示

```html
<template>
  <div class="eg-popup">
    <qzd-button @click="testPopupTop()">top</qzd-button>
    <br />
    <qzd-button @click="testPopupBottom()">bottom</qzd-button>
    <br />
    <qzd-button @click="testPopupLeft()">left</qzd-button>
    <br />
    <qzd-button @click="testPopupRight()">right</qzd-button>
  </div>
</template>
```

```js
// test.vue
import Test from './test'

export default {
  data() {
    return {
      popTop: new this.$popup({
        component: Test,
        direction: 'top'
      }),
      popBottom: new this.$popup({
        component: Test,
        direction: 'bottom'
      }),
      popLeft: new this.$popup({
        component: Test,
        direction: 'left'
      }),
      popRight: new this.$popup({
        component: Test,
        direction: 'right'
      })
    }
  },
  methods: {
    testPopupTop() {
      this.popTop.open()
    },
    testPopupBottom() {
      this.popBottom.open()
    },
    testPopupLeft() {
      this.popLeft.open()
    },
    testPopupRight() {
      this.popRight.open()
    }
  },
  destroyed() {
    this.popTop.remove()
    this.popBottom.remove()
    this.popLeft.remove()
    this.popRight.remove()
  }
}
```

#### test.vue

```html
<template>
  <div>
    <div @click="haha()">haha</div>
  </div>
</template>
```

```js
export default {
  props: {
    // 接收popup的实例对象
    vm: {
      type: Object
    },
    // 接收popup的传入数据
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
```

### API

#### 构造函数

```js
new this.$popup({
  component: Test,
  direction: 'top',
  data: {}
})
```

接收 3 个参数，component 是弹层的内容；direction 是弹层的方向（top,bottom,left.right）；data 是传入到自组件的数据。

#### Methods

| 方法名 | 说明      | 参数   |
| ------ | --------- | ------ |
| open   | 打开弹层  | －     |
| close  | 关闭弹窗  | －     |
| update | 更新 data | Object |
| remove | 删除弹窗  | －     |
