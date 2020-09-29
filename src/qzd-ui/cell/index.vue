<template>
  <div class="cell">
    <div class="f-k">
      {{ title }} <span v-if="required" class="red">*</span>
    </div>
    <div class="f-v">
      <div
        class="f-txt"
        :style="`${clearable && data ? 'padding-right:24px;' : ''}`"
      >
        <div class="slot-content">
          <slot></slot>
        </div>
        <img
          v-if="clearable && data"
          class="clear-icon"
          :src="require('../assets/icon_clear.png')"
          @click="clearClick()"
        />
      </div>
    </div>
    <div class="arrow-right" v-if="arrow">
      <img :src="require('../assets/arrow-right.png')" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    required: {
      type: Boolean,
      default: false
    },
    arrow: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    data: {
      type: [String, Object, Boolean, Array]
    }
  },
  data() {
    return {}
  },
  methods: {
    clearClick() {
      this.$emit('clear')
    }
  }
}
</script>

<style lang="scss" scoped>
.cell {
  display: flex;
  height: 55px;
  line-height: 55px;
  border-bottom: 1px solid #ededed;
  .f-k {
    width: 120px;
    font-size: 16px;
    color: #646566;
    padding-left: 16px;
  }
  .f-v {
    flex: 1;
    font-size: 16px;
    text-align: right;
    position: relative;
    .f-txt {
      height: 100%;
      position: relative;
      overflow: hidden;
      color: #323233;
      .slot-content {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 180px;
        height: 100%;
        float: right;
        padding-right: 2px;
        input {
          outline: none;
          border: none;
          text-align: right;
          width: 100%;
          height: 100%;
          display: block;
          color: inherit;
        }
      }
      .clear-icon {
        position: absolute;
        top: 0;
        right: 0;
        width: 18px;
        top: 51%;
        transform: translateY(-50%);
      }
    }
  }
  .arrow-right {
    width: 16px;
    position: relative;
    > img {
      width: 12px;
      height: 18px;
      display: block;
      position: absolute;
      top: 51%;
      transform: translateY(-50%);
    }
  }
  .red {
    color: red;
  }
}
</style>
