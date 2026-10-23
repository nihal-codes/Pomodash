import { useContext } from "react"
import { ThemeContext } from "../Contexts/ThemeContext"

import { useRecoilState } from "recoil"
import { ThemeAtom } from "../atoms/ThemeAtom"

export default function Button ({onClick, name}) {
  const [theme, setTheme] = useRecoilState(ThemeAtom);
  return (
    <>
      <button className={theme === "light"
        ? "shadow-lg cursor-pointer bg-white m-1 font-mono text-lg font-medium rounded-lg p-2 transition-all duration-150 active:translate-x-0.5 active:translate-y-0.5 focus:bg-[#dfdddd]"
        : "border border-gray-500 bg-gray-800 font-mono font-medium text-lg cursor-pointer m-1 rounded-lg p-2 transition-all duration-150 active:translate-x-0.5 active:translate-y-0.5 focus:bg-gray-900"
      }
      onClick={onClick}
       >
        {name}
      </button>
    </>
  )
}