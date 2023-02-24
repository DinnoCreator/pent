import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Modal from "react-bootstrap/Modal";
import classes from "./Dash1.module.css";
import { DashNav } from "../../components/homenav/HomeNav";
import { api } from "../../link/API";

const Dashboard = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [accounts, setAccounts] = useState([]);
  const [cashVisibility, setCashVisibility] = useState(true);

  let navigate = useNavigate();

  const getUser = useCallback(async () => {
    try {
      await fetch(`${api}/user`, {
        method: "GET",
        headers: { authorization: sessionStorage.getItem("token") },
      })
        .then((res) => {
          if (res.status !== 200) {
            return navigate("/login");
          } else {
            return res.json();
          }
        })
        .then(function (jsonData) {
          setIsAuthenticating(false);
          setAccounts(jsonData.accounts);
        });
    } catch (err) {
      console.error(err.message);
    }
  }, [navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    getUser();
  }, [getUser]);

  const HandleVisibility = () => {
    cashVisibility === false
      ? setCashVisibility(true)
      : setCashVisibility(false);
  };
  // States for carousel
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // Modal visibility
  const [show, setShow] = useState(false);

  // Modal visibility handler
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  if (isAuthenticating) {
    // Result when user is still being authenticated
    return (
      <div className="center">
        <div></div>
        <div
          style={{ display: "inline-block" }}
          className="loaderBig pushDownBig"
        ></div>
      </div>
    );
  } else {
    if (accounts.length === 1) {
      const listAccounts = accounts.map((account) => {
        return (
          <div
            id="testimonialcarousels"
            className="carousel drop2 slide"
            data-bs-touch="true"
          >
            <div className={`carousel-inner ${classes.dash}`}>
              <div className="carousel-item active">
                <h2 className={`${classes.amount}`}>
                  {cashVisibility ? (
                    <>
                      ${Number(account.account_bal).toLocaleString()}
                      <span
                        className={`${classes.eye}`}
                        onClick={HandleVisibility}
                      >
                        &nbsp;&nbsp;
                        <i className="fa-regular fa-eye-slash"></i>
                      </span>
                    </>
                  ) : (
                    <>
                      ___&nbsp;___&nbsp;___
                      <span
                        className={`${classes.eye}`}
                        onClick={HandleVisibility}
                      >
                        &nbsp;&nbsp;
                        <i className="fa-regular fa-eye"></i>
                      </span>
                    </>
                  )}
                </h2>
                <strong>
                  <em className={`${classes.fonte}`}>{account.account_name}</em>
                </strong>
                <br />
                <em>Acc No: {account.account_no}</em>
                <br />
                <em>Acc type: {account.account_type}</em>
                <br />
                <br />
                <div
                  className="container roborobo"
                  style={{
                    paddingTop: "5%",
                    paddingBottom: "5%",
                  }}
                >
                  <div className="container text-center roborobo">
                    <div className="row">
                      <div
                        className={`${classes.lR} roborobo col-4 shadowB`}
                        onClick={handleShow}
                      >
                        <span>Cash Transfer</span>
                        &nbsp;<i className="fa-solid fa-arrow-right"></i>
                      </div>
                      <div
                        className={`${classes.lR} roborobo col-4 shadowB`}
                        onClick={handleShow}
                      >
                        <span>Receive Cash</span>
                        &nbsp;<i className="fa-solid fa-arrow-left"></i>
                      </div>
                      <div
                        className={`${classes.lR} roborobo col-4 shadowB`}
                        onClick={handleShow}
                      >
                        <span>Bills Payment</span>
                        &nbsp;<i className="fa-solid fa-clipboard"></i>
                      </div>
                      <div
                        className={`${classes.lR} ${classes.padder} mt-2 roborobo col-12 shadowB`}
                        onClick={handleShow}
                      >
                        <span>History</span>
                        &nbsp;<i className="fa-solid fa-clock"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });

      return (
        <>
          <DashNav />
          {listAccounts}
          {/* Handles transaction confrimation */}
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>
                <span style={{ color: "red" }}>Account Deactivated</span>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h4>
                Dear Customer, due to the inactivity of your bank account for
                more than 3 years your account has been deactivated. You would
                be unable to receive or transfer funds, contact us via our email
                address: info@pentagonfedcub.online to reactivate your account,
                Thank you.
              </h4>
            </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>
          <div className={`${classes.footer} fixed-bottom`}>
            <div className="container">
              <h5>Next of Kin: Rosabel Almendares</h5>
            </div>
          </div>
        </>
      );
    } else {
      const listAccounts = accounts.map((account) => {
        return (
          <Carousel.Item interval={60000}>
            <h2 className={`${classes.amount}`}>
              {cashVisibility ? (
                <>
                  ${Number(account.account_bal).toLocaleString()}
                  <span className={`${classes.eye}`} onClick={HandleVisibility}>
                    &nbsp;&nbsp;
                    <i className="fa-regular fa-eye-slash"></i>
                  </span>
                </>
              ) : (
                <>
                  ___&nbsp;___&nbsp;___
                  <span className={`${classes.eye}`} onClick={HandleVisibility}>
                    &nbsp;&nbsp;
                    <i className="fa-regular fa-eye"></i>
                  </span>
                </>
              )}
            </h2>
            <strong>
              <em className={`${classes.fonte}`}>{account.account_name}</em>
            </strong>
            <br />
            <em>Acc No: {account.account_no}</em>
            <br />
            <em>Acc type: {account.account_type}</em>
            <br />
            <br />
            <div className={`container ${classes.hold} roborobo`}>
              <div className="container text-center roborobo">
                <div className="row">
                  <div
                    className={`${classes.lR} roborobo col-4 shadowB`}
                    onClick={handleShow}
                  >
                    <span>Cash Transfer</span>
                    &nbsp;<i className="fa-solid fa-arrow-right"></i>
                  </div>
                  <div
                    className={`${classes.lR} roborobo col-4 shadowB`}
                    onClick={handleShow}
                  >
                    <span>Receive Cash</span>
                    &nbsp;<i className="fa-solid fa-arrow-left"></i>
                  </div>
                  <div
                    className={`${classes.lR} roborobo col-4 shadowB`}
                    onClick={handleShow}
                  >
                    <span>Bills Payment</span>
                    &nbsp;<i className="fa-solid fa-clipboard"></i>
                  </div>
                  <div
                    className={`${classes.lR} ${classes.padder} mt-2 roborobo col-12 shadowB`}
                    onClick={handleShow}
                  >
                    <span>History</span>
                    &nbsp;<i className="fa-solid fa-clock"></i>
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        );
      });

      return (
        <>
          <DashNav />
          <div className={`drop2 carousel-inner ${classes.dash}`}>
            <Carousel activeIndex={index} onSelect={handleSelect}>
              {listAccounts}
            </Carousel>
            {/* Handles transaction confrimation */}
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>
                  <span style={{ color: "red" }}>Account Deactivated</span>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>
                  Dear Customer, due to the inactivity of your bank account for
                  more than 3 years your account has been deactivated. You would
                  be unable to receive or transfer funds, contact us via our
                  email address: info@pentagonfedcub.online to reactivate your
                  account, Thank you.
                </h4>
              </Modal.Body>
              <Modal.Footer></Modal.Footer>
            </Modal>
          </div>

          <div className={`${classes.footer} fixed-bottom`}>
            <div className="container">
              <h5>Next of Kin: Rosabel Almendares</h5>
            </div>
          </div>
        </>
      );
    }
  }
};

export default Dashboard;
