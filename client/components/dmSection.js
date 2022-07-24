import React from 'react'
import DmCard from '../components/dmCard'
import { useState, useEffect } from 'react'

const dmSection = () => {
    const [dms, setDms] = useState([])

    useEffect(() => {
        (async () => {
          try{
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/getdms`,
          )
          const data = await response.json()
          setDms(data)
        } catch (error) {
            console.error(error)
        }
      })()
    }, [])
  return (
    <div className='cursor-pointer'>
        {
            dms.map((dm, index)=>(
                <DmCard
                    key={index}
                    name={dm.roomName}
                    id={dm.roomId}
                    avatar={
                    dm.avatar ||
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3OCSMFIW5fZ3vSN6yGpD-w-6SsL2_ZPA_sw&usqp=CAU'
                    }
                    status='online'
          />
            ))
        }
    </div>
  )
}

export default dmSection