import Layout from '../components/Layout'
import { Link } from "react-router-dom";
import { HiMiniXMark } from "react-icons/hi2";

const Login = () => {
    return (
        <Layout>
        <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
  <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 relative">
  <span className="bg-gray-400 rounded w-7 h-7 flex items-center flex-wrap gap-2 ">
  <Link to='/'>
  <button className="text-2xl text-white"><HiMiniXMark /></button>
  </Link>
  </span>
    <div className="my-6 text-center">
      <h4 className="text-3xl text-[#333] font-extrabold">Login</h4>
      <p className="text-sm text-gray-400 mt-4">Login to your account</p>
    </div>
    <form className="space-y-4">
      <div className="relative flex items-center">
        <input type="email" placeholder="Enter Email" className="px-4 py-3 bg-white text-[#333] w-full text-sm border-2 outline-[#007bff] rounded-lg" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4" viewBox="0 0 682.667 682.667">
          <defs>
            <clipPath id="a" clipPathUnits="userSpaceOnUse">
              <path d="M0 512h512V0H0Z" data-original="#000000" />
            </clipPath>
          </defs>
          <g clipPath="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
            <path fill="none" strokeMiterlimit={10} strokeWidth={40} d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z" data-original="#000000" />
            <path d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z" data-original="#000000" />
          </g>
        </svg>
      </div>
      <div className="relative flex items-center">
        <input type="password" placeholder="Enter Password" className="px-4 py-3 bg-white text-[#333] w-full text-sm border-2 outline-[#007bff] rounded-lg" />
        <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-4 cursor-pointer" viewBox="0 0 128 128">
          <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000" />
        </svg>
      </div>

      <button type="button" className="px-6 py-2.5 !mt-8 w-full font-semibold bg-[#d40000] hover:bg-[#ffcb04] hover:text-black text-white text-sm rounded-full">Login</button>
    </form>
    <hr className="my-6" />
    <p className="text-sm text-center text-[#333]">Dont Have a Account? <Link to="/register" className="text-sm text-[#ffcb04] font-semibold">Sign up</Link></p>
  </div>
</div>
        </Layout>
    )
}

export default Login;