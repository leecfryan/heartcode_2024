'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Confetti from 'react-confetti'
import { Star, Trophy, ThumbsUp, BadgeCheck } from 'lucide-react'

// Extend the Window interface to include webkit prefixed AudioContext
declare global {
    interface Window {
        webkitAudioContext?: typeof AudioContext;
    }
}

// Results Effects Component
export const QuizResultsEffects = ({
    score,
    totalQuestions,
}: {
    score: number,
    totalQuestions: number,
}) => {
    // Calculate performance percentage
    const percentage = Math.round((score / totalQuestions) * 100)

    // Determine performance tier
    const getPerformanceTier = () => {
        if (percentage >= 90) return 'Excellent'
        if (percentage >= 70) return 'Good'
        if (percentage >= 50) return 'Average'
        return 'Needs Improvement'
    }

    // Choose appropriate icon and animation based on score
    const renderResultIcon = () => {
        const iconProps = {
            className: "w-24 h-24 text-yellow-500 animate-bounce",
            strokeWidth: 1.5
        }

        switch (getPerformanceTier()) {
            case 'Excellent':
                return <Trophy {...iconProps} />
            case 'Good':
                return <Star {...iconProps} />
            case 'Average':
                return <ThumbsUp {...iconProps} />
            default:
                return <BadgeCheck {...iconProps} />
        }
    }

    // Sound effect (if browser supports)
    useEffect(() => {
        try {
            // Use type-safe audio context initialization
            const AudioContext = window.AudioContext || window.webkitAudioContext;

            if (AudioContext) {
                const audioContext = new AudioContext()

                // Different sounds based on performance
                const frequencies = {
                    'Excellent': [523.25, 659.25, 783.99], // C5, E5, G5 chord
                    'Good': [440, 554.37, 659.25], // A4, C#5, E5 chord
                    'Average': [392, 493.88, 587.33], // G4, B4, D5 chord
                    'Needs Improvement': [261.63, 329.63, 392] // C4, E4, G4 chord
                }

                const performanceTier = getPerformanceTier()
                const chordFrequencies = frequencies[performanceTier]

                chordFrequencies.forEach(freq => {
                    const oscillator = audioContext.createOscillator()
                    const gainNode = audioContext.createGain()

                    oscillator.type = 'sine'
                    oscillator.frequency.setValueAtTime(freq, audioContext.currentTime)

                    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime)
                    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 1)

                    oscillator.connect(gainNode)
                    gainNode.connect(audioContext.destination)

                    oscillator.start()
                    oscillator.stop(audioContext.currentTime + 0.5)
                })
            }
        } catch (error) {
            console.log('Audio not supported', error)
        }
    }, [score])

    return (
        <div className="relative">
            {/* Confetti Effect */}
            <Confetti
                width={window.innerWidth}
                height={window.innerHeight}
                recycle={false}
                numberOfPieces={percentage > 50 ? 200 : 50}
            />

            {/* Animated Background */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`p-6 rounded-xl shadow-2xl 
            ${percentage >= 90 ? 'bg-gradient-to-r from-green-400 to-blue-500' :
                        percentage >= 70 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' :
                            percentage >= 50 ? 'bg-gradient-to-r from-blue-400 to-purple-500' :
                                'bg-gradient-to-r from-red-400 to-pink-500'}`}
            >
                {/* Result Icon */}
                <div className="flex justify-center mb-4">
                    {renderResultIcon()}
                </div>

                {/* Performance Message */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center text-white"
                >
                    <p className="text-xl">
                        Score: {score} / {totalQuestions}
                    </p>
                    <p className="text-xl font-semibold">
                        Performance: {getPerformanceTier()}
                    </p>
                    <p className="text-lg mt-2">
                        {percentage >= 90 ? "Outstanding! Fantastic job!" :
                            percentage >= 70 ? "Great work! Keep learning!" :
                                percentage >= 50 ? "Good effort! You can improve." :
                                    "Keep studying and stay informed!"}
                    </p>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default QuizResultsEffects