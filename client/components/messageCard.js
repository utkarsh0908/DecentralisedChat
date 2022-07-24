
const messageCard = ({ avatar, sender, timestamp, content }) => {
  if(content != null) return (
    <div>
        <div className="w-[50%] border-2 rounded-md p-2 m-2">
          <p className="text-xs">{sender}</p>

        <div className="flex justify-between items-center">
          <p className="">{content}</p>
          <p className="text-xs">{timestamp}</p>
        </div>

      </div>
    </div>
  )
}

export default messageCard