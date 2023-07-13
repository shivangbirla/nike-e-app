import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ADD } from "../redux/actions/action";

const Item = ({ endpoint: { title, items } }) => {
  const dispatch = useDispatch();

  const send = (e) => {
    // console.log(e);
    dispatch(ADD(e));
  };
  return (
    <>
      <div className="nike-container mb-9 mt-9 xsm:mt-2 xsm:mb-2">
        <div className="mb-4">
          <h1 className="text-[24px] font-medium hover:underline hover:text-[#757575] cursor-pointer">
            {title}
          </h1>
        </div>
        <div className="grid items-center grid-cols-3 gap-2 md:grid-cols-2">
          {items.map((val, i) => (
            <div key={i} className="sm:h-80 sm:w-50 mb-2">
              <div>
                <Link to={`/item/${val.id}`}>
                  <img
                    src={val.img}
                    className="bg-[#f5f5f5] cursor-pointer"
                    onClick={() => send(val)}
                  />
                </Link>
              </div>
              <div className="text-[15px] sm:text-[13px] font-medium">
                <h1
                  className="text-[#111111] mt-2.5 cursor-pointer hover:underline hover:text-[#757575]"
                  onClick={() => send(val)}
                >
                  {val.text}
                </h1>
                <h1 className="text-[#757575]">{val.subtext}</h1>
                <h1 className="text-[#757575]">{val.color}</h1>
                <h1 className="text-[#111111] mt-3 mb-2">AED {val.price}.00</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Item;
