import { Paper } from "@mui/material";
import s from "./Register.module.css";

export default function Register() {
  return (
    <main className={`${s.register_wrapper}`}>
      <div className={`${s.register_container}`}>
        <aside className="p-t-50">
          <div className={`${s.introductions} br-15 p-20 bg-white m-20`}>
            <h1 className="navy-text f-35 centralize b-900">
              Let&apos;s go to know you!
            </h1>
            <h2 className="f-20 centralize">
              Why do we need this information?
            </h2>
            <p className="centralize f-18 b-300 grey-text">
              In order for a lawyer to work with a client, this
              information is legally required in Canada.
            </p>
            <p className="centralize f-18 b-300 grey-text">
              We can also use this information to serve you better
              and recommend more suitable lawyers for your business.
              Goodlawyer does not sell your personal information for
              any purposes.
            </p>
          </div>

          <div className={`${s.steps} m-t-60 flex justify-center p-t-60 p-b-60`}>
            <ul className="flex flex-column g-50">
              <li className="flex flex-row align-center g-20">
                <div className={`${s.left} f-20 dark-teal-text`}>1</div>
                <div className={`${s.right} flex flex-column g-5`}>
                  <p className="no-m-p navy-text">Step 1</p>
                  <h3 className="no-m-p f-25 navy-text b-900">Personal info</h3>
                </div>
              </li>
              <li className="flex flex-row align-center g-20">
                <div className={`${s.left} f-20 dark-teal-text`}>2</div>
                <div className={`${s.right} flex flex-column g-5`}>
                  <p className="no-m-p navy-text">Step 2</p>
                  <h3 className="no-m-p f-25 navy-text b-900">Business info</h3>
                  <p className="no-m-p navy-text">Only for business</p>
                </div>
              </li>
              <li className="flex flex-row align-center g-20">
                <div className={`${s.left} f-20 dark-teal-text`}>3</div>
                <div className={`${s.right} flex flex-column g-5`}>
                  <p className="no-m-p navy-text">Step 3</p>
                  <h3 className="no-m-p f-25 navy-text b-900">Review</h3>
                </div>
              </li>
              <li className={`${s.line}`} />
            </ul>
          </div>
        </aside>

        <main className={`${s.register_main}`}>
          <div className={`${s.register_main_container} p-50`}>
            <div action="" className="">
              <Paper elevation={3} className={`bg-very-light-teal br-20 ${s.form_paper}`}>
                <div className={`${s.info} p-20 bg-light-teal`}>
                  <h2 className="navy-text b-800">Personal info</h2>
                  <p className=" navy-text b-300">
                    You are currently signing up as a customer. If you want
                    to apply to be a lawyer on the platform, <a href="/" className="dark-teal-text">click here</a>.
                    This information will show who the account belongs to.
                  </p>
                </div>
                <form action="" className={`${s.register_form} bg-very-light-teal p-25`}>
                  <div className={`${s.inputs_container}`}>
                    <label htmlFor="firstname" className="">
                      <p className="b-300 m-b-5">First name</p>
                      <input type="text" id="firstname" className="p-10 border-silver br-5 f-15" placeholder="First name" />
                    </label>
                    <label htmlFor="lastname" className="">
                      <p className="b-300 m-b-5">Last name</p>
                      <input type="text" id="lastname" className="p-10 border-silver br-5 f-15" placeholder="First name" />
                    </label>
                    <label htmlFor="Address" className="">
                      <p className="b-300 m-b-5">Address</p>
                      <input type="text" id="Address" className="p-10 border-silver br-5 f-15" placeholder="Address" />
                    </label>
                    <label htmlFor="city" className="">
                      <p className="b-300 m-b-5">City</p>
                      <input type="text" id="city" className="p-10 border-silver br-5 f-15" placeholder="City" />
                    </label>
                    <label htmlFor="firstname" className="">
                      <p className="b-300 m-b-5">Province</p>
                      <select name="" id="" className="p-10 border-silver br-5 f-15 bg-white">
                        <option value="" className="">Select a province</option>
                        <option value="" className="">Option 2</option>
                        <option value="" className="">Option 3</option>
                      </select>
                    </label>
                    <label htmlFor="postalCode" className="">
                      <p className="b-300 m-b-5">Postal code</p>
                      <input type="text" id="postalCode" className="p-10 border-silver br-5 f-15" placeholder="Postal code" />
                    </label>
                    <label htmlFor="PhoneNumber" className="">
                      <p className="b-300 m-b-5">Phone number</p>
                      <input type="text" id="PhoneNumber" className="p-10 border-silver br-5 f-15" placeholder="Phone number" />
                    </label>
                  </div>

                  <div className={`${s.form_footer} m-t-60`}>
                    <p className="b-600">Busines type</p>
                    <p className="b-300">
                      Are you signing up on behalf of a business, or are
                      you applying as an individual?
                    </p>
                    <div className={`${s.inputs_container}`}>
                      <label htmlFor="firstname" className="">
                        <p className="b-300 m-b-5">Select your business type</p>
                        <select name="" id="" className="p-10 border-silver br-5 f-15 bg-white grey-text">
                          <option value="" className="">Select</option>
                          <option value="" className="">Option 2</option>
                          <option value="" className="">Option 3</option>
                        </select>
                      </label>
                      <label htmlFor="firstname" className="">
                        <p className="b-300 m-b-5">Position / title</p>
                        <input type="text" id="firstname" className="p-10 border-silver br-5 f-15" placeholder="Your position / title" />
                      </label>
                    </div>
                  </div>
                </form>
              </Paper>
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}
