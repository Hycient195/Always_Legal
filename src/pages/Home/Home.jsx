import { Paper } from "@mui/material";
import s from "./Home.module.css";
import { homeImages } from "../../constants";

export default function Home() {
  const lawyersArray = [1, 2];

  return (
    <main className={`${s.home_main}`}>
      <div className={`${s.hero_wrapper}`}>
        <section className={`${s.hero_container}`}>
          <div className={`${s.hero_text_container} flex flex-column justify-space-evenly fullheight `}>
            <h1 className={`f-55 b-700 white-text no-m-p ${s.title_text}`}>
              Top startup lawyers for Canadian founders.
            </h1>
            <p className={`f-25 b-300 white-text ${s.subtitle_text}`}>
              From incorporation to Series A — Goodlawyer is the full service legal solution your startup can count on.
            </p>
            <div className={`${s.button_container}`}>
              <button type="button" className="btn p-l-40 p-r-40 green-text bg-white">
                Get started for free
              </button>
            </div>
          </div>

          <div className={`${s.hero_image_container}`}>
            <img src={homeImages.hero_bg_lawyer} alt="" className="" />
            <div className={`${s.doctor_details_container}`}>
              <p className="f-20 white-text">John Doe <strong>Startup Lawyer</strong> </p>
            </div>
          </div>
        </section>
      </div>

      {/* =================== */}
      {/* Partonizers Section */}
      {/* =================== */}
      <section className={`${s.patronizers}`}>
        <ul className="flex flex-row fullwidth justify-space-around grey-text f-25 p-20">
          <li>Patreon 1</li>
          <li>Patreon 2</li>
          <li>Patreon 3</li>
          <li>Patreon 4</li>
          <li>Patreon 5</li>
        </ul>
      </section>

      {/* ======================= */}
      {/* Characteristics Section */}
      {/* ======================= */}
      <section className={`p-50 ${s.charateristics}`}>
        <div className={`${s.wrapper}`}>
          <div className={`${s.left}`}>
            <h1 className="f-40 b-900 navy-text">We&apos;re different.</h1>
            <ul className="">
              <li className="flex g-10 flex-row justify-flex-start">
                <div className={`${s.left}`}>
                  <div className={`${s.dot}`} />
                </div>
                <div className={`grey-text ${s.right}`}>
                  <h3 className="no-m-p">Built for founders</h3>
                  <p className="b-300">
                    Our team understands your needs and your budget. Because we&apos;re founders too.
                  </p>
                </div>
              </li>
              <li className="flex g-10 flex-row justify-flex-start">
                <div className={`${s.left}`}>
                  <div className={`${s.dot}`} />
                </div>
                <div className={`grey-text ${s.right}`}>
                  <h3 className="no-m-p">Top startup lawyers</h3>
                  <p className="b-300">
                    Our team understands your needs and your budget. Because we&apos;re founders too.
                  </p>
                </div>
              </li>
              <li className="flex g-10 flex-row justify-flex-start">
                <div className={`${s.left}`}>
                  <div className={`${s.dot}`} />
                </div>
                <div className={`grey-text ${s.right}`}>
                  <h3 className="no-m-p">No billable hours</h3>
                  <p className="b-300">
                    Our team understands your needs and your budget. Because we&apos;re founders too.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className={`${s.right}`}>
            <iframe
              width="644"
              height="362"
              src="https://www.youtube.com/embed/orVnyudsNuw"
              title="10 Signs You Should Become A Lawyer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* Corporate Lawyers Section */}
      {/* ========================= */}
      <section className={`p-50 ${s.corporate_lawyers}`}>
        <div className={`${s.wrapper}`}>
          <details>
            <summary className="f-30 grey-text b-800"><strong>Meet some of out corporate lawyers</strong></summary>
            <div className={`m-t-40 flex flex-row justify-center wrap g-20 ${s.summary_body}`}>
              {
                lawyersArray.map((entity, index) => (
                  <Paper key={index} className={`p-20 br-20 ${s.lawyer_card}`} elevation={5}>
                    <div className={`${s.head_section} flex flex-row g-15`}>
                      <div className={`${s.image_container} bg-light-blue br-10`}>
                        <img src={homeImages.hero_bg_lawyer} alt="" className="" />
                      </div>
                      <div className={`navy-text ${s.title_text_container}`}>
                        <h1 className="f-30">Nofa Khadduri</h1>
                        <span className="flex flex-row g-10">
                          <span className="">5 (3)</span>
                        </span>
                        <span className="f-18">
                          <p className="">Toronto, ON</p>
                          <span className="">English Arabic</span>
                        </span>
                      </div>
                    </div>
                    <div className={`${s.body_section}`}>
                      <h2 className="navy-text b-300">About</h2>
                      <p className="grey-text f-18 b-300">
                        Nofa is available as a Fractional General Counsel*
                        Specialties: corporate, privacy, tech.
                      </p>
                      <p className="grey-text f-18 b-300">
                        Nofa&apos;s expertise is within the commercial, technology and
                        privacy sectors, working closely with entrepreneurs,
                        start-ups and SMEs. Nofa has 9+ years of experience practicing
                        law and is dual qual...
                      </p>
                      <a href="/" className="dark-teal-text b-300">Read more</a>
                      <h2 className="b-300 navy-text">Industries</h2>
                      <div className={`flex flex-row wrap g-10 ${s.industries_container}`}>
                        <div className="btn border-silver">Marketplace and SaaS</div>
                        <div className="btn border-silver">Cybersecurity, Privacy and Data</div>
                        <a href="/" className="dark-teal-text b-300">See more</a>
                      </div>
                      <div className={`m-t-20 flex flex-row justify-flex-start ${s.button_container}`}>
                        <button type="button" className="btn bg-dark-teal white-text p-l-40 p-r-40">
                          Book with Nofa
                        </button>
                      </div>
                    </div>
                  </Paper>
                ))
              }
            </div>
          </details>

        </div>
      </section>
    </main>
  );
}
