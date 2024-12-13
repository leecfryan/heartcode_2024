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
  const player = useRef<{ x: number; width: number; svg?: HTMLImageElement }>({
    x: 250,
    width: 100,
  });
  const keys = useRef<{ [key: string]: boolean }>({});
  const svgs = useRef<HTMLImageElement[]>([]);

  // Preload player SVG
  useEffect(() => {
    if (typeof window !== "undefined") {
      const playerImage = new Image();
      playerImage.src = "assets/player.svg"; // Replace with your player SVG path
      player.current.svg = playerImage;
    }
  }, []);

  // Preload falling object SVGs
  useEffect(() => {
    if (typeof window !== "undefined") {
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
    }
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const generateObject = () => {
      const size = Math.random() * 20 + 30; // Random size between 20 and 40
      const svg = svgs.current[Math.floor(Math.random() * svgs.current.length)];
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
        player.current.x -= 5;
      }
      if (
        keys.current["ArrowRight"] &&
        player.current.x < canvas.width - player.current.width
      ) {
        player.current.x += 5;
      }
    };

    const updateGame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw player SVG
      if (player.current.svg) {
        ctx.drawImage(
          player.current.svg,
          player.current.x,
          canvas.height - 60, // Adjust for player's height
          100, // Player's width
          50 // Player's height
        );
      }

      // Draw and update objects
      objects.current.forEach((obj, i) => {
        ctx.drawImage(obj.svg, obj.x, obj.y, obj.size, obj.size);

        obj.y += 5;

        if (
          obj.y >= canvas.height - 60 &&
          obj.x >= player.current.x &&
          obj.x <= player.current.x + 100
        ) {
          setScore((prev) => prev + 1);
          objects.current.splice(i, 1);
        }

        if (obj.y > canvas.height) {
          setMissed((prev) => prev + 1);
          objects.current.splice(i, 1);
        }
      });

      movePlayer();

      if (missed >= 5 || timeLeft <= 0) {
        setIsRunning(false);
        updateLeaderboard(score);
      } else {
        animationFrameId = requestAnimationFrame(updateGame);
      }
    };

    if (isRunning) {
      const intervalId = setInterval(generateObject, 1000);
      updateGame();

      return () => {
        clearInterval(intervalId);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [isRunning, missed, timeLeft]);

  useEffect(() => {
    // Handle key presses for player movement
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
    setTimeLeft(30);
    setIsRunning(true);
    objects.current = [];
  };

  const updateLeaderboard = (newScore: number) => {
    setLeaderboard((prev) => {
      const updated = [...prev, newScore];
      updated.sort((a, b) => b - a);
      if (updated.length > 10) {
        updated.pop();
      }
      return updated;
    });
  };

  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <h1 className="text-xl">Catch the Falling Objects</h1>
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        className="border rounded-md bg-white"
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
      <div className="w-full max-w-md h-40 overflow-y-auto border rounded-md p-2">
        <h3 className="text-xl font-bold text-center mb-2">Leaderboard</h3>
        <ol className="list-decimal list-inside">
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
