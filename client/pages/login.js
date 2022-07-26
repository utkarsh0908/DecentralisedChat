import { useContext, useEffect } from "react"
import { ChatContext } from "../context/context"
import { useRouter } from 'next/router'
import Image from 'next/image'


const login = () => {
    const {currentAccount, connectWallet} = useContext(ChatContext)
    const router = useRouter()

    useEffect(()=>{
      currentAccount ? router.push('/') : router.push('/login')
    }, [currentAccount])

  return (
    <div className="flex h-screen justify-center items-center bg-[url('/bg.svg')] bg-cover bg-no-repeat">
      <div className="h-1/2 w-1/5 flex flex-col justify-center items-center">
        <div className="mb-12">
          <Image src="/dec.png" height={180} width={165} alt="logo"/>
        </div>
        <div className="cursor-pointer flex justify-center items-center bg-transparent hover:bg-[#04b2bb]
         text-white font-semibold hover:text-white py-2 px-6 border border-white
          hover:border-transparent rounded-lg" onClick={() => connectWallet()}>
          <div className="mr-2 text-lg">Login with</div>
          <Image src="/metamask.png" height={30} width={30} alt="logo"/>
        </div>
      </div>
    </div>
  )
}

export default login