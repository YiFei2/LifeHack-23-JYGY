import { LinkedList } from "src/common/LinkedList"

export interface subject {
  name: string,
  subject_id: string,
}

export interface chapter {
  chapter_id: string,
  chapter_name: string,
  chapter_content: LinkedList<contentInput>,
  subject_id: string, // subject that this chapter belongs to
}

export interface contentInput {
  content: string,
  entry_date: Date,
  id: string,
  prev_id: string,
  next_id: string,
  chapter_id: string, // chapter that this content belong to
}

export interface quiz {
  quiz_id: string,
  questions: question[],
  chapter_id: string, // chapter this quiz belongs to
  score? : number,
  highestScore: number,
}

export interface question {
  question_id: string,
  question: string,
  answer: string
}
