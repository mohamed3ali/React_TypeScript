import React from 'react'
import {Wrapper,ButtonWrapper} from './Question.Styles'

export type AnswerObject = {
    question: string
    answer: string
    correct: boolean
    correctAnswer: string
  }

type Props = {
    question: string
    answers: string[]
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void
    userAnswer: AnswerObject | undefined
    questionNr: number
    totalQuestions: number
}

const Question: React.FC<Props> = ({
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNr, 
    totalQuestions
}) => (
    <Wrapper>
        <p className='number'>
        Question: {questionNr} / {totalQuestions}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
        {answers.map((answer) => (
            <ButtonWrapper
            key={answer}
            correct={userAnswer?.correctAnswer === answer}
            userClicked={userAnswer?.answer === answer}
            >
            <button disabled={!!userAnswer} value={answer} onClick={callback}>
                <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
            </ButtonWrapper>
        ))}
        </div>
    </Wrapper>
)

export default Question