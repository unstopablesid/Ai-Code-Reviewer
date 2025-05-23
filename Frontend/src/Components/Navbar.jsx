import React from 'react'
import code from '../Assets/code.svg'

const Navbar = () => {
return (
    <nav className="h-24 flex items-center justify-between px-6 py-4 bg-gray-900">
        <div className="flex items-center">
            <img src={code} alt="Logo" className="h-16 ml-8" />
            <span className="ml-4 text-white text-xl font-bold">CodeAuditX</span>
        </div>
        <div className="">
            <a href="">
            <button className="bg-blue-600 text-white h-10 w-28 rounded text-lg hover:bg-blue-700 transition ml-2">
                Get Connect
            </button></a>
        </div>
    </nav>
)
}

export default Navbar
