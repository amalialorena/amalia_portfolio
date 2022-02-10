import { useRef, useEffect } from 'react';
import { gsap } from "gsap";


function Intro() {
  const introRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      introRef.current,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        duration: 1,
        delay: 1,
        scrollTrigger: {
          trigger: document.querySelector('.intro'),
          once: false,
          markers: true
        },
      }
    );
  });

  return (
    <div className="intro" ref={introRef} >
      I am creative, attentive to details with a passion for illustration,
      programming and animation, I dream of being able to help create solutions
      that leave a positive mark on the world. I gained experience with various
      technologies through the Boolean bootcamp which gave me the necessary
      knowledge to create web applications, interface with databases, query
      languages, data modeling and much more.
    </div>
  );
};

export default Intro;
