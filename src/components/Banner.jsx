import BannerImage from "../assets/banner-1.png"
import React from "react"
export default function Banner(){
    return <>
     <div className="h-[60vh] bg-cover bg-no-repeat bg-center flex items-center" style={{
        backgroundImage: `url(${BannerImage})`
      }}>
      <div className="container mt-20" >
        <div className="w-1/2">
        <p className="text-secondary font-bold mb-3">Best Furniture For Your Castle....</p>
        <p className="text-5xl font-bold mb-7">New Furniture Collection Trends in 2020</p>
        <p className="text-primary-light mb-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
        <button className="bg-secondary text-white px-6 py-3"> shop now</button>
        </div>
      </div>
     </div>
     <div className="p-40 hidden" style={{backgroundImage: `url("https://fastly.picsum.photos/id/541/1920/1080.jpg?hmac=lqSmE2xTIZMUr6Y7GZN5jLcz6fjg8cV3mtNqa42X_hg")`}}>
      <h1>hello</h1>
     </div>
     {/* <img src="{BannerImage}" alt="banner" /> */}
      <img src="./assests/banner-1.png" alt="banner" />
    </>
}