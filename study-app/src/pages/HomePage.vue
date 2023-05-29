<template>
  <div className="row q-gutter-md"> 
    <q-card 
      v-for="subject in subjects" 
      :key="subject.subject_id"
      style="width: 100%; max-width: 250px; height: 250px"
      @click="goSubjectPage(subject.subject_id)"
    >
      <img src="https://cdn.quasar.dev/img/mountains.jpg">
      <q-card-section>
        <div> {{ subject.name }}</div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import mockData from 'src/services/mockData'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'HomePage',
  setup () {
    const { subjects } = mockData()
    const router = useRouter()

    const goSubjectPage = async (subject_id : string) => {
      await router.push(`/${subject_id}`)
    }

    return { 
      subjects,
      goSubjectPage
    }
  }
})
</script>