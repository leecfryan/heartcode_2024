import React, { useEffect, useState, useRef } from "react";

const MiniGame = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [score, setScore] = useState(0);
  const [missed, setMissed] = useState(0);
  const [leaderboard, setLeaderboard] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState(30); // 30 seconds timer
  const objects = useRef<
    { x: number; y: number; id: number; svg: HTMLImageElement; size: number }[]
  >([]); // Falling objects with SVGs
  const player = useRef({ x: 250, width: 100 }); // Player position
  const keys = useRef<{ [key: string]: boolean }>({}); // Track pressed keys
  const svgs = useRef<HTMLImageElement[]>([]); // Preloaded SVGs

  useEffect(() => {
    // Preload SVGs
    const svgPaths = [
      "assets/alcohol.svg",
      "assets/drugs.svg",
      "assets/marijuana.svg",
      "assets/powder.svg",
      "assets/syringe.svg",
    ];

    svgPaths.forEach((path) => {
      const img = new Image();
      img.src = path;
      svgs.current.push(img);
    });
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const generateObject = () => {
      const size = Math.random() * 20 + 30; // Random size between 20 and 40
      const svg = svgs.current[Math.floor(Math.random() * svgs.current.length)]; // Random SVG
      objects.current.push({
        x: Math.random() * (canvas.width - size),
        y: 0,
        id: Date.now(),
        svg,
        size,
      });
    };

    const movePlayer = () => {
      if (keys.current["ArrowLeft"] && player.current.x > 0) {
        player.current.x -= 5; // Smooth movement left
      }
      if (
        keys.current["ArrowRight"] &&
        player.current.x < canvas.width - player.current.width
      ) {
        player.current.x += 5; // Smooth movement right
      }
    };

    const updateGame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw player
      ctx.fillStyle = "blue";
      ctx.fillRect(
        player.current.x,
        canvas.height - 30,
        player.current.width,
        20
      );

      // Draw and update objects
      objects.current.forEach((obj, i) => {
        ctx.drawImage(obj.svg, obj.x, obj.y, obj.size, obj.size); // Draw SVG

        obj.y += 5; // Move objects down

        // Check collision
        if (
          obj.y >= canvas.height - 30 &&
          obj.x >= player.current.x &&
          obj.x <= player.current.x + player.current.width
        ) {
          setScore((prev) => prev + 1); // Increment score
          objects.current.splice(i, 1); // Remove the caught object immediately
        }

        // Increment missed only if the object falls below the canvas
        if (obj.y > canvas.height) {
          setMissed((prev) => prev + 1); // Increment missed
          objects.current.splice(i, 1); // Remove the missed object
        }
      });

      movePlayer(); // Update player movement

      // Check game over
      if (missed >= 5 || timeLeft <= 0) {
        setIsRunning(false);
        updateLeaderboard(score); // Update leaderboard
      } else {
        animationFrameId = requestAnimationFrame(updateGame);
      }
    };

    if (isRunning) {
      const intervalId = setInterval(generateObject, 1000); // Generate a new object every second
      updateGame();

      return () => {
        clearInterval(intervalId);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [isRunning, missed, timeLeft]);

  useEffect(() => {
    // Handle key presses for smooth movement
    const handleKeyDown = (e: KeyboardEvent) => {
      keys.current[e.key] = true;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keys.current[e.key] = false;
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [isRunning, timeLeft]);

  const startGame = () => {
    setScore(0);
    setMissed(0);
    setTimeLeft(30); // Reset timer
    setIsRunning(true);
    objects.current = []; // Clear all existing falling objects
  };

  const updateLeaderboard = (newScore: number) => {
    setLeaderboard((prev) => {
      const updated = [...prev, newScore];
      updated.sort((a, b) => b - a); // Sort in descending order
      if (updated.length > 10) {
        updated.pop(); // Remove the lowest score if more than 10
      }
      return updated;
    });
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4 dark:text-white min-h-screen">
      <h1 className="text-xl">Catch the Falling Objects</h1>
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        className="border dark:border-white rounded-md"
      ></canvas>
      {!isRunning ? (
        <button
          onClick={startGame}
          className="px-6 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md"
        >
          {missed >= 5 || timeLeft <= 0 ? "Restart Game" : "Start Game"}
        </button>
      ) : (
        <button
          onClick={() => setIsRunning(false)}
          className="px-6 py-2 bg-red-500 hover:bg-red-700 text-white font-bold rounded-md"
        >
          Stop Game
        </button>
      )}
      <div className="flex flex-col items-center gap-2">
        <h3 className="text-xl">Score: {score}</h3>
        <h3 className="text-xl">Missed: {missed}</h3>
        <h3 className="text-xl">Time Left: {timeLeft}s</h3>
      </div>
      <div className="w-full max-w-md h-40 overflow-y-auto border border-gray-700 rounded-md p-2 bg-gray-800">
        <h3 className="text-xl font-bold text-center mb-2 text-white">
          Leaderboard
        </h3>
        <ol className="list-decimal list-inside text-white">
          {leaderboard.map((score, index) => (
            <li key={index} className="mb-1">
              Score: {score}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default MiniGame;
