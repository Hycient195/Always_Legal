import { Paper } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions/actions";
import s from "./Login.module.css";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    user: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formSendData = {
      user: formData.user,
      password: formData.password,
    };
    dispatch(login(formSendData));
    navigate("/");
    console.log(formData);
  };

  return (
    <main className={`${s.register_wrapper}`}>
      <div className={`${s.register_container}`}>

        <main className={`${s.register_main}`}>
          <div className={`${s.register_main_container} p-50`}>
            <div action="" className="">
              <Paper elevation={3} className={`bg-very-light-teal br-20 fullwidth ${s.form_paper}`}>
                <div className={`${s.info} p-20 bg-light-teal`}>
                  <h2 className="navy-text b-800">Login Details</h2>
                  {/* <p className=" navy-text b-300">
                    You are currently signing up as a customer. If you want
                    to apply to be a lawyer on the platform, <a href="/" className="dark-teal-text">click here</a>.
                    This information will show who the account belongs to.
                  </p> */}
                </div>
                <form onSubmit={handleSubmit} className={`${s.register_form} bg-very-light-teal p-25`}>
                  <div className={`${s.inputs_container}`}>
                    <label htmlFor="email" className="">
                      <p className="b-300 m-b-5">Email</p>
                      <input
                        onChange={(e) => setFormData({ ...formData, user: e.target.value })}
                        value={formData.user}
                        type="text"
                        id="email"
                        className="p-10 border-silver br-5 f-15"
                        placeholder=""
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
                        placeholder=""
                      />
                    </label>
                  </div>

                  <div className={`${s.buttons_container} flex flex-row g-15 p-15 justify-center m-t-40`}>
                    <button type="submit" className="btn bg-dark-teal white-text p-l-40 p-r-40">
                      Login
                    </button>
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
