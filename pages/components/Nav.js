import Image from "next/image";

import { mailTo } from './utils';

function Nav() {
  return (
    <nav>
      <div className="name-container">
        <div className="logo">
          <Image src="/logo.svg" alt="logo" width="29" height="29" />
        </div>
        <span className="nav-name">
          <div clspanssName="my-name">
            <strong>Amalia</strong> Ferariu
          </div>
          <div className="portfolio">Personal portfolio</div>
        </span>
      </div>
      <div>
        <a href={mailTo} className="button greeting-button">
          <Image src="/mail.svg" alt="mail" width="16" height="16" />
          <span>Contact me</span>
        </a>
      </div>
    </nav>
  );
}

export default Nav;
