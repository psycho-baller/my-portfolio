import { useProgress } from "@react-three/drei";
import "@styles/logo.css";
import { useState, type CSSProperties, useEffect } from "react";
export default function Suspense() {
  const { progress, active } = useProgress();
  const progressBarContainerStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    maxWidth: "500px",
    textAlign: "center",
  } as CSSProperties;

  const progressBarStyle = {
    display: "inline-block",
    width: "100%",
    height: "10px",
    backgroundColor: "gray",
    borderRadius: "5px",
    overflow: "hidden",
  };

  const progressBarFillStyle = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "turquoise",
  };

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  return (
    <section
      // center
      style={
        {
          // opacity: mounted ? 1 : 0,
          // transition: "opacity 0.5s ease-in-out",
          // background: "rgba(0,0,0,.4)",
        }
      }
      className={"h-full w-full"}
    >
      <div
        style={progressBarContainerStyle}
        className="flex flex-col gap-y-10"
      >
        <h1 className="flex items-center justify-center text-4xl sm:text-7xl text-cyan-300 modak">
          {/* <img src="favicon.svg" alt="Logo" class="h-8" /> */}
          Welcome to RAMI&apos;s Universe
        </h1>
        <div style={progressBarStyle}>
          <div style={progressBarFillStyle}></div>
        </div>
      </div>
    </section>
  );
}
