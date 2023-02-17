import classes from "../soil/Soil.module.css";

const Soil = () => {
  return (
    <>
      <div className={`center ${classes.heading}`}>
        <h1>The Latest From PenFed Credit Union</h1>
      </div>
      <div className={`testimonial-grid`}>
      <div
        className={`mt-3 ${classes.back} grid-row-span-2`}
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="container">
          <div className={`container ${classes.backdiv} ${classes.backdivl}`}>
            <h2 className={`mb-3`}>Auto Purchase or Refinance Loans</h2>
            <p>Get pre-qualified with no impact to your credit score²</p>
            <button className={`btn ${classes.btn}`} type="button"> Learn More</button>
          </div>
        </div>
      </div>
      <div
        className={`mt-3 ${classes.back}`}
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="container">
          <div className={`container ${classes.backdiv}`}>
            <h2>Guaranteed returns with our Money Market Certificates</h2>
            <ul>
              <li>4.70% APY* for 18 months</li>
              <li>4.65% APY* for 15 months</li>
            </ul>
            <p>*Annual Percentage Yield</p>
            <button className={`btn ${classes.btn}`} type="button"> Open Now</button>
          </div>
        </div>
      </div>
      <div
        className={`mt-3 ${classes.back}`}
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
        }}
      >
        <div className="container">
          <div className={`container ${classes.backdiv}`}>
            <h2 className={`mb-3`}>Premium Online Savings</h2>
            <p>Fuel your savings faster with 2.70% APY*</p>
            <p>*Annual Percentage Yield</p>
            <button className={`btn ${classes.btn}`} type="button"> Start Saving</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Soil;
