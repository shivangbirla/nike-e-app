import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import nikelogo from "../assets/nike-logo.svg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Menudropdown from "./utils/Menudropdown";
import { products } from "../data/data";
import { useDispatch } from "react-redux";
import { ADD } from "./redux/actions/action";
import { BiSearch } from "react-icons/bi";

const Navbar = () => {
  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/cart");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
  };

  const [length, setLength] = useState(0);
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const [navState, setNavState] = useState(false);
  const onNavScroll = () => {
    if (window.scrollY > 30) {
      setNavState(true);
    } else {
      setNavState(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNavScroll);

    return () => {
      window.removeEventListener("scroll", onNavScroll);
    };
  }, []);

  const tlength = () => {
    let qnty = 0;
    getdata.map((val, i) => {
      qnty = val.qnty + qnty;
    });
    setLength(qnty);
  };

  useEffect(() => {
    tlength();
  }, [tlength]);
  return (
    <>
      <header
        className={
          !navState
            ? "absolute top-7 left-0 right-0 opacity-100 z-50 pb-3 border-b-2 xsm:absolute xsm:top-2.5 xsm:left-0 xsm:pb-1 md:top-5 md:pb-2"
            : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme xsm:h-[8.2vh]"
        }
      >
        <nav className="flex items-center justify-between nike-container">
          <div className={value === "" ? "flex items-center" : "invisible"}>
            <Link to="/">
              <img
                src={nikelogo}
                alt="nike/logo"
                className="w-16 h-auto hover:fill-[#adb5bd] ml-1 md:w-14 md:h-14
                sm:w-12 sm:h-12 min-w-[50px]"
              />
            </Link>
          </div>
          <div className={value === "" ? "" : "invisible"}>
            <ul className="flex flex-row items-center gap-10 lg:visible md:invisible sm:invisible md:w-0 sm:w-0">
              <li className="text-[19px]  text-[#111111] cursor-pointer hover:underline hover:text-[#adb5bd]">
                <Link to="/featured">
                  <span>New & Featured</span>
                </Link>
              </li>
              <li className="text-[19px]  text-[#111111] cursor-pointer hover:underline hover:text-[#adb5bd]">
                <Link to="/men">
                  <span>Men</span>
                </Link>
              </li>
              <li className="text-[19px]  text-[#111111] cursor-pointer hover:underline hover:text-[#adb5bd]">
                <Link to="/women">
                  <span>Women</span>
                </Link>
              </li>
              <li className="text-[19px]  text-[#111111] cursor-pointer hover:underline hover:text-[#adb5bd]">
                <Link to="/kids">
                  <span>Kids</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-[300px] flex flex-col xsm:w-[200px]">
            <label className="flex flex-row">
              <AiOutlineSearch className="bg-[#f5f5f5] h-[40px] w-[25px] rounded-tl-2xl rounded-bl-2xl cursor-pointer" />
              <input
                type="text"
                name="name"
                className="outline-none bg-[#f5f5f5] h-[40px] w-[220px] rounded-tr-2xl rounded-br-2xl cursor-pointer xsm:w-[150px]"
                value={value}
                onChange={onChange}
                autoComplete="off"
              />
            </label>
            <div className="flex flex-col opacity-100 z-[200] blur-effect-theme rounded-2xl">
              {products
                .filter((item) => {
                  const searchTerm = value.toLowerCase();
                  const fullName = item.text.toLowerCase();
                  return (
                    searchTerm &&
                    fullName.startsWith(searchTerm) &&
                    fullName !== searchTerm
                  );
                })
                .slice(0, 10)
                .map((item) => (
                  <div
                    onClick={() => onSearch(item.text)}
                    className="cursor-pointer my-1.5 ml-3 mr-3 flex flex-row items-center gap-3"
                    key={item.id}
                  >
                    <h2>{item.text}</h2>

                    <Link to={`/item/${item.id}`}>
                      <button
                        className="rounded-2xl active:scale-90 transition-all duration-100 ease-in-out shadow-md bg-white text-black py-1 px-2 text-[16px] md:px-1 md:py-0.5"
                        onClick={() => send(item)}
                      >
                        <BiSearch />
                      </button>
                      {/* onClick={() => onSearch(value)} */}
                    </Link>
                  </div>
                ))}
            </div>
          </div>
          <div className={value === "" ? "cursor-pointer" : "invisible"}>
            <button
              type="button"
              onClick={handleClick}
              className="border-none outline-none active:scale-110 transition-all duration-300 relative md:mt-1"
            >
              <AiOutlineShoppingCart className="h-[40px] w-[25px]" />
              <div
                className={`absolute top-0 right-0 left-4 shadow w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                  navState
                    ? "bg-slate-900 text-slate-100 shadow-slate-400"
                    : "bg-slate-900 text-slate-100 shadow-slate-400"
                }`}
              >
                {length}
              </div>
            </button>
          </div>
          <div className="lg:block ml-2 hidden">
            <RxHamburgerMenu
              className="h-[40px] w-[25px] cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            {isMenuOpen && <Menudropdown isMenuOpen={isMenuOpen} />}
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
