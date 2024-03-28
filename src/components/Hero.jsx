import React from 'react';
import anime from 'animejs/lib/anime.js';

export default function Hero() {
  anime({
    targets: '.circle',
    translateX: 250,
    rotate: '1turn',
    backgroundColor: '#FFF',
    duration: 800,
  });

  return (
    <div className="hero">
      <h1>Hi, I am Jacek!</h1>
      <p>I am a full stack developer.</p>
      <p>
        I'm an aspiring full-stack developer that just graduated from Le Wagon
        This site will be used to write about code, design, and more.
      </p>

      {/* Linkedin, Github, Twitter  */}

      <div className="circle">Test</div>

      <script src="anime.min.js"></script>
    </div>
  );
}
