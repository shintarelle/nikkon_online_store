'use client'
import React, { useRef, useState } from "react";

function App() {
  const targetRef = useRef<HTMLImageElement>(null);
  const sourceRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [opacity, setOpacity] = useState(0);
  const [offset, setOffset] = useState({ left: 0, top: 0 });

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const handleMouseMove = (e: { pageX: number; pageY: number; }) => {
    const targetRect = targetRef.current?.getBoundingClientRect();
    const sourceRect = sourceRef.current?.getBoundingClientRect();
    const containerRect = containerRef.current?.getBoundingClientRect();

    if (!targetRect || !sourceRect || !containerRect) {
    return; // Выходим из функции, если какой-либо из ректов не определен
  }

    const xRatio = (targetRect.width - containerRect.width) / sourceRect.width;
    console.log('xRatio', xRatio)
    const yRatio =
      (targetRect.height - containerRect.height) / sourceRect.height;
     console.log('yRatio', yRatio)
    const left = Math.max(
      Math.min(e.pageX - sourceRect.left, sourceRect.width),
      0
    );
    const top = Math.max(
      Math.min(e.pageY - sourceRect.top, sourceRect.height),
      0
    );
console.log(left, top)
    setOffset({
      left: left * -xRatio,
      top: top * -yRatio
    });
  };

  return (
    <div className="App">
      <div className="relative overflow-hidden border border-solid border-teal-500 rounded-lg w-[400px] h-[400px]" onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={containerRef}>
        <img src="/product1.jpeg" alt="source" ref={sourceRef} className="absolute" />
        <img src="/prod1.jpeg" alt="target" ref={targetRef} className="absolute w-[600px] h-[800px]" style={{ opacity, left: offset.left, top: offset.top,  }} />
      </div>
    </div>
  );
}

export default App;
