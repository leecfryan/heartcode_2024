import HeroScrollDemo from "@/components/containerscroll/containerscroll";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

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
                        <Card className="bg-stone-300">
                            <CardHeader>
                                <CardTitle>Hi! I am Megan</CardTitle>
                                <CardDescription>
                                    I LOVE CATS AND I LOVE CATS AND I LOVE CATS AND I LOVE CATSSSSSS!!!!!!
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" defaultValue="Megan" disabled />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="username">Age</Label>
                                    <Input id="username" defaultValue="15" disabled />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="username">School</Label>
                                    <Input id="username" defaultValue="Yuan Ching Secondary School" disabled />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="username">Fun Fact</Label>
                                    <Input id="username" defaultValue="idk" disabled />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="cheyenne">
                        <Card className="bg-gray-300">
                            <CardHeader>
                                <CardTitle>Hi I am Cheyenne. I play with everything</CardTitle>
                                <CardDescription>
                                    I love singing, drawing, i play minecraft, roblox, path to nowhere and project sekai
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="name">Name</Label>
                                    <Input id="name" defaultValue="Cheyenne" disabled />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="username">Age</Label>
                                    <Input id="username" defaultValue="15" disabled />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="username">School</Label>
                                    <Input id="username" defaultValue="Geylang Methodist Secondary School" disabled />
                                </div>
                                <div className="space-y-1">
                                    <Label htmlFor="username">Fun Fact</Label>
                                    <Input id="username" defaultValue="i love amath (REAL)" disabled />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </div>
            </div>
        
    );
}