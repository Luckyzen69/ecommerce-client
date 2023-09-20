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
          <select name="lang" id="lang" className=" bg-purple-500 capitalize" >
            <option value="eng">English</option>
            <option value="nep">Nepali</option>
            <option value="jap">japanese</option>
            <option value="kor">Korean</option>
          </select>
          <select name="dollar" id="dollar" className=" bg-purple-500 capitalize" >
            <option value="eng">USD</option>
            <option value="nep">RS</option>
            <option value="jap">YEN</option>
            <option value="kor">IDK</option>
          </select>
          <span>Login<AiOutlineUser  className="inline " /> </span>
          <span> wishlist<AiOutlineHeart className="inline"/></span>
          <span><AiOutlineShoppingCart  className="inline" /> cart</span>
        </div>
      </header>
      <div className="nav sm:flex justify-around text-purple-700	 capitalize  text-center  ">
      
        <h1 className="text-purple-900 text-2xl font-bold">hekto</h1>
       <select name="home" id="home" className="capitalize">
        <option value="home" className="hidden">home</option>
        <option value="product">chair</option>
        <option value="product">shofa</option>
        <option value="product">table</option>
        <option value="product">bed</option>
       </select>
        <a href="#">product</a>
        <a href="#">blog</a>
        <a href="#">shop</a>
        <a href="#">contact</a>
        
        
        <div >
        <span className="relative inline m-0 p-0 " >
          <input className="border-solid border-2  hover:border-dotted" type="search" />
          <AiOutlineSearch  className="absolute end-0 top-0 bottom-0   items-center bg-pink-600	outline-none text-2xl	hover:bg-red-700" />
        </span>
        </div>
      </div>
    </>
  )
}

export default App
