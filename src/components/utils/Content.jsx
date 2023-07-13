import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineDelete } from "react-icons/ai";
import { ADD, DLT, REMOVE } from "../redux/actions/action";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Content = () => {
  const [price, setPrice] = useState(0);
  const [length, setLength] = useState(0);
  const getdata = useSelector((state) => state.cartreducer.carts);

  const dispatch = useDispatch();

  const send = (e) => {
    dispatch(ADD(e));
  };

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const remove = (item) => {
    dispatch(REMOVE(item));
  };

  const total = () => {
    let price = 0;
    getdata.map((val, i) => {
      price = val.price * val.qnty + price;
    });
    setPrice(price);
  };

  useEffect(() => {
    total();
  }, [total]);

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
      <div className="nike-container mt-[100px] md:mt-[130px] xsm:mt-[60px]">
        <h2 className="text-[24px] font-medium ml-7 mt-[120px] cursor-pointer xsm:text-[20px] xsm:ml-4 xsm:mt-[80px] md:ml-[50%]">
          Bag
        </h2>
        <div className="flex flex-row md:flex md:flex-col gap-[20px] xsm:flex xsm:flex-col xsm:gap-[6px]">
          <div>
            <table className="table-auto flex flex-col">
              {getdata.map((e) => {
                return (
                  <>
                    <tr className="flex flex-row items-center gap-10 m-1 border-b xsm:gap-5">
                      <td className="h-[200px] w-[200px] xsm:h-[160px] xsm:w-[160px]">
                        <img src={e.img} className="p-6 xsm:p-2" />
                      </td>
                      <td className="w-[300px] text-[16px] xsm:text-[12px]">
                        <h2 className="font-medium">{e.text}</h2>
                        <h2 className="text-[#757575]">{e.subtext}</h2>
                        <h2 className="text-[#757575]">{e.color}</h2>
                        <div className="flex flex-row items-center gap-2 xsm:mt-1">
                          <flex>
                            <AiOutlineMinusCircle
                              className="w-5 h-5 xsm:w-4 xsm:h-4 active:scale-90 transition-all duration-100 ease-in-out"
                              onClick={
                                e.qnty <= 1 ? () => dlt(e.id) : () => remove(e)
                              }
                            />
                          </flex>
                          <h2>Quantity : {e.qnty}</h2>
                          <flex>
                            <AiOutlinePlusCircle
                              className="w-5 h-5 xsm:w-4 xsm:h-4  active:scale-90 transition-all duration-100 ease-in-out"
                              onClick={() => send(e)}
                            />
                          </flex>
                        </div>
                        <AiOutlineDelete
                          className="mt-4 xsm:mt-3 h-[22px] w-[22px] xsm:h-[20px] xsm:w-[20px] cursor-pointer"
                          onClick={() => dlt(e.id)}
                        />
                      </td>
                      <td className="w-[250px] text-[17px] xsm:text-[12px]">
                        <h2>AED {e.price * e.qnty}.00</h2>
                      </td>
                    </tr>
                  </>
                );
              })}
            </table>
          </div>
          <div className="mt-[25px] xsm:mt-[18px] md:mx-auto">
            <h2 className="text-[24px] xsm:text-[18px] font-medium mb-6 xsm:mb-4 cursor-pointer">
              Summary
            </h2>
            <table className="text-[18px] xsm:text-[12px]">
              <tr className="border-b">
                <td className="w-[100px]  pb-8 xsm:pb-3">Items</td>
                <td className="w-[100px] pb-8 xsm:pb-3">{length}</td>
              </tr>
              <tr className="border-b">
                <td className="w-[150px] pb-8 xsm:pb-3">Total</td>
                <td className="">
                  <span className="w-[100px] block py-2 xsm:py-1">
                    AED {price}.00
                  </span>
                  <span className="block pb-8 text-[14px] xsm:text-[10px] xsm:pb-3">
                    (inclusive of taxes)
                  </span>
                </td>
              </tr>
            </table>
            <button className="button-theme text-[16px] px-24 py-4 font-medium mt-4 mb-4 xsm:text-[12px] xsm:py-2 xsm:px-16">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
