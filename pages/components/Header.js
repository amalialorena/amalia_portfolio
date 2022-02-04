function Header() {
    return (
      <header>
       <div className="greeting-bubble">
       <h1>Hi,</h1>
       </div>
       <span>
         My name is <span className="name">Amalia</span>,
       </span>
       <span>
         I am a junior <span>Frontend Developer</span>  based in Lecco.
       </span>
       <img src="http:/available-dot.svg" alt="avaliability dot"></img>
       <p>
         Right now I am available for work
       </p>
       <button>Contact me</button>
      </header>
    );
  }
  
  export default Header;