import {AiOutlineMail} from "react-icons/ai"
import {BsFillTelephoneFill} from "react-icons/bs"
import {AiOutlineUser,AiOutlineHeart,AiOutlineShoppingCart,AiOutlineSearch} from "react-icons/ai"
function App() {
  return (
    <>
      <header className=" bg-purple-500 text-white sm:flex sm:justify-between items-center p-3">
        <div>
          <span className="ml-4">
        <AiOutlineMail className="inline"/>123@gmail.com  </span>
        <span><BsFillTelephoneFill className="inline" /> (1234)6789</span>
        </div>
        <div >
          <span>Login<AiOutlineUser  className="inline " /> </span>
          <span> wishlist<AiOutlineHeart className="inline"/></span>
          <span><AiOutlineShoppingCart  className="inline" /> cart</span>
        </div>
      </header>
      <div className="nav sm:flex sm:justify-center text-purple-700	 capitalize items-center text-center ">
        <h1 className="text-purple-900 text-2xl font-bold">hekto</h1>
        <a href="#">home</a>
        <a href="#">product</a>
        <a href="#">blog</a>
        <a href="#">shop</a>
        <a href="#">contact</a>
        <span className="relative ">
          <input className="border-solid border-2 hover:border-dotted" type="text" />
          <AiOutlineSearch  className="absolute end-0 top-0 bottom-0 items-center" />
        </span>
      </div>
    </>
  )
}

export default App
