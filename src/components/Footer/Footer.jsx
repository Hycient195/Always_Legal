import "./Footer.css";
import { footerIcons } from "../../constants";

export default function Footer() {
  return (
    <footer>
      <div className="footer_container">
        <div className="footer_left">
          <div className="button_group" />
        </div>
        {/* <div className="footer_right">
          {
            footerItems.map((item, index)=>(
              <ul key={index}>
                {
                  item.map((entity, innerIndex)=>(
                    <li key={innerIndex}>
                      <a href={entity.link}>{entity.text}</a>
                    </li>
                  ))
                }
              </ul>
            ))
          }
        </div> */}
      </div>
      {/* <div className="footer_bottom centralize">
        <div className="addresses">
          <h2 className="title">WINSOFT LAB</h2>
          <address>29 Treasure Avenue, Off Eneka Link Road, Rumowa,
            Eneka, PHC, Rivers State
          </address>
          <address>
            56 Anthony Enahoro St., Jabbi, FCT Abuja
          </address>
        </div>
        <br />
        <ul>
          <li>All Content Copyright 2022</li><span>|</span>
          <li><a href="">Privacy Policy</a></li><span>|</span>
          <li><a href="">Terms Of Use</a></li><span>|</span>
          <li><a href="">Notice Of Privacy Practices</a></li>
        </ul>
      </div> */}

      <section className="footer_socials">
        <div className="footer_socials_content">
          <span className="logo_container">
            {/* <img src={footerIcons.logoAndText} alt="" /> */}
          </span>
          <span className="social_icons">
            <a href="facebook.com"><img src={footerIcons.facebook} alt="facebook icon" /></a>
            <a href="linkedin.com"><img src={footerIcons.linkedin} alt="linkedin icon" /></a>
            <a href="twitter.com"><img src={footerIcons.twitter} alt="twitter icon" /></a>
          </span>
        </div>
      </section>

      {/* <section className="footer_credit centralize flex flex column align-center justify-center p-10">
        <p className="no-m-p" >Copyright &copy; 2022 All Rights Reserved</p>
      </section> */}
    </footer>
  );
}
