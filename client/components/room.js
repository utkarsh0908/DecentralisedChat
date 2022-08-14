import Image from "next/image"
import { useRouter } from "next/router"

const room = ({id, avatar, name}) => {
    const router = useRouter();
    const changeURL = () => {
        router.push(`?channel=${id}&name=${name}&avatar=${avatar}`)
    }
  return (
    <div>
        <div onClick={changeURL} className='m-2 flex flex-row border-b-2 p-2'>
            <Image src={avatar} height={48} width={48} alt = {name} className='rounded-3xl'/>
            <div className="mx-2">{name}</div>
        </div>
    </div>
  )
}

export default room