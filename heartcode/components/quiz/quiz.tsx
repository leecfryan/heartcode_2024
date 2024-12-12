'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { BackgroundGradient } from '../ui/background-gradient'

// Define the structure for a question
interface Question {
    id: number
    text: string
    options: string[]
    correctAnswer: string
}

// Sample quiz questions
const questions: Question[] = [
    {
        id: 1,
        text: "What is drug abuse?",
        options: ["Using prescription drugs as directed by a doctor", "Using illegal drugs or misusing prescription drugs", "Taking over-the-counter medication for minor illnesses","Drinking coffee to stay awake"],
        correctAnswer: "Using illegal drugs or misusing prescription drugs"
    },
    {
        id: 2,
        text: "Which of the following is considered an illegal drug?",
        options: ["Paracetamol", "Cocaine", "Ibuprofen", "Antihistamines"],
        correctAnswer: "Cocaine"
    },
    {
        id: 3,
        text: "Long-term drug abuse can lead to which of the following mental health issues?",
        options: ["Anxiety and depression", "Schizophrenia", "Cognitive impairment", "All of the above"],
        correctAnswer: "Anxiety and depression"
    },
    {
        id: 4,
        text: "What are the social consequences of drug abuse?",
        options: ["Strained relationships", "Loss of employment", "Financial difficulties", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        id: 5,
        text: "Which of the following can help prevent drug abuse?",
        options: ["Education and awareness programs", "Supportive family and peer networks", "Healthy coping mechanisms for stress", "All of the above"],
        correctAnswer: "All of the above"
    },
    {
        id: 6,
        text: "If you suspect someone is abusing drugs, what is the best way to help them?",
        options: ["Ignore them until they stop", "Offer judgment and criticism", "Encourage them to seek professional help", "Avoid talking about the issue"],
        correctAnswer: "Encourage them to seek professional help"
    }
]

export default function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [userAnswers, setUserAnswers] = useState<string[]>(new Array(questions.length).fill(''))
    const [quizCompleted, setQuizCompleted] = useState(false)
    const [score, setScore] = useState(0)

    const handleAnswerChange = (value: string) => {
        const newAnswers = [...userAnswers]
        newAnswers[currentQuestionIndex] = value
        setUserAnswers(newAnswers)
    }

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        }
    }

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1)
        }
    }

    const handleSubmit = () => {
        let newScore = 0
        questions.forEach((question, index) => {
            if (question.correctAnswer === userAnswers[index]) {
                newScore++
            }
        })
        setScore(newScore)
        setQuizCompleted(true)
    }

    const currentQuestion = questions[currentQuestionIndex]

    if (quizCompleted) {
        return (
            <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
            <Card className="w-full mx-auto mt-8">
                <CardHeader>
                    <CardTitle>Quiz Completed!</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg font-semibold">Your score: {score} out of {questions.length}</p>
                </CardContent>
            </Card>
            </BackgroundGradient>
        )
    }

    return (
        <BackgroundGradient className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Card className="w-full mt-8">
            <CardHeader>
                <CardTitle>Question {currentQuestion.id} of {questions.length}</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-lg mb-4">{currentQuestion.text}</p>
                <RadioGroup value={userAnswers[currentQuestionIndex]} onValueChange={handleAnswerChange}>
                    {currentQuestion.options.map((option, index) => (
                        <div key={index} className="flex items-center space-x-2 mb-2">
                            <RadioGroupItem value={option} id={`option-${index}`} />
                            <Label htmlFor={`option-${index}`}>{option}</Label>
                        </div>
                    ))}
                </RadioGroup>
            </CardContent>
            <CardFooter className="flex justify-between">
                <Button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
                    Previous
                </Button>
                {currentQuestionIndex === questions.length - 1 ? (
                    <Button onClick={handleSubmit}>Submit</Button>
                ) : (
                    <Button onClick={handleNextQuestion}>Next</Button>
                )}
            </CardFooter>
        </Card>
        </BackgroundGradient>
    )
}

