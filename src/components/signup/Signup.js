//import packages and components
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Fragment, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { api } from "../../link/API";

//creates account
function Create() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  // gets the values inputed in the forms
  const [userEmail, setUserEmail] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [userFname, setUserFname] = useState("");
  const [userMname, setUserMname] = useState("");
  const [userLname, setUserLname] = useState("");
  const [userDob, setUserDob] = useState("");
  const [userSex, setUserSex] = useState("Female");
  const [userAcc, setUserAcc] = useState("Savings");
  const [userAcc1, setUserAcc1] = useState("Checkings");
  const [noOfAcc, setNoOfAcc] = useState("One Account");
  const [userAddress, setUserAddress] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [amount, setUserAmount] = useState("");
  const [amount1, setUserAmount1] = useState("");
  const [loading, setLoading] = useState(false);

  //password visibility state
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);
  const pass = useRef();

  //password visibility handler
  const showpassword = () => {
    setshow1(!show1);
    pass.current.type = show1 ? "password" : "text";
  };

  let navigate = useNavigate();

  //submit handler
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      //values from form
      const email = userEmail;
      const fName = userFname;
      const mName = userMname;
      const lName = userLname;
      const dOB = userDob;
      const gender = userSex;
      const accountType = userAcc;
      const accountType1 = userAcc1;
      const address = userAddress;
      const phoneNo = userPhone;
      const password = userPassword;
      const accBal = amount;
      const accBal1 = amount1;

      //api call for sending the user data to the backend
      await fetch(`${api}/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          fName,
          mName,
          lName,
          dOB,
          gender,
          accountType,
          accountType1,
          address,
          phoneNo,
          password,
          accBal,
          accBal1,
        }),
      })
        .then((res) => {
          if (res.status !== 200) {
            return console.log(res.status);;
          } else {
            return res.json();
          }
        })
        .then(function (data) {
          return setshow(true);
        });
    } catch (err) {
      console.error(err);
    }
  };

    //sends to home
    function handleOnline() {
      navigate("/login");
    }

  return (
    <Fragment>
      <div className="container mt-5">
      <div className=" container form-signin drop shadowB roborobo">
        <form onSubmit={onSubmitForm}>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              minLength="11"
              autoComplete="off"
              value={userEmail}
              name="email"
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              name="name"
              className="form-control"
              value={userFname}
              onChange={(e) => setUserFname(e.target.value)}
              autoComplete="off"
              required
            />
            <label htmlFor="floatingInput">First Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              name="name"
              value={userMname}
              onChange={(e) => setUserMname(e.target.value)}
              autoComplete="off"
              required
            />
            <label htmlFor="floatingInput">Middle Name</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              name="name"
              value={userLname}
              onChange={(e) => setUserLname(e.target.value)}
              autoComplete="off"
              required
            />
            <label htmlFor="floatingInput">Last Name</label>
          </div>
          <div className="form-floating">
            <input
              className="form-control"
              type="date"
              id="start"
              value={userDob}
              onChange={(e) => setUserDob(e.target.value)}
              required
            />
            <label>Date Of Birth(MM/DD/YYYY)</label>
          </div>
          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              name="name"
              value={userAddress}
              onChange={(e) => setUserAddress(e.target.value)}
              autoComplete="off"
              required
            />
            <label>Address</label>
          </div>
          <div className="form-floating">
            <input
              type="tell"
              className="form-control"
              autoComplete="off"
              minLength="11"
              maxLength="11"
              pattern="[0-9]+"
              value={userPhone}
              onChange={(e) => setUserPhone(e.target.value)}
              required
            />
            <label>Phone Number</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              name="password"
              className="form-control"
              ref={pass}
              minLength="8"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="form-floating">
            <select
              name="Acctype"
              value={noOfAcc}
              onChange={(e) => setNoOfAcc(e.target.value)}
              className="form-select"
              aria-label="Default select example"
            >
              <option>One Account</option>
              <option>Two Accounts</option>
            </select>
          </div>
          {
            noOfAcc === "One Account" ? (
                <>
                <div className="form-floating">
            <select
              name="Acctype"
              value={userAcc}
              onChange={(e) => setUserAcc(e.target.value)}
              className="form-select"
              aria-label="Default select example"
            >
              <option>Savings</option>
              <option>Checkings</option>
            </select>
          </div>
          <div className="form-floating">
            <input
              type="number"
              min="50"
              name="amount"
              className="form-control"
              value={amount}
              onChange={(e) => setUserAmount(e.target.value)}
              autoComplete="off"
              required
            />
            <label htmlFor="floatingInput">Amount</label>
          </div>
                </>

            ) : (
                <>
                <div className="form-floating">
            <select
              name="Acctype"
              value={userAcc}
              onChange={(e) => setUserAcc(e.target.value)}
              className="form-select"
              aria-label="Default select example"
            >
              <option>Savings</option>
              <option>Checkings</option>
            </select>
          </div>
          <div className="form-floating">
            <input
              type="number"
              min="50"
              name="amount"
              className="form-control"
              value={amount}
              onChange={(e) => setUserAmount(e.target.value)}
              autoComplete="off"
              required
            />
            <label htmlFor="floatingInput">Amount</label>
          </div>
                <div className="form-floating">
            <select
              name="Acctype"
              value={userAcc1}
              onChange={(e) => setUserAcc1(e.target.value)}
              className="form-select"
              aria-label="Default select example"
            >
              <option>Checkings</option>
              <option>Savings</option>
            </select>
          </div>
          <div className="form-floating">
            <input
              type="number"
              min="50"
              name="amount"
              className="form-control"
              value={amount1}
              onChange={(e) => setUserAmount1(e.target.value)}
              autoComplete="off"
              required
            />
            <label htmlFor="floatingInput">Amount</label>
          </div>
                </>
            )
          }
          
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="Gender"
              value="Male"
              onChange={(e) => setUserSex(e.target.value)}
              required
            />
            <label className="form-check-label" htmlFor="flexRadioDefault1">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="Gender"
              value="Female"
              onChange={(e) => setUserSex(e.target.value)}
            />
            <label className="form-check-label" htmlFor="flexRadioDefault2">
              Female
            </label>
          </div>

          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              onClick={showpassword}
              id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Show Password
            </label>
          </div>

          <button className="w-100 btn btn-lg btn-light" type="submit">
            {loading ? (
              <>
                <div
                  style={{ display: "inline-block" }}
                  className="load"
                ></div>
                
              </>
            ) : (
              <>Create Account</>
            )}
          </button>
          <p className={`mt-5 mb-3 text-muted centree`}>Edify IT © 2022</p>
        </form>
      </div>
      </div>

      <>
        <Modal show={show} backdrop="static" centered>
          <Modal.Header>
            <Modal.Title>
              <h1 className="modal-title fs-5" id="staticBackdropLabel" style={{color: "green"}}>
                Registration Status
              </h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="center">
              <h1>Successful!</h1>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleOnline}>
              Login
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </Fragment>
  );
}

export default Create;
