import { reactive } from 'vue'
import { content, question, answer} from 'src/services/dataTypes'

export const store = reactive({
  contentStore: <content[]>[],
  questionsStore: <question[]>[],
  answerStore: <answer[]>[]
})