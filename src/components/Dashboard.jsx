import Card from "./Card";
import { BarGraph, PieGraph } from "./Graph";
import { ThemeContext } from "../Contexts/ThemeContext";
import { useContext } from "react";

import { useRecoilValue } from "recoil";
import { ThemeAtom } from "../atoms/ThemeAtom";

const Dashboard = () => {

  const theme  = useRecoilValue(ThemeAtom);

  return (
    <>
      <div className={theme ==="light" ? "flex flex-col h-screen w-screen shadow-lg bg-[#dfdddd] cursor-default text-black"
        :"flex flex-col bg-gray-800 text-white cursor-default w-screen shadow-black h-screen"}>

        <h1 className={theme === "light" ? "text-2xl text-center bg-white  font-VG m-8 ml-17 p-2 shadow-lg w-fit rounded-lg transition-all duration-250 hover:translate-y-0.5"
          : "text-2xl text-center border border-gray-500  font-VG m-8 ml-17 p-2 shadow-lg w-fit rounded-lg transition-all duration-250 hover:translate-y-0.5"
        }>
          My Stats</h1>
        <div className="flex flex-wrap  justify-center items-center gap-6">

          <Card 
          title={"BrainPower"}
          percentage={"23%"}
          brief={"Yup, I am a bozzo, which sometimes don't know how to work at all"}/>
          <Card 
          title={"Craziness"}
          percentage={"52%"}
          brief={"Just cant imagine where my thoughts lead me a lot of time..."}/>
          <Card 
          title={"Intelligence"}
          percentage={"9%"}
          brief={"Getting good marks doesn't show intelligence dude"}/>
          <Card 
          title={"Time Waste"}
          percentage={"16%"}
          brief={"Getting good marks doesn't show intelligence dude"}/>

          <BarGraph />
          <PieGraph />
        </div>
      </div>
    </>
  )
}

export default Dashboard;