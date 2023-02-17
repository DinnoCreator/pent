import classes from "../article/Article.module.css";

const Article = () => {
  return (
    <div className={` ${classes.articleSection}`}>
      <div className={`${classes.hold}`}>
        <h2 className={`${classes.featured}`}>Featured Articles</h2>
        <div className={`article-grid`}>
          <article className={`shadowEminence cardBottom`}>
            <div
              className={`mt-3 cardTop ${classes.back} ${classes.back1}`}
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
                height: "150px",
              }}
            ></div>
            <div className={`${classes.title} cardBottom`}>
              <h5>
                10 Essential Strategies to Help You Qualify for a Credit Card
              </h5>
            </div>
          </article>
          <article className={`shadowEminence cardBottom`}>
            <div
              className={`mt-3 cardTop ${classes.back} ${classes.back2}`}
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
                height: "150px",
              }}
            ></div>
            <div className={`${classes.title} cardBottom`}>
              <h5>
              Top Reasons for a Credit Union Home Refinance
              </h5>
            </div>
          </article>
          <article className={`shadowEminence cardBottom`}>
            <div
              className={`mt-3 cardTop ${classes.back} ${classes.back3}`}
              style={{
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                width: "100%",
                height: "150px",
              }}
            ></div>
            <div className={`${classes.title} cardBottom`}>
              <h5>
              5 Proven Budgeting Strategies to Know
              </h5>
            </div>
          </article>
        </div>
        <div className={`${classes.button}`}>
        <button className={`btn ${classes.btn}`} type="button">See All Articles</button>
        </div>
      </div>
    </div>
  );
};

export default Article;
