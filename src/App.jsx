import Header from "./components/Header"
import Banner from "./components/Banner"
import Chair from "./assets/Chair.png"
import { AiOutlineShoppingCart } from "react-icons/ai"
function App() {
  return (
    <>
     <Header/>
    <Banner/>
    <div className="container mt-24 ">
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
    {
      [1,2,3,4].map(el=>{
       return  <div className=" shadow-2xl  w-[50%] p-1 border-transparent hover:border hover:border-primary group ">
       <img src={Chair} alt="" className="ml-auto mx-auto" />
      <div className="group-hover:bg-primary p-2  ">
      <p className="text-secondary font-bold text-lg group-hover:text-white">Product Name</p>
       <p className="text-primary_dark text-sm group-hover:text-white">$100</p>
      </div>
      <span className="hidden  p-5 border border-2 group-hover:inline-block absolute  top-4 left-4 rounded">
        <AiOutlineShoppingCart/>
      </span>
     </div>
      })
    }
    </div>
    </div>
    </>
  )
}

export default App
