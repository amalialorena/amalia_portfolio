import Image from "next/image";
import { mailTo } from '../../utils/utils';

function Header() {
  return (
    <header>
      <div className="greeting-bubble">
        <h2>Hi,</h2>
      </div>
      <div className="greeting-text">
        <span>
          My name is <span className="name">Amalia</span>,
        </span>
        <br />
        <span>
          I am a junior <span>Frontend Developer</span> based in Lecco.
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
        <Image
        src="/mail.svg"
        alt="mail"
        width="16"
        height="16"
        />
        <span>Contact me</span>
      </a>
    </header>
  );
}

export default Header;
