const CircularTimer = ({ timeLeft, totalTime }) => {
  const radius = 130;
  const strokeWidth = 12;

  const normalizedRadius = radius - strokeWidth / 2;

  const circumference = 2 * Math.PI * normalizedRadius;

  const progress = timeLeft / totalTime;

  const strokeDashoffset = circumference * (1 - progress);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="relative flex items-center justify-center">
      <svg
        width={radius * 2}
        height={radius * 2}
        className="-rotate-90"
      >
        {/* Background Circle */}
        <circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          fill="none"
          stroke="#d1d5db"
          strokeWidth={strokeWidth}
        />

        {/* Progress Circle */}
        <circle
          cx={radius}
          cy={radius}
          r={normalizedRadius}
          fill="none"
          stroke="#3b82f6"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          style={{
            transition: "stroke-dashoffset 1s linear",
          }}
        />
      </svg>

      {/* Timer */}
      <div className="absolute text-7xl font-bold font-VG">
        {minutes}:{seconds.toString().padStart(2, "0")}
      </div>
    </div>
  );
};

export default CircularTimer;