import { LinkedList } from "src/common/LinkedList"

export interface subject {
  name: string,
  subject_id: string,
  chapters : LinkedList<chapter>
}

export interface chapter {
  chapter_id: string,
  title: string,
  chapter_content: string,
  subject_id: string, // subject that this chapter belongs to
}

// export interface contentInput {
//   content: string,
//   entry_date: Date,
//   id: string,
//   chapter_id: string, // chapter that this content belong to
// }

export interface question {
  question_id: string,
  question: string,
  answer: string
}

export interface quiz {
  quiz_id: string,
  questions: question[],
  chapter_id: string, // chapter this quiz belongs to
  // score? : number,
  // highestScore: number,
}


