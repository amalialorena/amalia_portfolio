import Image from 'next/image';
function Footer() {
  return (
    <footer>
      <section className="contact">
        <a href="mailto:amasherbet@gmail.com subject=amalia%20portfolio%20contact" className="container">
          <div className='contact-cta'>
            <h3>Contact me!</h3>
            <p>
              Right now I am available for new opportunities, feel free to send
              me an email
            </p>
          </div>
          <div className="telegram-icon">
            <Image src="/telegram.svg" alt="telegram icon" width="33" height="34"/>
          </div>
        </a>
      </section>
      <section className="copyright">
        <div className="copyright-container">
        <p>Copyright 2021 @ Amalia Lorena Ferariu </p>
        <small>Thanks for stopping by</small>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
