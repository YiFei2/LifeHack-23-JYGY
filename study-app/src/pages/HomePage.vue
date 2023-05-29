<template>
  <div className="q-gutter-md"> 
    <!-- <q-card 
      v-for="subject in subjects" 
      :key="subject.subject_id"
      style="width: 100%; max-width: 250px; height: 250px"
      @click="goSubjectPage(subject.subject_id)"
    >
      <img src="https://cdn.quasar.dev/img/mountains.jpg">
      <q-card-section>
        <div> {{ subject.name }}</div>
      </q-card-section>
    </q-card> -->

    <ContentList :content-arr="contentListRef"/>

    <q-btn color="white" textColor="black" label="Add Box" @click="addNewBox"/>

  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import mockData from 'src/services/mockData'
import { useRouter } from 'vue-router'
import ContentList from './ContentList.vue';
import { store } from 'src/services/store'

export default defineComponent({
  name: 'HomePage',
  components: {
    ContentList,
  },
  setup () {
    const { subjects } = mockData()
    const router = useRouter()

    const goSubjectPage = async (subject_id : string) => {
      await router.push(`/subjects/${subject_id}`)
    }

    const { contentStore, questionsStore, answerStore } = store
    const contentListRef = ref(contentStore)
    const addNewBox = () => {
      contentListRef.value.push({ id: String(Date.now()), content: ''})
    }

    return { 
      contentListRef,
      subjects,
      goSubjectPage,
      addNewBox
    }
  }
})
</script>