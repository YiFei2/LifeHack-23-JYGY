<template>
  <div> subjectID : {{ subjectId }} </div>
  <q-list
    v-for="chapter in filteredChapters" 
    :key="chapter.chapter_id"
    bordered
    style="max-width: 320;"
  >
    <q-item clickable v-ripple @click="goContentPage(chapter.chapter_id)">
      <q-item-section> {{ chapter.title }}</q-item-section>
    </q-item>
  </q-list>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router'
import mockData from 'src/services/mockData';

export default defineComponent({
  name: 'SubjectPage',
  setup() {
    const route = useRoute()
    const subjectId = route.params.subject_id
    const { chapters } = mockData()

    const filteredChapters = chapters.filter((chapter) => chapter.subject_id == subjectId)

    const router = useRouter()
    const goContentPage =  async (chapter_id : string) => {
      await router.push(`/chapters/${chapter_id}`)
    }

    return {
      subjectId,
      filteredChapters,
      goContentPage
    }
  }
})
</script>