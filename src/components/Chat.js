'use client'

import Image from "next/image"

import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from './ui/input'
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { ScrollArea } from "./ui/scroll-area"

import { useChat } from 'ai/react'

export default function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: "/api/chat",
    });

    return (
        <Card className="w-[1000px]">
            <CardHeader>
                <CardTitle>Pareto chat</CardTitle>
                <CardDescription>Conversação utilizando chatGPT</CardDescription>
            </CardHeader>

            <CardContent>
                <ScrollArea className="h-[400px] w-full space-y-4 pr-4">
                    {messages.map(message => (
                        <div key={message.id} className="flex gap-3 text-slate-600 text-sm mb-4">
                            {message.role === 'user' && (
                                <Avatar>
                                    <AvatarFallback>US</AvatarFallback>
                                    <AvatarImage src="./user.png"></AvatarImage>
                                </Avatar>
                            )}

                            {message.role === 'assistant' && (
                                <Avatar>
                                    <AvatarFallback>PR</AvatarFallback>
                                    <AvatarImage src="./logo-pareto.png"></AvatarImage>
                                </Avatar>
                            )}

                            <p className="leading-relaxed">
                                <span className="block font-bold text-slate-700">
                                    {message.role === 'user' ? "Humano" : "IA"}:
                                </span>
                                {message.content}
                            </p>
                        </div>
                    ))}
                </ScrollArea>
            </CardContent>

            <CardFooter>
                <form className="w-full flex gap-2" onSubmit={handleSubmit}>
                    <Input placeholder="Como posso ajudar?" value={input} onChange={handleInputChange} />
                    <Button>
                        <Image src="/./send.png" alt="Enviar" width={21} height={21} />
                    </Button>
                </form>
            </CardFooter>
        </Card>
    )
}