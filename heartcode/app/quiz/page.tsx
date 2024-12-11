import Quiz from '@/components/quiz/quiz'

export default function QuizPage() {
    return (
        <div className="container w-screen mx-auto px-4 py-8 justify-center ml-16">
            <h1 className="text-3xl font-bold text-center mb-10 ">Quiz Time!</h1>
            <Quiz />
        </div>
    )
}

