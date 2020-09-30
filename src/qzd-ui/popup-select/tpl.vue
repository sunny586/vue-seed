<template>
  <div v-if="vm && vm.visiable" class="popup-select-tpl">
    <div class="top-btns">
      <div class="qx-btn">
        <span @click.stop="close()">取消</span>
      </div>
      <div class="ok-btn">
        <span @click.stop="submit()">确定</span>
      </div>
    </div>
    <picker
      :data="data.list"
      v-model="selected"
      :options="data.options"
      ref="vdPicker"
    ></picker>
  </div>
</template>

<script>
import Picker from '../picker/index.vue'

export default {
  props: {
    vm: {
      type: Object
    },
    data: {
      type: [Object, Array, String]
    }
  },
  components: {
    Picker
  },
  data() {
    return {
      selected: []
    }
  },
  created() {},
  methods: {
    close() {
      this.vm.close()
    },
    submit() {
      const list = this.$refs.vdPicker.getList()
      const l = this.getValueBy2arr(this.selected, list)
      this.vm.change(l)
    },
    getValueBy2arr(l1, l2) {
      if (l2 && l2.length > 0) {
        if (l1.length === l2.length) {
          return l1
        } else {
          const arr = l1
          l2.forEach((m, i) => {
            if (i > arr.length - 1) {
              arr.push(m[0])
            }
          })
          return arr
        }
      } else {
        return []
      }
    }
  },
  watch: {
    'vm.visiable': function(data) {
      if (data) {
        if (this.data && this.data.value) {
          this.selected = this.data.value
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.popup-select-tpl {
  padding-bottom: 12px;
  border-radius: 8px;
  .top-btns {
    display: flex;
    font-size: 16px;
    color: #427aff;
    padding: 8px 12px;
    .qx-btn {
      flex: 1;
      text-align: left;
    }
    .ok-btn {
      flex: 1;
      text-align: right;
    }
  }
}
</style>
