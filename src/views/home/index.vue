<template>
  <div class="home-wrap">
    <h1>
      {{ name }}
    </h1>
    <p>
      {{
        $store.state.foo
      }}
    </p>
    <p>
      {{
        store.state.foo
      }}
    </p>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from '@/store'

const name = 'home'
const store = useStore()
console.log(store.state.count)
</script>
<style lang="scss" scoped>
.home-wrap {
  h1 {
    color: $color;
  }
}
</style>
