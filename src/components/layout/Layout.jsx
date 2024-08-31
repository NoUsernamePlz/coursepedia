/* eslint-disable react/prop-types */

import Footer from "../footer/Footer"
import Navbar from "../navbar/Navbar"
import { Toaster } from "../ui/sonner"

function Layout({children}) {
  return (
    <div className="bg-purple-50 h-full ">
      <Navbar/>
      <div>
        {children}
      </div>
      <Footer/>
      <Toaster />
    </div>
  )
}

export default Layout

