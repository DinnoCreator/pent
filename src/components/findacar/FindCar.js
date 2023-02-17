import classes from "../findacar/FindCar.module.css";

const FindCar = () => {
  return (
    <div
      className={`${classes.back}`}
      style={{
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "500px",
      }}
    >
      <div className="container">
        <div className={`container`}>
          <div className={`${classes.first} container`}>
            <h6>AUTO LOAN PROMOTION</h6>
          </div>
          <div className={`mt-3 ${classes.bonus}`}>
            <h1>
            $350 bonus on your PenFed auto loan when using our Car Buying Service
            </h1>
          </div>
          <div className={`${classes.ul}`}>
            <ul>
              <li>Rates as low as 5.39% APR* on new cars up to 36 months</li>
              <li>Additional cash incentives from select manufacturers</li>
            </ul>
          </div>
          <div className={`${classes.btn} center btn`}>
            Find a Car
          </div>
          <div className={`${classes.offer}`}>
          Offer ends April 30, 2023
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindCar;
