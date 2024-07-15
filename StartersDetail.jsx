import { useDispatch } from 'react-redux'
import Layout from '../components/Layout'
import { RiHeart3Line } from "react-icons/ri"
import { Link, useParams } from 'react-router-dom';
import { prodB } from '../data/productB';
import { addToCart } from '../redux/cartSlice'
import { FaArrowLeft } from "react-icons/fa";


const StartersDetail = ()=> {

  const dispatch = useDispatch();
  const add = (getdata)=> {
    dispatch(addToCart(getdata))
  }

  const {id} = useParams();
  const getdata = prodB.find((x)=>x.id == id);
    return (
        <Layout>
        <div className='pt-32'>
        <div className="font-[sans-serif] bg-white border rounded-xl lg:size-9/12 size-11/12 mx-auto">
  <div className="p-6 lg:max-w-7xl max-w-2xl max-lg:mx-auto">
    <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="w-full lg:sticky top-0 text-center">
        <div className="i">
          <img src={getdata.thumbnail} alt="Product" className="lg:w-11/12 w-full h-full rounded-xl object-cover object-top" />
        </div>
      </div>
      <div>
        <div className="flex flex-wrap items-start">
          <div className='flex'>
            <h2 className="text-3xl  mt-8 font-extrabold text-gray-800">{getdata.title}</h2>
            <div className="pl-36 mt-5">
            <button className="px-2.5 py-1.5 flex items-center ">
            <RiHeart3Line className='bg-gray-200 text-5xl p-2 rounded-full'/>
            </button>
          </div>
            
          </div>
          <p className="text-gray-400 mt-5">{getdata.description}</p>
        </div>
        
        <div className="flex flex-wrap lg:gap-20  gap-20 lg:mt-72 mt-10">
          <button type="button" className="bg-[#d40000] hover:bg-[#ffcb04] hover:text-black  text-white font-bold px-3 py-3 rounded-full" onClick={()=>add(getdata)}>Rs.{getdata.price}.00 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Add to cart</button>
        </div>
        <Link to='/' >
        <button className="pl-96 ml-20 py-1.5 flex items-center ">
        <FaArrowLeft className='bg-gray-200 text-5xl p-2 rounded-full'/>
        </button>
        </Link>
      </div>
    </div>

  </div>
</div>
        </div>
        </Layout>
    )
}

export default StartersDetail