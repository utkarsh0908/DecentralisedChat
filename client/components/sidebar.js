import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import proPic from '../public/propic.jpg'
import Room from '../components/room'
import Navbar from '../components/navbar'
import def from '../public/default.png'
import DmSection from '../components/dmSection'

const sidebar = () => {
  const [channels, setChannels] = useState([])
  
  const router = useRouter()

  useEffect(() => {
    (async () => {
      try{
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/getchannels`,
      )
      const data = await response.json()
      setChannels(data)

      router.push(`/?channel=${data[0].roomId}&name=${data[0].roomName}`)
    } catch (error) {
        console.error(error)
    }
  })()
}, [])


  return (
    <div>
      <div>
        <Navbar profile={proPic}/>
        <DmSection/>
      </div>
      <div className='cursor-pointer'>
          {channels?.map((channel, index)=>(
            <Room
              key = {index}
              id = {channel.roomId}
              avatar = {channel.avatar ? channel.avatar : def}
              name = {channel.roomName}
            />
          ))}
      </div>
      
    </div>
  )
}

export default sidebar