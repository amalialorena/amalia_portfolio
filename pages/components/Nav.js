import Image from "next/image";

function Nav() {
  return (
    <nav>
      <div className="name-container">
        <div className="logo">
          <Image src="/logo.svg" alt="logo" width="29" height="29" />
        </div>
        <a>
          <div className="my-name">
            <strong>Amalia</strong> Lorena Ferariu
          </div>
          <div className="portfolio">Personal portfolio</div>
        </a>
      </div>
      <div>
        <button className="greeting-button">
          <Image src="/mail.svg" alt="mail" width="16" height="16" />
          <span>Contact me</span>
        </button>
      </div>
    </nav>
  );
}

export default Nav;
