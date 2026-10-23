import { useRecoilState } from "recoil";
import { ThemeAtom } from "../atoms/ThemeAtom";

export default function Card ({title, percentage, brief}) {

  const [ theme, setTheme ] = useRecoilState(ThemeAtom);

  const basicStyling = "flex flex-col items-center gap-2 font-VG w-70 p-3 shadow-md rounded-lg transition-all duration-250 hover:translate-y-0.5"

  return (
    <>
      <div className={theme === "light" ? basicStyling + " bg-white" : basicStyling + " bg-gray-800 border border-gray-500 shadow-none"
      }>
        <h1 className="text-2xl ">{title}</h1>
        <h1 className="text-3xl font-bold">{percentage}</h1>
        <p className="opacity-60 text-center" >{brief}</p>
      </div>
    </>
  )
}