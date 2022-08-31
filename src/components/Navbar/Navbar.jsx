import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useRef } from "react";
// import { homeImages } from "../../constants";

export default function Navbar() {
  const location = useLocation();

  // console.log(footerItems[0])
  const hidden = useRef();
  const mobileNnav = useRef();

  const toggleDropdown = () => {
    if (hidden.current.className !== "hidden") {
      hidden.current.className = "hidden";
    } else {
      hidden.current.className = "dropdown";
    }
  };

  const toggleNav = () => {
    toggleDropdown();
  };

  return (
    <header>
      <nav className="bg-dark-teal">
        <div className="title_container">
          {/* <img src={homeImages.logoBlue} alt="" /> */}
          <div className="title">
            <h1 className="title-text white-text">AlwaysLegal</h1>
            {/* <p className="subtitle_text">
              ... subtitle goes here
            </p> */}
          </div>

        </div>
        <ul>
          {
            !location.pathname.endsWith("/")
            && <li><Link to="/">Home</Link></li>
          }
          <li className="login"><a href="/register">Register</a></li>
          <li className="get_started"><a href="/login">Login</a></li>
          {/* <li><Link to="/contact-us">Contact</Link></li> */}
          <li className="hamburger">
            <button type="button" onClick={toggleDropdown}>
              <div className="line" />
              <div className="line" />
              <div className="line" />
            </button>
          </li>
        </ul>
      </nav>

      {/*= ======================= */}
      {/* Navbar Dropdown Secion */}
      {/*= ======================= */}
      <div className="hidden" ref={hidden}>
        <div className="dropdown_navbar">
          <h2>AlwaysLegal</h2>
          <button type="button" onClick={toggleDropdown}>
            <div className="line" />
            <div className="line" />
          </button>
        </div>

        <ul className="mobile_nav" ref={mobileNnav}>
          {
            !location.pathname.endsWith("/")
            && <li><Link to="/">Home</Link></li>
          }
          <li><Link onClick={toggleNav} to="/register">register</Link></li>
          <li><Link onClick={toggleNav} to="/login">Login</Link></li>
          {/* <li><Link onClick={toggleNav} to="/contact-us">Contact us</Link></li> */}
        </ul>

        {/* <ul className="buttons">
          <li><a href="#">ORDER A TEST</a></li>
          <li><a href="#">LOG IN</a></li>
          <li><a href="#">CONTACT US</a></li>
        </ul>

        <div className="footer_items">
        {
          footerItems.map((item, index) => (
            <ul key={index} >
              {
                item.map((entity, innerIndex) => (
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
      {/* <div className="colorful_line" /> */}
    </header>
  );
}

