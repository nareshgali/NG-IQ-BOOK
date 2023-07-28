import React from "react";
import avatar from "../assets/images/user/nareshdp.png";

const Home = () => {
  return (
    <div className="row">
      <div className="col-xl-12">
        <div className="auth-wrapper">
          <div className="auth-content">
            <div className="auth-bg">
              <span className="r"></span>
              <span className="r s"></span>
              <span className="r s"></span>
              <span className="r"></span>
            </div>
          </div>
          <div className="col-md-12 col-xl-12">
            <div className="card">
              <div className="card-block border-bottom">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    <img
                      class="rounded-circle  m-r-10"
                      style={{ width: "80%" }}
                      src={avatar}
                      alt="activity-user"
                    />
                  </div>
                  <div className="col-md-8">
                    <h3>NG-IQ-BOOK</h3>
                    <h6 className="mb-0">
                      <p>
                        This portal is the collection of all interview questions
                        i faced during my job search.
                      </p>
                      <p>
                        With 6.5 years total IT experience and 3+ years ReactJS
                        experience, I've attended and listed all these interview
                        questions by technology wise.
                      </p>
                      <p>
                        All these questions are very useful for any candidate
                        going to attend interview.
                      </p>
                    </h6>
                    <p className="text-c-green mb-0">ALL THE BEST!!!</p>
                    <p>Choose progess over perfection! Keep Growing!</p>
                    <small>
                      Note: It is version1.0. Will updated answers and solutions
                      to each question in next release
                    </small>
                    <br />
                    <small>
                      NG-IQ-BOOK@1.0 Copyright &copy; Naresh Gali-2023
                    </small>
                  </div>
                  <div className="col-md-6">
                    <h3>Naresh Gali</h3>
                    <h5 className="text-c-green mb-0">
                      Senior Software Engineer
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
