import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { footerItems } from "../../constants";

export default function Footer() {
  return (
    <footer className="bg-light-silver p-20 p-t-50">
      <div className="footer_container">
        <div className="footer_right">
          {
            footerItems.map((item, index) => (
              <ul key={index}>
                {
                  item.map((entity, innerIndex) => (
                    <li key={innerIndex}>
                      <a className="f-15 grey-text" href={entity.link}>{entity.text}</a>
                    </li>
                  ))
                }
              </ul>
            ))
          }
        </div>
        <div className="flex g-20 flex-column footer_left">
          <div className="button_group">
            <ul className="flex flex-row g-20">
              <li><a className="dark-teal-text f-30" aria-label="facebook" href="https://facebook.com"><FacebookIcon /></a></li>
              <li><a className="dark-teal-text f-30" aria-label="instagram" href="https://instagram.com"><InstagramIcon /></a></li>
              <li><a className="dark-teal-text f-30" aria-label="linkedin" href="https://linkedin.com"><LinkedInIcon /></a></li>
              <li><a className="dark-teal-text f-30" aria-label="twitter" href="https://twitter.com"><TwitterIcon /></a></li>
            </ul>
          </div>
          <h2 className="navy-text no-m-p f-25 b-800">Need some help?</h2>
          <p className="b-300 no-m-p f-20 dark-teal-text">Message Us</p>
          <p className="f-12 no-m-p grey-text help-text">
            Goodlawyer is an interactive online service that makes it
            faster and easier for clients to find and hire legal help
            solely based on their preferences. We are not a law firm,
            do not provide any legal services, legal advice or
            “lawyer referral services” and do not provide or
            participate in any legal representation.
          </p>
        </div>
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
          <li><a href="/">Privacy Policy</a></li><span>|</span>
          <li><a href="/">Terms Of Use</a></li><span>|</span>
          <li><a href="/">Notice Of Privacy Practices</a></li>
        </ul>
      </div> */}

      {/* <section className="footer_socials">
        <div className="footer_socials_content">
          <span className="logo_container">
            <img src={footerIcons.logoAndText} alt="" />
          </span>
          <span className="social_icons">
            <a href="facebook.com"><img src={footerIcons.facebook} alt="facebook icon" /></a>
            <a href="linkedin.com"><img src={footerIcons.linkedin} alt="linkedin icon" /></a>
            <a href="twitter.com"><img src={footerIcons.twitter} alt="twitter icon" /></a>
          </span>
        </div>
      </section> */}

      <section className="footer_credit grey-text justify-flex-end flex flex column align-center justify-center p-10">
        <p className="no-m-p">Copyright © Goodlawyer Inc. 2022</p>
      </section>
    </footer>
  );
}
