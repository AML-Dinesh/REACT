import React from 'react'
import { Link} from 'react-router-dom'
const Navbar = () => {
  return (
     <div className="w-screen h-24 rounded-md flex  justify-center">
        <div className="nav w-screen  rounded-lg flex justify-start align-bottom">
          <div className=" name flex justify-center items-center w-1/2 h-full text-white ">
            <h1 className='text-4xl font-bold text-black'>Dinesh Jayaraman</h1>
          </div>
          <div className="w-1/3 h-full flex flex-row text-white">
            <div className="i1 w-1/3 h-full flex justify-center items-center">
            <Link to={'/profile'}>
              <button><span className='text-xl font-bold text-slate-700'>Profile</span></button>
            </Link>
            </div>
            
            <div className="i2 w-1/3 h-full flex justify-center items-center">
            <Link to={'/projects'}>
            <span className='text-xl font-bold text-slate-700'><button>Projects</button></span>
            </Link>
            </div>
            
            <div className="i3 w-1/3 h-full flex justify-center items-center">
            <Link to={'/contact'}>
            <a href='#Contact'><span className='text-xl font-bold text-slate-700'><button>Contact</button></span></a>
            </Link>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default Navbar