import classes from "../login/LoginView.module.css";
import { useState, useRef } from "react";
import { useNavigate} from "react-router-dom";
import { api } from "../../link/API";

const LoginView = () => {
  // values inputed in the form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // handle loading on submit
  const [loading, setLoading] = useState(false);

  //password visibility state
  const [show, setshow] = useState(false);
  const [eye, setEye] = useState("fa-eye-slash")
  const pass = useRef();

  // error messages and status
  const [loginError, setLoginError] = useState("");
  const [dip, setDip] = useState("none");

  const navigate = useNavigate();

  //password visibility handler
  const showPassword = () => {
    setshow(!show);
    show ? setEye("fa-eye-slash") : setEye("fa-eye");
    pass.current.type = show ? "password" : "text";
  };

  const onSubmitForm = async(e) => {
    e.preventDefault();
    try {
      setLoading(true);
      //api call for sending the user data to the backend
      await fetch(`${api}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password
        }),
      }).then((res) => {
        if (res.status === 401) {
          setDip("block");
          setLoading(false);
          return setLoginError("Incorrect email...");
        } else if (res.status === 403) {
          setDip("block");
          setLoading(false);
          return setLoginError("Incorrect password...");
        } else if (res.status === 411) {
          setDip("block");
          setLoading(false);
          return setLoginError("Something went wrong...");
        } else {
          setLoading(false);
          return res.json();
        }
      })
      .then(function (data) {
        sessionStorage.setItem("token", "Bearer " + data.token);
        return navigate("/dashboard");
      });
    } catch (error) {
      console.error(error);
    }
  }

  const handleReload = () => {
    return window.location.reload()
  }

  const handlePostBack = () => {
    return navigate("/");
  }
  return (
    <>
    
    <div className="container pointer" onClick={handlePostBack}>
              <h4><i className="fa-solid mt-2 mb-2 fa-chevron-left"></i> Home</h4>
            </div>
      <div className={` mt-5 ${classes.bod}`}>
        <h1>
            <img
            onClick={handleReload}
              className={classes.logoShow}
              src="https://www.investopedia.com/thmb/3_niAKi-hqxEto4981WaCes0ZYM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/penfed-credit-union_3x1-4f974162685b43b3b4fa8cc5b00ddb30.png"
              alt="logo"
            />
            </h1>
        <div className="container">
        {loginError && ( // then if changed flag is false show error message.
            <div className="container" style={{ color: "red", display: { dip }}}>
              <span>{loginError}</span>
            </div>
          )}
          <form className="container" onSubmit={onSubmitForm}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                autoComplete="off"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <span className={`d-flex ${classes.white}`}>
              <input
                type="password"
                className="form-control me-2"
                id="exampleInputPassword1"
                autoComplete="off"
                ref={pass}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button className={`btn ${classes.eye}`} onClick={showPassword} type="button">
              <i className={`fa-regular ${eye}`}></i>
              </button>
              </span>
              <div id="emailHelp" className="form-text">min. 8 characters</div>
            </div>
            <div className="d-grid gap-2 ">
            <button className={`btn shadowB ${classes.login}`} type="submit">
              {loading ? (
                <>
                  <div
                  style={{ display: "inline-block" }} className="load"></div>
                </>
              ) : (
                <>Login</>
              )}
            </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginView;
