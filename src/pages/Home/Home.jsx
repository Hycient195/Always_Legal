import s from "./Home.module.css";
import { homeImages } from "../../constants";

export default function Home() {
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
            <h1 className="f-40 b-900">We&apos;re different.</h1>
            <ul className="">
              <li className="flex g-10 flex-row justify-flex-start">
                <div className={`${s.left}`} />
                <div className={`${s.right}`}>
                  <h3 className="no-m-p">Built for founders</h3>
                  <p className="b-300">
                    Our team understands your needs and your budget. Because we&apos;re founders too.
                  </p>
                </div>
              </li>
              <li className="flex g-10 flex-row justify-flex-start">
                <div className={`${s.left}`} />
                <div className={`${s.right}`}>
                  <h3 className="no-m-p">Top startup lawyers</h3>
                  <p className="b-300">
                    Our team understands your needs and your budget. Because we&apos;re founders too.
                  </p>
                </div>
              </li>
              <li className="flex g-10 flex-row justify-flex-start">
                <div className={`${s.left}`} />
                <div className={`${s.right}`}>
                  <h3 className="no-m-p">No billable hours</h3>
                  <p className="b-300">
                    Our team understands your needs and your budget. Because we&apos;re founders too.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className={`${s.right}`}>
            h
          </div>
        </div>
      </section>
    </main>
  );
}
