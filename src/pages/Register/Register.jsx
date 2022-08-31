import { Paper } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/actions/actions";
import s from "./Register.module.css";

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailAddress: "",
    phoneNumber: "",
    password: "",
    country: "",
    role: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formSendData = {
      fullName: `${formData.firstName} ${formData.lastName}`,
      emailAddress: formData.emailAddress,
      phoneNumber: formData.phoneNumber,
      password: formData.password,
      country: formData.country,
      role: formData.role,
    };
    dispatch(register(formSendData));
    navigate("/");
    console.log(formData);
  };

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
                <form onSubmit={handleSubmit} className={`${s.register_form} bg-very-light-teal p-25`}>
                  <div className={`${s.inputs_container}`}>
                    <label htmlFor="firstname" className="">
                      <p className="b-300 m-b-5">First name</p>
                      <input
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        value={formData.firstName}
                        type="text"
                        id="firstname"
                        className="p-10 border-silver br-5 f-15"
                        placeholder="First name"
                      />
                    </label>
                    <label htmlFor="lastname" className="">
                      <p className="b-300 m-b-5">Last name</p>
                      <input
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        value={formData.lastName}
                        type="text"
                        id="lastname"
                        className="p-10 border-silver br-5 f-15"
                        placeholder="First name"
                      />
                    </label>
                    <label htmlFor="email" className="">
                      <p className="b-300 m-b-5">Email</p>
                      <input
                        onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                        value={formData.emailAddress}
                        type="text"
                        id="email"
                        className="p-10 border-silver br-5 f-15"
                        placeholder="Email"
                      />
                    </label>
                    <label htmlFor="phone" className="">
                      <p className="b-300 m-b-5">Phone Number</p>
                      <input
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        value={formData.phoneNumber}
                        type="text"
                        id="phone"
                        className="p-10 border-silver br-5 f-15"
                        placeholder="Phone"
                      />
                    </label>
                    <label htmlFor="Password" className="">
                      <p className="b-300 m-b-5">Password</p>
                      <input
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        value={formData.password}
                        type="text"
                        id="Password"
                        className="p-10 border-silver br-5 f-15"
                        placeholder="Password"
                      />
                    </label>
                    <label htmlFor="Country" className="">
                      <p className="b-300 m-b-5">Country</p>
                      <input
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        value={formData.country}
                        type="text"
                        id="Country"
                        className="p-10 border-silver br-5 f-15"
                        placeholder="Country"
                      />
                    </label>
                    {/* <label htmlFor="Address" className="">
                      <p className="b-300 m-b-5">Address</p>
                      <input type="text" id="Address" className="p-10 border-silver br-5 f-15" placeholder="Address" />
                    </label> */}
                    {/* <label htmlFor="city" className="">
                      <p className="b-300 m-b-5">City</p>
                      <input type="text" id="city" className="p-10 border-silver br-5 f-15" placeholder="City" />
                    </label> */}
                    <label htmlFor="firstname" className="">
                      <p className="b-300 m-b-5">Role</p>
                      <select
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        value={formData.role}
                        name=""
                        id=""
                        className="p-10 border-silver br-5 f-15 bg-white"
                      >
                        <option value="" className="">Select a role</option>
                        <option value="client" className="">Client</option>
                        <option value="organization" className="">Organization</option>
                      </select>
                    </label>
                    {/* <label htmlFor="postalCode" className="">
                      <p className="b-300 m-b-5">Postal code</p>
                      <input type="text" id="postalCode" className="p-10 border-silver br-5 f-15" placeholder="Postal code" />
                    </label>
                    <label htmlFor="PhoneNumber" className="">
                      <p className="b-300 m-b-5">Phone number</p>
                      <input type="text" id="PhoneNumber" className="p-10 border-silver br-5 f-15" placeholder="Phone number" />
                    </label> */}
                  </div>

                  {/* <div className={`${s.form_footer} m-t-60`}>
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
                  </div> */}
                  <div className={`${s.buttons_container} flex flex-row g-15 p-15 justify-center m-t-40`}>
                    <button type="submit" className="btn bg-dark-teal white-text p-l-40 p-r-40">
                      Register
                    </button>
                  </div>
                </form>
              </Paper>

              {/* =============== */}
              {/* Proceed Section */}
              {/* =============== */}
              {/* <section className={`${s.proceed} m-t-60`}>
                <p className="b-300">
                  By continuing, you accept the <a href="/" className="dark-teal-text">AlwaysLegal Terns of Use</a>
                  and <a href="/" className="dark-teal-text">Privacy Policy</a>
                </p>
                <div className={`${s.buttons_container} flex flex-row g-15 p-15 justify-center`}>
                  <button type="button" className="btn grey-text p-l-40 p-r-40">
                    Back
                  </button>
                  <button type="button" className="btn bg-dark-teal white-text p-l-40 p-r-40">
                    Next
                  </button>
                </div>
              </section> */}
            </div>
          </div>
        </main>
      </div>
    </main>
  );
}
