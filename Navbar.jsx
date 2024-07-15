import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { IoMdCart } from "react-icons/io";
import { useSelector } from "react-redux";

const Navbar = () => {
  const data = useSelector((state)=>state.cartReducer.cartItems)
    return (
      
<header className="text-gray-600 body-font bg-[#ffcb04] shadow-md fixed w-full top-0 left-0 z-40">
  <div className="container mx-auto flex p-2 items-center">

  <Link className="flex order-first lg:order-none lg:w-1/5 title-font items-center text-gray-900 lg:items-center lg:justify-center  mb-4 md:mb-0">
  <FaLocationDot className="size-11 text-[#d40000] hover:text-[#BE3144] p-2"/>
  <span className="ml-3 text-l">Deliver To <br/> xyz location</span>
</Link>
{/*<nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
<Link to="/" className="mr-5 hover:text-[#77B0AA]">Home</Link>
<Link to="/menu" className="mr-5 hover:text-[#77B0AA]">Menu</Link>
<Link to="#" className="mr-5 hover:text-[#77B0AA]">Contact</Link>
<Link to="#" className="mr-5 hover:text-[#77B0AA]">Services</Link>
    </nav>*/}

    <Link to="/" className="flex lg:order-none lg:w-1/5 items-center lg:items-center lg:justify-center lg:ml-80 mb-4 md:mb-0">
    <img src='/Images/logo.png' className="size-16" alt='logo' />
    </Link>

    
    <li className="nav-item ml-80  size-8" style={{listStyleType:"none"}}>
    <Link to='/login' className="mr-10"><FaCircleUser className="size-7 text-[#d40000] hover:text-[#BE3144]"/></Link>
  </li>


  <li className="nav-item size-8 mx-4" style={{listStyleType:"none"}}>
  <Link to='/register' className="mr-10"><IoCheckmarkDoneSharp  className="size-7 text-[#d40000] hover:text-[#BE3144]"/></Link>
</li>
<li className="nav-item size-8" style={{listStyleType:"none"}}>
<Link to="/shop" className="mr-10"><IoMdCart className="size-7 text-[#d40000] hover:text-[#BE3144]"/></Link>
</li>
<span className="inline-flex items-center rounded-full bg-gray-50 mb-8 -ml-3 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-700">{data.length}</span>

    

  </div>
</header>


    )
}

export default Navbar