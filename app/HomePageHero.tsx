import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FaExternalLinkAlt } from "react-icons/fa";
import FaLockupHorizontalTextPurpleOrange from "@/components/images/FaLockupHorizontalTextPurpleOrange"

export default function HomePageHero() {
    const quickstarts = [
        { title: "Angular", description: "Set up a server-side application with Node.js", link: "/quickstart/angular" },
        { title: "Express", description: "Fast, unopinionated, minimalist web framework for Node.js", link: "/quickstart/express" },
        { title: "Next.js", description: "Build a full-stack web application with Next.js", link: "/quickstart/next" },
        { title: "React", description: "Create a single-page application with React", link: "/quickstart/react" },
        { title: "Vue.js", description: "Develop a reactive frontend with Vue.js", link: "/quickstart/vue" },
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                    {"$ cat /etc/passwd"}
                                </h1>
                                <p className="mx-auto max-w-[700px] text-zinc-200 md:text-xl">
                                    sorry we meant
                                </p>
                                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl/none text-zinc-200">
                                    {"$ cat /etc/shadow"}
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
                    <div className="container px-4 md:px-6">
                        <div className="flex flex-col items-center space-y-4 text-center">
                            <FaLockupHorizontalTextPurpleOrange />
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl sr-only">
                                Auth.<br />Built for Devs, by Devs
                            </h2>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild variant="outline">
                                    <a href="https://fusionauth.io/pricing" target="_blank" rel="noopener noreferrer" className="flex gap-2">
                                        Pricing
                                        <FaExternalLinkAlt />
                                    </a>
                                </Button>
                                <Button asChild>
                                    <Link href="/learn">Learn FusionAuth</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 md:py-12">
                    <div className="container px-4 md:px-6">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Quickstarts</h2>
                        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {quickstarts.map((quickstart, index) => (
                                <Card key={index}>
                                    <CardHeader>
                                        <CardTitle>{quickstart.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{quickstart.description}</p>
                                    </CardContent>
                                    <CardFooter>
                                        <Button asChild>
                                            <Link href={quickstart.link}>Get Started</Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}