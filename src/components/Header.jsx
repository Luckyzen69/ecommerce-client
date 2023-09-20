import { AiOutlineMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  AiOutlineUser,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineSearch,
} from "react-icons/ai";
export default function Header() {
  return (
    <>
      <div className=" bg-purple-500 text-white sm:flex sm:justify-between text-center p-3">
        <div>
          <span >
            <AiOutlineMail className="inline" />
            123@gmail.com{" "}
          </span>
          <span>
            <BsFillTelephoneFill className="inline" /> (1234)6789
          </span>
        </div>
        <div className="flex gap-4">
          <select name="lang" id="lang" className=" bg-transparent capitalize">
            <option value="eng">English</option>
            <option value="nep">Nepali</option>
            <option value="jap">japanese</option>
            <option value="kor">Korean</option>
          </select>
          <select
            name="dollar"
            id="dollar"
            className=" bg-transparent capitalize  "
          >
            <option value="dollar">USD</option>
            <option value="dollar">RS</option>
            <option value="dollar">YEN</option>
            <option value="dollar">IDK</option>
          </select>
          <span>
            Login
            <AiOutlineUser className="inline " />{" "}
          </span>
          <span>
            {" "}
            wishlist
            <AiOutlineHeart className="inline" />
          </span>
          <span>
            <AiOutlineShoppingCart className="inline" /> cart
          </span>
        </div>
      </div>

      <div className="py-5 flex flex-col sm:flex-row  justify-between text-primary	 capitalize  items-center  ">
        <div className="flex flex-col sm:flex-row gap-2 justify-between sm:gap-8 items-center">
          <p className="text-[#0D0E43 ] sm:flex-row text-4xl font-bold ">
            hekto
          </p>
        </div>

        <ul className="flex gap-4 items-center">
          <select name="home" id="home" className="capitalize text-secondary">
            <option value="home" className="hidden ">
              home
            </option>
            <option value="product">chair</option>
            <option value="product">shofa</option>
            <option value="product">table</option>
            <option value="product">bed</option>
          </select>
          <a href="#">product</a>
          <a href="#">blog</a>
          <a href="#">shop</a>
          <a href="#">contact</a>
        </ul>

        <form className="flex  items-center">
          <input
            className=" border focus:border-secondary border-black  focus:rounded focus:outline-none"
            type="search"
          />
          <button className="bg-secondary p-1">
            <AiOutlineSearch className=" text-white " />{" "}
          </button>
        </form>
      </div>
    </>
  );
}
