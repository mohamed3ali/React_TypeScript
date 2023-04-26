
import axios from 'axios'
import { shuffleAnswers } from './utils'

export type Question = {
    category: string
    correct_answer: string
    difficulty: string
    incorrect_answers: string[]
    question: string
    type: string
}

export type QuestionState = Question & { answers: string[] }

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}
export const fetchQuizQuestions = async (amount: number, difficulty: Difficulty) => {
    const endpoint = `http://localhost:5000/${amount}/${difficulty}`
    const response = await axios.get(endpoint)

    return response.data.map((question: Question) => (
        {
            ...question,
            answers: shuffleAnswers([...question.incorrect_answers, question.correct_answer ])
        }
    ))
}