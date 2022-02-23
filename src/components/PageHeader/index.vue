<template>
  <div class="header">
    <div>
      <slot name="title">
        <div class="title">
          <i :class="icon" />
          {{ title }}
        </div>
      </slot>
      <div class="content">
        <slot name="content">{{ content }}</slot>
      </div>
    </div>
    <div>
      <slot />
      <el-button v-if="showBack" round @click.stop="$router.go(-1)">
        返回
      </el-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageHeader',
   props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      default: ''
    },
    showBack: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: ''
    }
  },
  setup () {
    

    return {}
  }
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  // margin-bottom: 20px;
  border-bottom: 1px solid #e8eaec;
  background-color: #fff;
  padding:0 20px;
  .title {
    font-size: 20px;
    margin: 20px 0px;
  }
  .content {
    color: #909399;
    font-size: 14px;
    overflow-y: hidden;
    &:empty {
      display: none;
    }
  }
}
</style>