function Footer() {
  return (
    <footer>
      <section className="contact">
        <div className="container">
          <div className='contact-cta'>
            <h3>Contact me!</h3>
            <p>
              Right now I am available for new opportunities, feel free to send
              me an email
            </p>
          </div>
          <div className="telegram-icon">
            <img src="/telegram.svg" alt="telegram icon"></img>
          </div>
        </div>
      </section>
      <section className="copyright">
        <div className="copyright-container">
        <p>Copyright 2021 @Amalia Lorena Ferariu </p>
        <small>Thanks for stopping by</small>
        </div>

      </section>
    </footer>
  );
}

export default Footer;
