<template>
  <div class="row">
    <q-input 
      type="textarea"
      v-model="textRef" 
      outlined
      style="width: 500px;"
    />
    <q-icon name="question-exchange"/>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name : 'ContentBox',
  props: {
    text: { type : String}
  },
  setup(props) {
    const textRef = ref(props.text)
    return {
      textRef
    }
  }
})

</script>