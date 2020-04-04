import React from 'react';
import PageTemplate from '../components/PageTemplate';

const PlusOneEvent = () => {
  return (
    <PageTemplate>
      <section
        className="page-title-section2 bg-img cover-background"
        data-overlay-dark="7"
        data-background="/assets/custom/event/event.jpg"
        style={{ backgroundImage: 'url(/assets/custom/event/event.jpg)' }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>1+1 오픈 이벤트</h1>
            </div>
          </div>
        </div>
      </section>

      <EventPane />
    </PageTemplate>
  );
};

const EventPane = () => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="blog-list-simple">
              <div className="row">
                <div className="col-md-12 margin-20px-bottom">
                  <div className="blog-list-simple-img">
                    <img src="/assets/custom/event/event1.png" alt="" />
                  </div>
                </div>

                <div className="col-md-12">
                  <div className="blog-list-simple-text">
                    <h4>1+1 오픈 이벤트</h4>
                    <p>쏼라 쏼라</p>

                    <div className="text-left">
                      <a href="/event" className="butn small">
                        <span>이벤트 목록</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlusOneEvent;
