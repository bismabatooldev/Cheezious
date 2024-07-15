import Navbar from "./Navbar"
import Footer from "./Footer"





const Layout = ({children}) => {
    return (
        <div className="bg-[#f8f9fa]">
        <Navbar/>
        <div className="min-h-screen">
        {children}
        </div>
        <Footer/>
        </div>
    )
}

export default Layout