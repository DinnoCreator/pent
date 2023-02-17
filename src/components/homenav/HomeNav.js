import classes from "../homenav/HomeNav.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeNav = () => {
  const [show, setShow] = useState(false);
  let navigate = useNavigate();

  const handleNavbar = () => {
    return show ? setShow(false) : setShow(true);
  };

  const handleReload = () => {
    return window.location.reload()
  }
  const handleLogin = () => {
    return navigate("/login")
  }
  return (
    <>
      <div className={`fixed-top ${classes.background}`} style={{ display: show ? "none" : "inline-block" }}>
        <div className={` container `}>
          <div className={`hstack grid-container mt-4`}>
            <img
            onClick={handleReload}
              className={classes.logoShow}
              src="https://www.investopedia.com/thmb/3_niAKi-hqxEto4981WaCes0ZYM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/penfed-credit-union_3x1-4f974162685b43b3b4fa8cc5b00ddb30.png"
              alt="logo"
            />
            <div className={`ms-auto`}>
              {/* <span className={`${classes.icon} ${classes.search}`}>
                <i className="fa-solid fa-magnifying-glass"></i>
                </span> */}

              <span className={`btn ${classes.log}`} onClick={handleLogin}>Login</span>
              <span onClick={handleNavbar} className={`${classes.iconShow} `}>
                <i class="fa-solid fa-bars"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ display: show ? "inline-block" : "none" }}
        className={`${classes.body} container`}
      >
        <div className={`grid-container container hstack`}>
          <img
            className={classes.logo}
            src="https://www.investopedia.com/thmb/3_niAKi-hqxEto4981WaCes0ZYM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/penfed-credit-union_3x1-4f974162685b43b3b4fa8cc5b00ddb30.png"
            alt="logo"
          />
          <div className={`ms-auto`}>
            {/* <span className={`${classes.icon} ${classes.search}`}>
              <i className="fa-solid fa-magnifying-glass"></i>
              </span> */}
            <span onClick={handleNavbar} className={`${classes.icon} `}>
              <i className="fa-solid fa-xmark"></i>
            </span>
          </div>
        </div>
        <hr></hr>
        <div className={`${classes.stripNav} container grid-container hstack`}>
          <span className={`${classes.stripNavLeft}`}>
            <h1>
              <i className="fa-regular fa-pen-to-square"></i>
            </h1>
          </span>
          <span className={`${classes.stripNavCenter}`}>
            <h6>CHECKING & SAVINGS</h6>
          </span>
          <span className={`${classes.stripNavRight} ms-auto`}>
            <h6>
              <i class="fa-solid fa-chevron-right"></i>
            </h6>
          </span>
        </div>
        <div className={`${classes.stripNav} grid-container container hstack`}>
          <span className={`${classes.stripNavLeft}`}>
            <h1>
              <i class="fa-regular fa-credit-card"></i>
            </h1>
          </span>
          <span className={`${classes.stripNavCenter}`}>
            <h6>CREDIT CARDS</h6>
          </span>
          <span className={`${classes.stripNavRight} ms-auto`}>
            <h6>
              <i class="fa-solid fa-chevron-right"></i>
            </h6>
          </span>
        </div>
        <div className={`${classes.stripNav} grid-container container hstack`}>
          <span className={`${classes.stripNavLeft}`}>
            <h1>
              <i class="fa-solid fa-car-rear"></i>
            </h1>
          </span>
          <span className={`${classes.stripNavCenter}`}>
            <h6>AUTO</h6>
          </span>
          <span className={`${classes.stripNavRight} ms-auto`}>
            <h6>
              <i class="fa-solid fa-chevron-right"></i>
            </h6>
          </span>
        </div>
        <div className={`${classes.stripNav} grid-container container hstack`}>
          <span className={`${classes.stripNavLeft}`}>
            <h1>
              <i class="fa-solid fa-house"></i>
            </h1>
          </span>
          <span className={`${classes.stripNavCenter}`}>
            <h6>MORTGAGE & HOME</h6>
          </span>
          <span className={`${classes.stripNavRight} ms-auto`}>
            <h6>
              <i class="fa-solid fa-chevron-right"></i>
            </h6>
          </span>
        </div>
        <div className={`${classes.stripNav} grid-container container hstack`}>
          <span className={`${classes.stripNavLeft}`}>
            <h1>
              <i class="fa-solid fa-landmark"></i>
            </h1>
          </span>
          <span className={`${classes.stripNavCenter}`}>
            <h6>LOANS</h6>
          </span>
          <span className={`${classes.stripNavRight} ms-auto`}>
            <h6>
              <i class="fa-solid fa-chevron-right"></i>
            </h6>
          </span>
        </div>
        <div className={`${classes.stripNav} grid-container container hstack`}>
          <span className={`${classes.stripNavLeft}`}>
            <h1>
              <i class="fa-regular fa-lightbulb"></i>
            </h1>
          </span>
          <span className={`${classes.stripNavCenter}`}>
            <h6>LEARN</h6>
          </span>
          <span className={`${classes.stripNavRight} ms-auto`}>
            <h6>
              <i class="fa-solid fa-chevron-right"></i>
            </h6>
          </span>
        </div>
        <div className={`row container ${classes.footer}`}>
          <div className={`col-6 ${classes.foot}`}>PARTNERS</div>
          <div className={`col-6 ${classes.foot}`}>MEMBER DISCOUNTS</div>
          <div className={`col-6 ${classes.foot}`}>WEALTHS</div>
          <div className={`col-6 ${classes.foot}`}>FOUNDATION</div>
          <div className={`col-6 ${classes.foot}`}>BRANCHES & ATM</div>
          <div className={`col-6 ${classes.foot}`}>ABOUT</div>
          <div className={`${classes.button} btn`} onClick={handleLogin}>Login</div>
        </div>
      </div>
    </>
  );
};

export default HomeNav;
