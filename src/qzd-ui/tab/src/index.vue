<template>
  <div class="ly-tab">
    <ly-tabbar
      v-model="selectedId"
      v-bind="options"
      :lineHeight="3"
      :lineLongRatio="1"
    >
      <ly-tab-item v-for="(item, index) in items" :key="index">
        <span v-if="options.fixBottom && item.icon" slot="icon">
          <i :class="item.icon"></i>
        </span>
        <span>{{ item[labelKey] }}</span>
      </ly-tab-item>
    </ly-tabbar>
  </div>
</template>

<script>
import LyTabbar from './tabbar.vue'
import LyTabItem from './tab-item.vue'

export default {
  name: 'LyTab',
  components: {
    LyTabbar,
    LyTabItem
  },
  props: {
    value: {
      type: Number,
      default: 0
    },
    items: {
      type: Array,
      default() {
        return []
      }
    },
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  created() {},
  data() {
    return {
      selectedId: this.value || 0
    }
  },
  computed: {
    labelKey() {
      return this.options.labelKey || 'label'
    }
  },
  watch: {
    value(value) {
      this.selectedId = value
    },
    selectedId(value) {
      this.$emit('input', value)
      this.$emit('change', this.items[value], value)
    }
  }
}
</script>
