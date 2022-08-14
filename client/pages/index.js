import Head from 'next/head'
import Sidebar from '../components/sidebar'
import ChatView from '../components/chatview'
import { useContext, useEffect } from "react"
import { ChatContext } from "../context/context"
import { useRouter } from 'next/router'

export default function Home() {
  const {currentAccount} = useContext(ChatContext)
  const router = useRouter()

  useEffect(()=>{
      !currentAccount ? router.push('login') : router.push('/')
  }, [currentAccount])

  return (
    <div className="flex justify-center items-center p-4 h-screen bg-[url('/bg.svg')] bg-cover bg-no-repeat">
      <Head>
      <title>Chat App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className='flex justify-center items-center h-full w-full bg-white border-2 rounded-md'>
        <div className='w-4/12 h-full'>
          <Sidebar/>
        </div>
        <div className='flex w-8/12 h-full'>
            <ChatView/>
        </div>
      </div>
    </div>
  )
}
