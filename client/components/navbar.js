import { BsThreeDotsVertical } from 'react-icons/bs'
import { FaEthereum } from 'react-icons/fa'
import { useContext } from "react"
import { ChatContext } from "../context/context"

const navbar = ({profile}) => {
  const {roomname, currentAccount, connectWallet} = useContext(ChatContext)
  return (
    <div className="border-b-2">
    <div className="text-xl bg-[#f0f2f5]">

    <div className='p-2 flex flex-row justify-between items-center'>
      
      {currentAccount ? (
      <div className="border border-black rounded-3xl flex items-center p-2 text-base bg-[#dcdee0] cursor-pointer">
          <div><FaEthereum/></div>
          <span>{'|'}</span>
          {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
      </div>
      ) : (
        <div onClick={() => connectWallet()}>Connect Wallet</div>
      )}

        <BsThreeDotsVertical className="cursor-pointer"/>
    </div>
    </div>

  
    <div className="m-3">
    <div className="input-group relative flex flex-row flex-wrap items-stretch w-full mb-4">

      <input type="search" className="bg-[#f7f7f7] w-[86%] form-control relative flex-auto min-w-0 block px-3 py-1.5 text-base font-normal text-gray-700 bg-clip-padding rounded-xl rounded-r-none transition ease-in-out m-0 focus:text-gray-700 focus:border-[#04b2bb] focus:outline-none" placeholder="Search or start a new chat" aria-label="Search" aria-describedby="button-addon2"/>

      <button className="w-[14%] btn px-6 py-2.5 bg-[#04b2bb] text-white font-medium text-xs leading-tight uppercase rounded-xl rounded-l-none shadow-md hover:bg-[#04b2bbbd] hover:shadow-lg focus:bg-[#04b2bbbd]  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">

        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
        </svg>

      </button>
    </div>
    </div>
    </div>
  )
}

export default navbar