import Image from "next/image";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Link from "next/link";

const mockChats = [
    {   
        id: 123456789,
        initialPrompt: 'Me fale sobre a revolução industrial',
        chatId: 2345
    }, 

    {
        id: 123456789,
        initialPrompt: 'Qual o nome oficial da raça linguicinha?',
        chatId: 2345
    },
]

export default function Sidebar() {
    return (
        <div className="h-screen w-72 bg-gray-800 md:absolute xl:block hidden">
            <div className="flex flex-col w-full h-full p-2">
                <Button className="mb-7">Novo chat</Button>

                <ScrollArea className="h-[400px] space-y-2 text-white">
                    {mockChats.map(chat => (
                        <button key={chat.id} className="my-3 w-full">
                            <div className="flex flex-row items-center justify-around">
                                <div>
                                    <p className="text-sm text-left">
                                        {chat.initialPrompt.length > 30 ? chat.initialPrompt.slice(0,30) + "...": chat.initialPrompt}
                                    </p>
                                </div>
                                <div>
                                    <button className="bg-transparent">
                                        <Image src="/./delete.png" alt="Excluir chat" width={15} height={15} />
                                    </button>
                                </div>   
                            </div>
                            <hr  className="border-gray-700 mt-2"/>
                        </button>
                    ))}
                    
                </ScrollArea>
            </div>

            <div className="relative bottom-20 p-2 text-white">
                <div className="flex flex-row items-center justify-between pr-2">
                    <div className="flex flex-row items-center">
                        <Avatar className="mr-3 w-8 h-8">
                            <AvatarFallback>US</AvatarFallback>
                            <AvatarImage src="./user.png"></AvatarImage>
                        </Avatar>

                        <p>username</p>
                    </div>
                    
                    <div>
                        <Link href="/" className="text-red-600 bg-transparent">sair</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}