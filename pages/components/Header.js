import { useRef, useEffect } from "react";
import Image from "next/image";
import { mailTo } from "../../utils/utils";
import { gsap } from "gsap";

export const fadeIn = (ref) => {
  gsap.fromTo(
    ref.current,
    { autoAlpha: 0 },
    {
      autoAlpha: 1,
      duration: 1,
      delay: 1,
      scrollTrigger: {
        trigger: ref.current,
        once: false,
      },
    }
  );
}

function Header() {
  const instaRef = useRef();
  const gitRef = useRef();
  const emailRef = useRef();
  const hiRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    gsap.to(instaRef.current, { rotation: "+=360", duration: 2 });
    gsap.to(gitRef.current, { rotation: "+=360", duration: 2 });
    gsap.to(emailRef.current, { rotation: "+=360" });

    gsap.fromTo(
      hiRef.current,
      { autoAlpha: 0, y: -10, scale: 0 },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 1,
        // scrollTrigger: {
        //   trigger: hiRef.current,
        // },
      }
    );

    fadeIn(textRef);
  });

  return (
    <header>
      <div className="greeting-bubble" ref={hiRef}>
        <a
          href="https://www.instagram.com/sherbetlemonit/"
          className="social-bubble social-instagram"
          ref={instaRef}
        >
          <Image src="/instagram.svg" alt="instagram" width="32" height="32" />
        </a>
        <a
          href="https://github.com/amalialorena"
          className="social-bubble social-github"
          ref={gitRef}
        >
          <Image src="/github.svg" alt="github" width="32" height="32" />
        </a>
        <a href={mailTo} className="social-bubble social-email" ref={emailRef}>
          <Image src="/email.svg" alt="email" width="32" height="32" />
        </a>
        <h2>Hi,</h2>
      </div>
      <div className="greeting-text" ref={textRef}>
        <span>
          My name is <span className="name">Amalia</span>,
        </span>
        <br />
        <span>
          I am a junior <span>Frontend Developer</span> based in Lecco (Italy).
        </span>
      </div>

      <Image
        src="/available-dot.svg"
        alt="avaliability dot"
        width="12"
        height="12"
      />
      <p>Right now I am available for work</p>
      <a href={mailTo} className="button greeting-button">
        <Image src="/mail.svg" alt="mail" width="16" height="16" />
        <span>Contact me</span>
      </a>
    </header>
  );
}

export default Header;
