"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Confetti from "react-confetti";

const FormSchema = z.object({
    username: z
        .string({
            required_error: "Please enter a name",
        })
        .min(2, {
            message: "Name must be more than 2 characters long",
        })
        .max(20, {
            message: "Name must be no longer than 20 characters",
        }),
    question1: z.string({
        required_error: "Please select an option",
    }),
    question2: z.string({
        required_error: "Please select an answer",
    }),
    question3: z.string({
        required_error: "Please select an option",
    }),
});

export default function DrugAbuseQuiz() {
    const { toast } = useToast();
    const [isConfetti, setIsConfetti] = useState(false); // State to trigger confetti
    const [isSad, setIsSad] = useState(false); // State to trigger sad effect

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
        let score = 0;

        // Scoring logic based on responses
        if (data.question1 === "yes") {
            score += 1;
            setIsSad(true); // Trigger sad effect
            setIsConfetti(false); // Ensure confetti is not shown
        } else {
            setIsConfetti(true); // Trigger confetti effect
            setIsSad(false); // Ensure sad effect is not shown
        }

        if (data.question2 === "liver") {
            score += 1;
        }
        if (data.question3 === "impaired") {
            score += 1;
        }

        // Display feedback based on score
        let resultMessage = `You scored ${score} out of 3!`;

        if (score === 3) {
            resultMessage += " Excellent! You have good knowledge about drug abuse.";
        } else if (score === 2) {
            resultMessage += " Good effort, but there's room for improvement.";
        } else if (score === 1) {
            resultMessage += " You might want to study more on this topic.";
        } else {
            resultMessage += " Consider learning more about the effects of drug abuse.";
        }

        toast({
            title: `Quiz Result for ${data.username}`,
            description: resultMessage,
        });
    }

    return (
        <div className="flex justify-content">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormDescription>Please enter your name</FormDescription>
                                <FormControl>
                                    <Input placeholder="Enter your name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Question 1 */}
                    <FormField
                        control={form.control}
                        name="question1"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Do you currently use or have you ever used illegal drugs?</FormLabel>
                                <FormDescription>Select an option</FormDescription>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Please select an answer" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="yes">Yes</SelectItem>
                                        <SelectItem value="no">No</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Question 2 */}
                    <FormField
                        control={form.control}
                        name="question2"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Which organ is primarily responsible for metabolizing drugs in the body?</FormLabel>
                                <FormDescription>Select an option</FormDescription>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Please select an answer" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="liver">Liver</SelectItem>
                                        <SelectItem value="kidneys">Kidneys</SelectItem>
                                        <SelectItem value="heart">Heart</SelectItem>
                                        <SelectItem value="lungs">Lungs</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Question 3 */}
                    <FormField
                        control={form.control}
                        name="question3"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Which of the following is a common consequence of long-term drug abuse?</FormLabel>
                                <FormDescription>Select an option</FormDescription>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Please select an answer" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="impaired">Impaired brain function</SelectItem>
                                        <SelectItem value="improved">Improved cognitive function</SelectItem>
                                        <SelectItem value="memory_loss">Memory loss</SelectItem>
                                        <SelectItem value="neurotransmitter">Increased neurotransmitter production</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <Button type="submit" className="ransition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300">Submit</Button>
                </form>

                {/* Show Confetti if "No" is selected */}
                {isConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}

                {/* Show Sad effect if "Yes" is selected */}
                {isSad && (
                    <div className="text-4xl text-red-600">
                        <span role="img" aria-label="sad">😞</span>
                        <p>You selected Yes. Do you want to turn out like Whiskers?</p>
                    </div>
                )}
            </Form>
        </div>

    );
}
