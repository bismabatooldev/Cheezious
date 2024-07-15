
import { Link } from 'react-router-dom';
import { prodB } from '../data/productB'
import { RiHeart3Line } from "react-icons/ri"

const Starters = () => {
  
    return (
        
        <section className='mt-10'>
        <div className='container pl-28'>
        <p className='pb-5 font-bold text-3xl'>Starters</p>

        <div className='flex flex-wrap border-b pb-10'>
        {prodB.map((x)=>{
          return (
            <Link key={x.id} to={`/prodB/${x.id}`}>
            <div className="w-52 mx-2 my-2  p-2.5 bg-white rounded-3xl shadow-md border hover:border-yellow-300 transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <img className="w-full object-cover rounded-2xl" alt="Card Image" src={x.thumbnail} />
            <div className="text-center pt-4">
              <h2 className="text-lg font-bold">{x.title.slice(0,17)}...</h2>
              <p className="text-gray-600 text-sm border-b-2 pb-2">{x.description.slice(0,45)}...</p>
              <p className="text-[#d40000] font-bold mt-5 mx-10">Rs. {x.price}.00</p>
              <Link  className="flex justify-between items-center mx-10 my-2">
                <button className="bg-[#d40000] hover:bg-[#ffcb04] hover:text-black  text-white font-bold px-2 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400">Add to Cart</button>
              </Link>
            </div>
<div className="absolute top-3 right-3">
<Link>
<RiHeart3Line className='bg-gray-200 text-5xl p-2 rounded-full'/>
</Link>
</div>
          </div>
            </Link>
          )
      })}
        </div>
        </div>
        </section>
        
    )
}

export default Starters