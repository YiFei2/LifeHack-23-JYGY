<template>
  <div> data : {{ data }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'HomePage',
  setup () {
    const data = 'abc'
    return { data };
  }
})
</script>