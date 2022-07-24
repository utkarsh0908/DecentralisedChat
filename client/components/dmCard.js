import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

const dmCard = ({ name, status, avatar, id }) => {
  const router = useRouter()

  const changeUrl = () => {
    router.push(`?conversation=${id}&name=${name}`)
  }

  return (
    <div onClick={changeUrl} className='m-2 flex flex-row border-b-2 p-2'>
      <div>
        <Image
          src={avatar}
          height={48}
          width={48}
          alt={name}
        />
        <div id={id} />
      </div>
      <p className="mx-2">{name}</p>
    </div>
  )
}

export default dmCard