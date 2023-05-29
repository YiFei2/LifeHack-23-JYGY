<template>
  <div> subjectID : {{ subjectId }} </div>
  <q-list
    v-for="chapter in filteredChapters" 
    :key="chapter.chapter_id"
    bordered
    style="max-width: 320;"
  >
    <q-item clickable v-ripple>
      <q-item-section> {{ chapter.title }}</q-item-section>
    </q-item>
  </q-list>
  
</template>

<script>
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router'
import mockData from 'src/services/mockData';

export default defineComponent({
  name: 'SubjectPage',
  setup() {
    const router = useRoute()
    const subjectId = router.params.subject_id
    const { chapters } = mockData()

    const filteredChapters = chapters.filter((chapter) => chapter.subject_id == subjectId)

    return {
      subjectId,
      filteredChapters
    }
  }
})
</script>