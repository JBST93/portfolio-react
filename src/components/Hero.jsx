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

  const gridWidth = 20;
  const gridHeight = 4;

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
      <div className=" mt-5 text-left md:grid md:grid-cols-2 md:text-left md:relative">
        <div className="hero-headline">
          <h1 className="text-3xl p-0 m-0 font-bold pb-2">
            Welcome! I am Jacek! 👋
          </h1>
          <h2 className="text-2xl p-0 m-0">Full Stack Developer</h2>
          <p className="mt-5 text-left">
            I recently completed Le Wagon full-time bootcamp, I am pleased to
            explore a new path.
          </p>
          <p className="pt-4">
            Previously, I held position as business strategy manager at
            bitFlyer, Japan's leading cryptocurrency exchange. In this role, I
            oversaw strategic initiatives, driving product development and
            innovation
          </p>

          <p className="pt-4">
            Today, I am deeply engaged in developing my skills and provide
            meaningful solution and intersection between business and tech
          </p>

          <div className="flex flex-row gap-4 my-4 md:absolute md:bottom-0 justify-center">
            <Button
              logo="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
              href="https://www.linkedin.com/in/bastinjacek/"
            />
            <Button logo="https://cdn.worldvectorlogo.com/logos/github-icon-2.svg" />
            <Button logo="https://cdn.worldvectorlogo.com/logos/twitter-3.svg" />
          </div>
        </div>
        <div className="hero-waves justify-center py-5 md:py-0">
          <DotGrid />
        </div>
      </div>

      <div className="flex justify-center gap-5 absolute bottom-0"></div>

      <script src="anime.min.js"></script>
    </>
  );
}
