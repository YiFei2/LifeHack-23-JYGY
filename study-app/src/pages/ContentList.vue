<template>
  <q-list v-for="content in contentArr" :key="content.id">
    <ContentBox :text="content.content"/>
  </q-list>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ContentBox from './ContentBox.vue'
import { content } from 'src/services/dataTypes';

export default defineComponent({
  name : 'ContentList',
  components: {
    ContentBox,
  },
  props: {
    contentArr: {
      type: Object as () => content[],
    }
  }
})

</script>