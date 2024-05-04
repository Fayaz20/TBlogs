import './Contactus.css'
import {Helmet} from 'react-helmet'
export const Contactus = () => {

  return (
    <>
      <Helmet>
        <script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
      </Helmet>
      <section className="cntus-section">
        <div className="cntus">
          <h1 className='cntush1a'>Contact Us</h1>
          <p>Feel free to reach out to us through the following channels:</p>
          <div className="contact-links">
            <a href="mailto:info@travelblog.com"><i className="social-icon fas fa-envelope"></i></a>
            <a href="tel:+919566830591"><i className="social-icon fas fa-phone"></i></a>
            <a href="https://www.linkedin.com/company/travelblog"><i className="social-icon fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com/travelblog"><i className="social-icon fab fa-instagram"></i></a>
            <a href="https://www.facebook.com/travelblog"><i className="social-icon fab fa-facebook-f"></i></a>
          </div>
        </div>
      </section>

    </>
  );
}