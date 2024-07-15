import { useDispatch, useSelector } from "react-redux"
import Layout from "../components/Layout"
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { CgTrash } from "react-icons/cg";
import { HiMiniXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { addToCart, clearCart, removeFromCart } from "../redux/cartSlice";

const ShoppingCart = () => {
  const data = useSelector((state)=>state.cartReducer.cartItems)

  const [tprice , setPrice] = useState();
  const totalprice = ()=>{
    let tprice = 0;
    data.map((x) => {
      tprice += x.quantity * x.price;
    });
      setPrice(tprice);
  };
    useEffect(()=>{
      totalprice();
    }, [data]);
  
    
    const dispatch = useDispatch();
    const increment = (x) => {
      dispatch(addToCart(x))
    };
    const decrement = (x) => {
      dispatch(removeFromCart(x))
    }
    const clear = (x) => {
      dispatch(clearCart(x))
    }

    return (
        <Layout>
<div className="fixed inset-0 w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] font-[sans-serif]">
  <div className="w-full max-w-xl bg-white shadow-lg relative ml-auto h-screen">
    <div className="overflow-auto p-6 h-[calc(100vh-135px)]">
      <div className="flex items-center gap-4 text-gray-800">
        <h3 className="text-2xl font-bold flex-1">Shopping cart</h3>
        <Link to='/'>
        <button className="text-2xl hover:text-red-600"><HiMiniXMark /></button>
        </Link>
      </div>

      {
        data.map((x)=>{
          return (
          <div key={x.id} className="divide-y mt-4">

            <div className="flex items-start justify-between gap-4 py-8">
              <div className="flex max-sm:flex-col gap-6">
                <div className="h-40 bg-gray-100 p-4 rounded">
                  <img src={x.thumbnail} className="w-full h-full object-contain shrink-0" />
                </div>
                <div>
                  <p className="text-md font-bold text-[#333]">{x.title}</p>
                  <p className="text-gray-400 text-xs mt-1">Quantity : {x.quantity}</p>
                  <h4 className="text-xl font-bold text-[#333] mt-4">Rs.{x.quantity * x.price}</h4>
                  <div className="mt-6">
                    <button type="button" className="flex items-center flex-wrap gap-2 text-lg text-[#333]">
                      <span className=" w-9 h-9 bg-red-100 rounded">
                        <button className="py-2" onClick={()=>decrement(x)} ><FaMinus /></button>
                      </span>
                      <span className="mx-3">{x.quantity}</span>
                      <span className=" w-9 h-9 bg-green-100 rounded">
                        <button className="py-2" onClick={()=>increment(x)} ><FaPlus /></button>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <span>
              <button className="text-2xl text-red-600"><CgTrash onClick={()=>clear(x)} /></button>
              </span>
            </div>
    
            
          </div>
          )
        })
      }


    </div>
    <div className="p-6 absolute bottom-0 w-full border-t bg-white">
      <ul className="text-[#333] divide-y">
        <li className="flex flex-wrap gap-4 text-md font-bold">Subtotal <span className="ml-auto">Rs.{tprice}</span></li>
      </ul>
      <button type="button" className="mt-6 text-md px-6 py-2.5 w-full bg-blue-600 hover:bg-blue-700 text-white rounded">Check
        out</button>
    </div>
  </div>
</div>

        </Layout>
    )
  }
  export default ShoppingCart