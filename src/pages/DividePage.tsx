import React from 'react';
import PageTemplate from '../components/PageTemplate';

const DividePage = () => {
  return (
    <PageTemplate>
      <section
        className="page-title-section2 bg-img cover-background"
        data-overlay-dark="7"
        data-background="/assets/custom/divide/main.jpg"
        style={{ backgroundImage: 'url(/assets/custom/divide/main.jpg)' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>모던스터디만의 차별성</h1>
            </div>
          </div>
        </div>
      </section>

      <LeftContent />
      <RightContent />
    </PageTemplate>
  );
};

const LeftContent = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-heading left">
              <h3>모던스터디만의 차별성</h3>
            </div>

            <p>
              Inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit.
            </p>

            <div className="margin-30px-bottom md-margin-25px-bottom xs-margin-20px-bottom">
              <span>
                Call us 24/7. We can answer for{' '}
                <strong className="font-weight-600 font-size18 sm-font-size16 xs-font-size15">
                  all your questions.
                </strong>
              </span>
            </div>
            <div className="border-bottom padding-20px-bottom margin-20px-bottom md-padding-15px-bottom md-margin-15px-bottom">
              <h4 className="display-inline-block font-size18 sm-font-size16 xs-font-size15 margin-20px-right no-margin-bottom">
                (+44) 123 456 789
              </h4>
              <div className="display-inline-block margin-20px-right vertical-align-top">
                <strong className="font-weight-700 text-theme-color">or</strong>
              </div>
              <h4 className="display-inline-block font-size18 sm-font-size16 xs-font-size15 no-margin-bottom">
                inquiry@youremail.com
              </h4>
            </div>

            <div className="text-right float-left width-100">
              <p className="float-left text-left no-margin">
                <span className="font-weight-700 display-block">
                  Keir Prestonly
                </span>
                CEO of company
              </p>
            </div>
          </div>

          <div className="col-lg-6 sm-display-none">
            <div className="about-ceo margin-50px-left sm-no-margin-left">
              <img src="/assets/custom/divide/divide1.jpg" alt="" />
              <div className="inner-border" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const RightContent = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 sm-display-none">
            <div className="about-ceo margin-50px-left sm-no-margin-left">
              <img src="/assets/custom/divide/divide2.jpg" alt="" />
              <div className="inner-border" />
            </div>
          </div>

          <div className="col-lg-6">
            <div className="section-heading left">
              <h3>모던스터디만의 차별성</h3>
            </div>

            <p>
              Inventore veritatis et quasi architecto beatae vitae dicta sunt
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur
              aut odit aut fugit.
            </p>

            <div className="margin-30px-bottom md-margin-25px-bottom xs-margin-20px-bottom">
              <span>
                Call us 24/7. We can answer for{' '}
                <strong className="font-weight-600 font-size18 sm-font-size16 xs-font-size15">
                  all your questions.
                </strong>
              </span>
            </div>
            <div className="border-bottom padding-20px-bottom margin-20px-bottom md-padding-15px-bottom md-margin-15px-bottom">
              <h4 className="display-inline-block font-size18 sm-font-size16 xs-font-size15 margin-20px-right no-margin-bottom">
                (+44) 123 456 789
              </h4>
              <div className="display-inline-block margin-20px-right vertical-align-top">
                <strong className="font-weight-700 text-theme-color">or</strong>
              </div>
              <h4 className="display-inline-block font-size18 sm-font-size16 xs-font-size15 no-margin-bottom">
                inquiry@youremail.com
              </h4>
            </div>

            <div className="text-right float-left width-100">
              <p className="float-left text-left no-margin">
                <span className="font-weight-700 display-block">
                  Keir Prestonly
                </span>
                CEO of company
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DividePage;
