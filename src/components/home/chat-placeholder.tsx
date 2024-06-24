import {Lock} from 'lucide-react'
import Image from 'next/image'
import {Button} from '../ui/button'

const ChatPlaceHolder = () => {
  return (
    <div className="flex w-3/4 flex-col items-center justify-center bg-gray-secondary py-10">
      <div className="flex w-full flex-col items-center justify-center gap-4 py-10">
        <Image src={'/desktop-hero.png'} alt="Hero" width={320} height={188} />
        <p className="mb-2 mt-5 text-3xl font-extralight">
          Download chatME Para o Windows
        </p>
        <p className="text-gray-primary w-1/2 text-center text-sm text-muted-foreground">
          Faça chamadas, compartilhe sua tela e tenha uma experiência mais
          rápida ao baixar o aplicativo do Windows.
        </p>

        <Button className="my-5 rounded-full bg-green-primary hover:bg-green-secondary">
          Obter na Microsoft Store
        </Button>
      </div>
      <p className="text-gray-primary mt-auto flex w-1/2 items-center justify-center gap-1 text-center text-xs text-muted-foreground">
        <Lock size={10} /> Suas mensagens pessoais são criptografadas de ponta a
        ponta
      </p>
    </div>
  )
}
export default ChatPlaceHolder
