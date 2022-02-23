<template>
  <div class="page-main">
    <div v-if="$slots.title || title" class="title-container">
      <slot name="title">
        <i v-if="icon" :class="icon" class="pr-2" />
        {{ title }}
      </slot>
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageMain',
  props: {
    title: {
      type: String,
      default: ''
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
.page-main {
  position: relative;
  margin: 20px;
  padding: 20px;
  background-color: #fff;
  .title-container {
    width: calc(100% + 40px);
    padding: 14px 20px;
    margin-left: -20px;
    margin-top: -20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #eee;
  }
}
</style>