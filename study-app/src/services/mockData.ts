import { LinkedList } from 'src/common/LinkedList'
import {
  subject,
  chapter,
  quiz,
  question,
} from './../services/dataTypes'


const contentStore = new Map<string, Map<string, string>>() // map each subject to chapter, and store content of each chapter
const quizStore = new Map<string, Map<string, quiz>>()

const subjects : subject[] = [
  {
    name: 'Math',
    subject_id: 'Math',
    chapters : new LinkedList<chapter>()
  }, 
  {
    name: 'Chemistry',
    subject_id: 'Chem',
    chapters : new LinkedList<chapter>()
  }
]

const chapters : chapter[] = [
  {
    chapter_id: 'math_1',
    title: 'Intro to quadration equation',
    chapter_content: 'sth sth',
    subject_id: 'Math',
  },
  {
    chapter_id: 'math_2',
    title: 'Linear Algebra',
    chapter_content: 'sth sth',
    subject_id: 'Math',
  },
  {
    chapter_id: 'chem_1',
    title: 'Intro to chemistry',
    chapter_content: 'sth sth',
    subject_id: 'Chem',
  },
  {
    chapter_id: 'chem_2',
    title: 'second chapter of chemistry',
    chapter_content: 'sth sth',
    subject_id: 'Chem',
  },
]

const quizzes : quiz[] = [
  {
    quiz_id : 'quiz 1',
    questions: [
      {
        question_id : '1',
        question: 'what is the name of the chapter?',
        answer: 'chapter 1',
      },
      {
        question_id : '1',
        question: 'what is the name of the chapter?',
        answer: 'chapter 1',
      },
    ],
    chapter_id: 'math_1',
  }
]


// const contentInputs : contentInput[]= [
//   {
//     content : 'content 1',
//     entry_date: new Date(),
//     id: '1',
//     chapter_id: '1',
//   },
//   {
//     content : 'content 2',
//     entry_date: new Date(),
//     id: '2',
//     chapter_id: '1',
//   },
//   {
//     content : 'abcd',
//     entry_date: new Date(),
//     id: '3',
//     chapter_id: '2',
//   },
// ]



const mockData = () => {
  return {
    subjects,
    chapters,
    quizzes
  }
}

export default mockData