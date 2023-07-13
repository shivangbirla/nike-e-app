import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";

const ItemD = () => {
  const { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };

  const [data, setData] = useState([]);

  const getdata = useSelector((state) => state.cartreducer.carts);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id === id;
    });
    setData(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id]);

  return (
    <>
      <div className="nike-conatiner flex flex-row mt-[120px] gap-[130px] mr-8 xsm:mt-[85px] xsm:gap-[10px] xsm:mr-0 xsm:mb-[32px] md:gap-[40px] md:mr-0">
        {data.map((element) => {
          return (
            <>
              <div className="m-12 mt-8 xsm:m-0 xsm:mt-3 md:m-4 md:mt-9">
                <img src={element.img} className="cursor-pointer" />
              </div>
              <div className="mt-8 md:mt-6  xsm:mt-4">
                <h2 className="text-[32px] font-medium cursor-pointer xsm:text-[20px] md:text-[28px]">
                  {element.text}
                </h2>
                <h2 className="text-[18px] md:text-[17px] xsm:text-[14px] font-medium">
                  {element.subtext}
                </h2>
                <h2 className="text-[18px] xsm:text-[15px] font-medium border-b md:text-[17px]">
                  {element.color}
                </h2>
                <h2 className="text-[20px] md:text-[18px] mt-4 font-medium xsm:text-[16px]">
                  Size
                </h2>
                <div className="flex flex-row mt-3 border-b xsm:mt-2">
                  <button className="bg-[#ffffff] text-[#111111] text-[18px] xsm:text-[12px] xsm:ml-1 xsm:mb-3 rounded-2xl font-medium px-4 mx-auto active:scale-90 transition-all duration-100 ease-in-out shadow-md ml-8 mb-8 md:text-[15px] md:ml-1">
                    Small
                  </button>
                  <button className="bg-[#ffffff] text-[#111111] text-[18px] rounded-2xl font-medium px-4 mx-auto active:scale-90 transition-all duration-100 ease-in-out shadow-md ml-8 mb-8 xsm:text-[12px] xsm:ml-2 xsm:mb-3 md:text-[15px] md:ml-3">
                    Medium
                  </button>
                  <button className="bg-[#ffffff] text-[#111111] text-[18px] rounded-2xl font-medium px-4 mx-auto active:scale-90 transition-all duration-100 ease-in-out shadow-md ml-8 mb-8 xsm:text-[12px] xsm:ml-2 xsm:mb-3 md:text-[15px] md:ml-3">
                    Large
                  </button>
                </div>
                <h2 className="text-[19px] font-medium mt-4 xsm:mt-2 xsm:text-[14px] md:text-[17px]">
                  AED {element.price}.00
                </h2>
                <Link to="/cart">
                  <button
                    className="button-theme text-[16px] px-24 py-4 font-medium mt-4 xsm:text-[12px] xsm:px-12 xsm:py-2 xsm:mt-2 md:text-[15px] md:px-16 md:py-3"
                    onClick={() => send(val)}
                  >
                    Add to Bag
                  </button>
                </Link>
                <h2 className="mt-4 hover:underline text-[#111111] cursor-pointer xsm:mt-2 xsm:text-[13px] md:text-[16px]">
                  View Product Details
                </h2>
                <details>
                  <summary className="text-[20px] font-medium mt-6 border-b border-t py-4 xsm:mt-2 xsm:text-[13.5px] xsm:py-2 xsm:mb-10 md:text-[18px] cursor-pointer">
                    Free Delivery and Returns
                  </summary>
                  <p>
                    <ul>
                      <li className="md:text-[15px] xsm:text-[11px]">
                        You can return your order for any reason, free of
                        charge, within 30 days.
                      </li>
                      <li className="md:text-[15px] xsm:text-[11px]">
                        Free delivery for orders AED 199 and above.
                      </li>
                    </ul>
                  </p>
                </details>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default ItemD;
