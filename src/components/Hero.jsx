import React from 'react';
import anime from 'animejs/lib/anime.js';

export default function Hero() {
  const waterDropGrid = () => {
    return (
      <div className="group cursor-crosshair rounded-full p-2 transition-color hover:bg-slate-600">
        <DotGrid />
      </div>
    );
  };

  const gridWidth = 50;
  const gridHeight = 10;

  function DotGrid() {
    function handleDotClick(event) {
      anime({
        targets: '.dot-point',
        scale: [
          { value: 1.35, easing: 'easeOutSine', duration: 250 },
          { value: 1, easing: 'easeInOutQuad', duration: 500 },
        ],
        translateY: [
          { value: -15, easing: 'easeOutSine', duration: 250 },
          { value: 0, easing: 'easeInOutQuad', duration: 500 },
        ],
        opacity: [
          { value: 1, easing: 'easeOutSine', duration: 250 },
          { value: 0.5, easing: 'easeInOutQuad', duration: 500 },
        ],
        delay: anime.stagger(100, {
          grid: [gridWidth, gridHeight],
          from: event.target.dataset.index,
        }),
      });
    }

    const dots = [];
    let index = 0;

    for (let i = 0; i < gridWidth; i++) {
      for (let j = 0; j < gridHeight; j++) {
        dots.push(
          <div
            onClick={handleDotClick}
            className="group cursor-crosshair rounded-full p-2 transition-color hover:bg-slate-600"
            data-index={index}
            key={`${i}-${j}`}
          >
            <div
              className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 from-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
              data-index={index}
            />
          </div>
        );
        index++;
      }
    }

    return (
      <div
        className="grid w-fit"
        style={{ gridTemplateColumns: `repeat(${gridWidth}, 1fr)` }}
      >
        {dots}
      </div>
    );
  }

  return (
    <div className="flex flex-row">
      <div className="hero">
        <h1 className="text-2xl">Hi, I am Jacek!</h1>
        <p className="text-3xl font-bold underline">
          I am a full stack developer.
        </p>
        <p>
          I'm an aspiring full-stack developer that just graduated from Le Wagon
          This site will be used to write about code, design, and more.
        </p>

        {/* Linkedin, Github, Twitter  */}

        <DotGrid />

        <script src="anime.min.js"></script>
      </div>
    </div>
  );
}
