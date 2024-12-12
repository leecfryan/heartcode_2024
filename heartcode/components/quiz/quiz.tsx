'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { BackgroundGradient } from '../ui/background-gradient'
import { AlertCircle } from 'lucide-react'
import { useToast } from "@/hooks/use-toast";

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
        options: ["Using prescription drugs as directed by a doctor", "Using illegal drugs or misusing prescription drugs", "Taking over-the-counter medication for minor illnesses", "Drinking coffee to stay awake"],
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
    const { toast } = useToast();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
    const [userAnswers, setUserAnswers] = useState<string[]>(new Array(questions.length).fill(''))
    const [quizCompleted, setQuizCompleted] = useState(false)
    const [score, setScore] = useState(0)
    const [validationError, setValidationError] = useState<string | null>(null)

    const handleAnswerChange = (value: string) => {
        const newAnswers = [...userAnswers]
        newAnswers[currentQuestionIndex] = value
        setUserAnswers(newAnswers)
        // Clear any previous validation errors
        setValidationError(null)
    }

    const handleNextQuestion = () => {
        // Validate that an answer is selected
        if (!userAnswers[currentQuestionIndex]) {
            setValidationError("Please select an answer before proceeding.")
            return
        }

        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
            // Clear any previous validation errors
            setValidationError(null)
        }
    }

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1)
            // Clear any previous validation errors
            setValidationError(null)
        }
    }

    const handleSubmit = () => {
        // Validate that the last question has an answer
        if (!userAnswers[currentQuestionIndex]) {
            setValidationError("Please select an answer before submitting.")
            return
        }

        let newScore = 0
        questions.forEach((question, index) => {
            if (question.correctAnswer === userAnswers[index]) {
                newScore++
            }
        })
        let msg = ``;
        if (newScore == 0) {
            msg += 'It\'s okay—learning about drug awareness is important, and this is just the start.Review the information and try again!';
        }
        else if (newScore == 1) {
            msg += 'Every step counts! Take some time to revisit the facts about drug safety and come back stronger!';
        }
        else if (newScore == 2) {
            msg += 'Good try! Increasing your awareness about drugs can make a big difference. Keep learning!';
        }
        else if (newScore == 3) {
            msg += 'You\'re halfway there! Keep building your knowledge to make informed decisions about drug safety.';
        }
        else if (newScore == 4) {
            msg += 'Great effort! You\'re getting a solid understanding of drug awareness.Stay informed!';
        }
        else if (newScore == 5) {
            msg += 'Well done! You\'re showing strong knowledge about drug safety.Keep up the good work!';
        }
        else {
            msg += 'Excellent! You\'re highly aware of the facts about drugs.Share your knowledge to help others stay informed too!';
        };

        toast({
            title: `Quiz Result`,
            description: msg,
        });
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
                    {validationError && (
                        <div className="flex items-center text-red-500 mb-4">
                            <AlertCircle className="mr-2 h-5 w-5" />
                            <span>{validationError}</span>
                        </div>
                    )}
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