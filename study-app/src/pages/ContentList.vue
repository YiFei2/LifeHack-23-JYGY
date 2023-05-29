<template>
  <q-list v-for="content in contentArr" :key="content">
    <ContentBox :text="content"/>
  </q-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContentBox from './ContentBox.vue'

export default defineComponent({
  name : 'ContentList',
  components: {
    ContentBox,
  },
  props : {
    contentArr : {}
  }
})

</script>