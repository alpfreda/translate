<template>
  <div class="pane">
    <div
      class="top-pane"
      :style="{ height: state.topHeight + '%' }"
    >
      <slot name="top-pane" />
    </div>
    <div
      class="divider"
      @mousedown="onResize"
      @touchstart="onResize"
    />
    <div
      class="bottom-pane"
      :style="{ height: state.bottomHeight + '%' }"
    >
      <slot name="bottom-pane" />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { onUnmounted, ref } from 'vue';

  const state = ref({
    isResizing: false,
    startY: 0,
    startHeightTop: 0,
    startHeightBottom: 0,
    topHeight: 40,
    bottomHeight: 60
  })

  const onResize = (event: MouseEvent | TouchEvent) => {
    state.value.isResizing = true
    state.value.startY =
      'touches' in event ? event.touches[0].clientY : event.clientY
    state.value.startHeightTop = state.value.topHeight
    state.value.startHeightBottom = state.value.bottomHeight

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('touchmove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('touchend', handleMouseUp)
  }

  const handleMouseMove = (event: MouseEvent | TouchEvent) => {
    if (state.value.isResizing) {
      const clientY =
        'touches' in event ? event.touches[0].clientY : event.clientY
      const offset = clientY - state.value.startY

      const newHeightTop =
        state.value.startHeightTop + (offset / window.innerHeight) * 100
      const newHeightBottom =
        state.value.startHeightBottom - (offset / window.innerHeight) * 100

      state.value.topHeight = Math.min(Math.max(newHeightTop, 0), 100)
      state.value.bottomHeight = Math.min(Math.max(newHeightBottom, 0), 100)
    }
  }

  const handleMouseUp = () => {
    state.value.isResizing = false

    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('touchmove', handleMouseMove)
    window.removeEventListener('mouseup', handleMouseUp)
    window.removeEventListener('touchend', handleMouseUp)
  }

  onUnmounted(() => {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('touchmove', handleMouseMove)
    window.removeEventListener('mouseup', handleMouseUp)
    window.removeEventListener('touchend', handleMouseUp)
  })
</script>
<style scoped>
  .pane {
    height: calc(100vh - 7.5rem);
    overflow: hidden;
  }
  .divider {
    background: url(@/assets/imgs/divider.svg) no-repeat center;
    color: #fff;
    width: 100%;
    height: 2rem;
    margin-bottom: 1.5rem;
    cursor: row-resize;
  }

  .top-pane,
  .bottom-pane {
    overflow: auto;
  }
</style>
