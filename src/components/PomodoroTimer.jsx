import { useContext, useRef, useState } from "react";
import Button from "./Button";
import { ThemeContext } from "../Contexts/ThemeContext";
import CircularTimer from "./CircularTimer";

import { useRecoilValue } from "recoil";
import { ThemeAtom } from "../atoms/ThemeAtom";

const PomodoroTimer = () => {
  
  const theme = useRecoilValue(ThemeAtom);

  const [pomo, setPomo] = useState(25*60);
  const [sb, setSb] = useState(5*60);
  const [lg, setLg] = useState(15*60);

  const [mode, setMode] = useState("pomo");

  const [stop, setStop] = useState(false);

  const TimeRef = useRef(null);

  const handleTime = (setter, interval, message) => {
  if (!stop) {
    // Start the timer
    setStop(true);

    TimeRef.current = setInterval(() => {
      setter(prev => {
        if (prev <= 1) {
          clearInterval(TimeRef.current);
          setStop(false);
          alert(message);
          return 0;
        }

        return prev - 1;
      });
    }, interval);

  } else {
    // Stop the timer
    clearInterval(TimeRef.current);
    TimeRef.current = null;
    setStop(false);
  }
};

  const convertTime = (totalSeconds) => {
    let minutes = Math.floor(totalSeconds /60);
    let seconds = totalSeconds%60;

    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const resetTime = (setter, time) => {
    clearInterval(TimeRef.current);
    TimeRef.current = null;
    setStop(false);
    setter(time);
  }

  return (
    <>
      <div className={theme === "light" ? "h-screen w-screen bg-[#dfdddd] flex flex-col items-center justify-center "
        : "bg-gray-800 text-white h-screen flex flex-col w-screen items-center justify-center"
      }>

        <h1
        className={theme === "light"
          ? "text-4xl font-VG mb-2 bg-white p-2 shadow-lg rounded-xl transition-all duration-150 hover:scale-102 hover:backdrop-blur-2xl"
          : "text-4xl font-VG mb-2 bg-gray-800 text-white p-2 border border-gray-500 rounded-xl transition-all duration-150 hover:scale-102 hover:backdrop-blur-2xl"
        }
        >
          <i class="ri-focus-2-line"></i>Pomodoro Timer</h1>
        <h2 className="text-gray-500 font-mono p-2 text-sm mb-2">THE WAY I WORK</h2>

        <div className={theme === "light"
          ? "flex flex-col text-8xl tracking-wide  font-bold bg-[#f6f6f6] font-VG items-center justify-center gap-8 p-8 rounded-xl shadow-xl backdrop-blur selection:text-white selection:bg-black"
          : "flex flex-col text-8xl tracking-wide  text-white font-bold bg-gray-800 font-VG items-center justify-center gap-8 p-8 rounded-xl border border-gray-500 backdrop-blur selection:text-black selection:bg-white"
        }>
          <div className="flex gap-4 ">
            <Button name="Pomodoro" onClick={() => setMode("pomo")}/>
            <Button name="Small Break" onClick={() => setMode("small")}/>
            <Button name="Large Break" onClick={() => setMode("large")}/>
          </div>

          {mode ==="pomo" && 
          <>
            <CircularTimer
              timeLeft={pomo}
              totalTime={25 * 60}
            />
            <div className="flex gap-4">
            <Button name={stop?"Stop":"Start"} onClick={() => handleTime(setPomo, 1000, "Break Time")}/>
            <Button name="Reset" onClick={() => resetTime(setPomo, 25*60)}/>
            </div>
          </>
          }
          {mode === "small" && 
          <>
            <CircularTimer
              timeLeft={sb}
              totalTime={5 * 60}
            />
            <div className="flex gap-4">
              <Button name={stop?"Stop":"Start"} onClick={() => handleTime(setSb, 1000, "Break Over")}/>
              <Button name="Reset" onClick={() => resetTime(setSb, 5*60)}/>
            </div>
          </>
          }
          {mode === "large" && 
          <>
            <CircularTimer
              timeLeft={lg}
              totalTime={15 * 60}
            />
            <div className="flex gap-4">
            <Button name={stop?"Stop":"Start"} onClick={() => handleTime(setLg, 1000, "Long Break Over")}/>
            <Button name="Reset" onClick={() => resetTime(setLg, 15*60)}/>
            </div>
          </>
          }
        </div>
      </div>
    </>
  )
}

export default PomodoroTimer;