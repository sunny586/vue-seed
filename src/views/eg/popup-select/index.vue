<template>
  <div class="eg-popup-select">
    <div class="eg-block-title">单选</div>
    <qzd-cell title="公司名称" required arrow>
      <qzd-popup-select
        :data="list"
        v-model="text"
        placeholder="请选择"
        :options="options"
      ></qzd-popup-select>
    </qzd-cell>
    <div class="eg-block-title">级联</div>
    <qzd-cell title="公司名称" required arrow>
      <qzd-popup-select
        :data="list2"
        v-model="text2"
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
      text: ['taobao'],
      list: [
        { name: '京东', code: 'jd' },
        { name: '天猫', code: 'tianmao' },
        { name: '淘宝', code: 'taobao' }
      ],
      options: {
        value: 'code',
        label: 'name'
      },
      list2: [
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
      text2: []
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.f-card {
  display: flex;
  height: 55px;
  line-height: 55px;
  padding-right: 16px;
  border-bottom: 1px solid #ededed;
  .f-k {
    width: 120px;
    font-size: 16px;
    color: #0a0a17;
    padding-left: 16px;
  }
  .f-v {
    flex: 1;
    font-size: 16px;
    color: #0a0a17;
    text-align: right;
    position: relative;
    outline: none;
    border: none;
    .f-txt {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 225px;
    }
    .hy-arrow-right {
      position: absolute;
      top: 19px;
      width: 10px;
      right: -16px;
    }
  }
  .red {
    color: red;
  }
}
</style>
