import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ThemeContext } from "../Contexts/ThemeContext"
import 'remixicon/fonts/remixicon.css'

import { useRecoilState } from "recoil"
import { ThemeAtom } from "../atoms/ThemeAtom"

export default function SideBar () {

  // const {theme, toggleTheme} = useContext(ThemeContext);
  const [theme, setTheme] = useRecoilState(ThemeAtom);
  
  const toggleTheme = () => {
    setTheme(theme => theme === "light" ? "dark" : "light" );
  };

  const basicStyling="flex flex-col gap-8 w-60 h-screen font-VG text-xl pt-20 ";
    return (
    <>
      <div className={theme ==="light" ? basicStyling+" bg-white border-r-2 text-black"
        : basicStyling+ " bg-gray-700 border-r-2 border-white text-white"
      }>
        <button onClick={toggleTheme} className="text-xl cursor-pointer flex items-center justify-center border rounded w-8 ml-8 h-8">
          {theme === "light" ? <i className="ri-moon-line"></i> : <i className="ri-moon-fill"></i>}
        </button>
        
        <NavLink 
        to={'/'} 
        className={theme === "light" 
          ? " shadow-lg pl-4 mx-4 pb-1 rounded-xl"
          : " border-b pb-1 pl-2 mx-6"
        }
        >
          Home
        </NavLink>
        
        <NavLink 
        to={'/dashboard'} 
        className={theme === "light" 
          ? " shadow-lg pl-4 mx-4 pb-1 rounded-xl"
          : " border-b pb-1 pl-2 mx-6"
        }
        >
          DashBoard
        </NavLink>
        
        <NavLink 
        to={'/pomodoro'}
        className={theme === "light" 
          ? " shadow-lg pl-4 mx-4 pb-1 rounded-xl"
          : " border-b pb-1 pl-2 mx-6"
        } 
        >
          Pomodoro
          </NavLink>
      </div>
    </>
  )
}