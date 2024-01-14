import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row items-center justify-center gap-2">
          <h1 className="font-bold text-center">Seja bem vindo</h1>
        </div>
        <Input type="text" placeholder="Email"/>
        <Input type="password" placeholder="Senha"/>
        <Button>Entrar</Button>
      </div>
    </div>
  )
}
