import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Footer = () => {
    return (

<footer className="lg:mx-24 bg-white border rounded-xl">
  <div className="mx-auto w-full max-w-screen-xl">
    <div className="lg:flex px-4 py-6 lg:py-8 md:grid-cols-4">
<div className="mb-6 md:mb-4">
  <a href="#" className="flex items-center">
    <img src="/Images/logo.png" className="size-40 rounded" alt="Logo" />
  </a>
</div>

      <div className="lg:px-8 px-3">
        <h2 className="mb-3 text-lg font-bold text-gray-900">Cheezious</h2>
        <ul className="text-gray-800">
          <li className="mb-4">
            <a href="#" className="flex hover:text-gray-500"><FaPhoneAlt className="mr-2 mt-1 text-red-700 hover:none" />+9242 111446699</a>
          </li>
          <li className="mb-4">
          <a href="#" className="flex hover:text-gray-500"><IoMdMail className="mr-2 mt-1 text-red-700 hover:none" />Support@cheezious.com</a>
          </li>
          <li className="flex mb-4">
          <FaLocationDot className="mr-2 mt-1 text-red-700" />
            Cheezious - Jail Road, Plot # 394, Shadman Colony No-1, Jail Road, Lahore, 54000
          </li>
        </ul>
      </div>
      <div className="px-3">
        <h2 className="mb-3 text-lg font-bold text-gray-900">Our Timings</h2>
        <ul className="flex pb-2 text-gray-800">
          <li className="mb-4">
            Monday - Sunday
          </li>
          <li className="mb-4 ml-28">
          11:00 AM - 03:00 AM
        </li>
        </ul>
        <div>
        <h2 className="mb-3 text-lg font-bold text-gray-900">Follow Us:</h2>
        <ul className="flex text-gray-800">
          <li className="mb-4 px-2">
          <a href="#" className="text-blue-500 hover:text-blue-400 dark:hover:text-white">
          <FaFacebookF />
          </a>
          </li>
          <li className="mb-4 px-2">
          <a href="#" className="text-pink-500 hover:text-pink-400">
          <FaInstagram />
          
        </a>
        </li>
        </ul>
        </div>
      </div>

    </div>
    <div className="text-center ml-8 mb-10 border-t-2 pt-2">
      <span className="text-sm text-gray-700">© 2024 Powered by <a href="#">Cheezious™</a>.
      </span>
    </div>
  </div>
</footer>

    )
}

export default Footer;