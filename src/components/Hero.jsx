import React from 'react';
import Button from './Button';
import anime from 'animejs/lib/anime.js';

export default function Hero() {
  const waterDropGrid = () => {
    return (
      <div className="group cursor-crosshair rounded-full p-2 transition-color hover:bg-slate-600">
        <DotGrid />
      </div>
    );
  };

  const gridWidth = 15;
  const gridHeight = 15;

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
              className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-green-700 from-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
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
    <>
      <div className="flex">
        <div className="flex-col">
          <h1 className="text-3xl">Hi, I am Jacek!</h1>
          <h2 className="text-3xl">Full stack developer.</h2>
          <p>
            I'm a full-stack developer that just graduated from Le Wagon. This
            site will be used to write about code, design, and more.
          </p>
        </div>

        {/* Linkedin, Github, Twitter  */}
        <div className="flex-col">
          <DotGrid />
        </div>
        <script src="anime.min.js"></script>
      </div>
      <div className="flex justify-center gap-5">
        <Button
          name="LinkedIn"
          logo="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
        />
        <Button
          name="Github"
          logo="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg"
        />
        <Button
          name="Twitter"
          logo="https://cdn.worldvectorlogo.com/logos/twitter-3.svg"
        />
      </div>
    </>
  );
}
