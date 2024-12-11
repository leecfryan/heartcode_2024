import HeroScrollDemo from "@/components/containerscroll/containerscroll";
import {
    Card,
    CardContent,
    CardDescription,
    //   CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Compare } from "@/components/ui/compare";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
export default function Home() {
    return (
        <div className="justify-center">
            <div className="mx-auto ml-36">
                <HeroScrollDemo></HeroScrollDemo>
            </div>

            <div className="mx-auto ml-64">
                <Tabs defaultValue="megan" className="w-[800px]">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="megan">Megan</TabsTrigger>
                        <TabsTrigger value="cheyenne">Cheyenne</TabsTrigger>
                    </TabsList>
                    <TabsContent value="megan">
                        <Card className="bg-zinc-300 dark:bg-zinc-800 shadow-red-500 drop-shadow-2xl mb-32 ">
                            <CardHeader>
                                <CardTitle className=" text-2xl">Hi! I am Megan.</CardTitle>
                                <CardDescription>
                                    I LOVE CATS AND I LOVE CATS AND I LOVE CATS AND I LOVE
                                    CATSSSSSS!!!!!!
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label className="text-xl" htmlFor="name">Name</Label>
                                    <Input id="name" defaultValue="Megan" disabled />
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-xl" htmlFor="username">Age</Label>
                                    <Input id="username" defaultValue="15" disabled />
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-xl" htmlFor="username">School</Label>
                                    <Input
                                        id="username"
                                        defaultValue="Yuan Ching Secondary School"
                                        disabled
                                    />
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-xl" htmlFor="username">Fun Fact</Label>
                                    <Input id="username" defaultValue="idk" disabled />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="cheyenne">
                        <Card className="bg-gray-300 dark:bg-gray-800 mb-32">
                            <CardHeader>
                                <CardTitle className="text-2xl">Hi! I am Cheyenne. I play with everything.</CardTitle>
                                <CardDescription>
                                    I love singing, drawing, i play minecraft, roblox, path to
                                    nowhere and project sekai
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label className="text-xl" htmlFor="name">Name</Label>
                                    <Input id="name" defaultValue="Cheyenne" disabled />
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-xl" htmlFor="username">Age</Label>
                                    <Input id="username" defaultValue="15" disabled />
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-xl" htmlFor="username">School</Label>
                                    <Input
                                        id="username"
                                        defaultValue="Geylang Methodist Secondary School"
                                        disabled
                                    />
                                </div>
                                <div className="space-y-1">
                                    <Label className="text-xl" htmlFor="username">Fun Fact</Label>
                                    <Input
                                        id="username"
                                        defaultValue="i love amath (REAL)"
                                        disabled
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>


            <h1 className="font-extrabold text-3xl text-center">Megan & Cheyenne Before and After HeartCode...</h1>

            <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 px-4 flex space-x-4 justify-center">
                <Compare
                    firstImage="https://assets.aceternity.com/code-problem.png"
                    secondImage="https://assets.aceternity.com/code-solution.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
                    slideMode="hover"
                />
                <Compare
                    firstImage="https://assets.aceternity.com/code-problem.png"
                    secondImage="https://assets.aceternity.com/code-solution.png"
                    firstImageClassName="object-cover object-left-top"
                    secondImageClassname="object-cover object-left-top"
                    className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
                    slideMode="hover"
                />
            </div>

        </div>
    );
}
