import React, { Fragment } from 'react';
import './Home.styled.scss';

const HomePage = () => {
  return (
    <Fragment>
      <div className="homepage">
        <div className="directory-menu">
          <div className="menu-item">
            <div className="content">
              <h1 className="title">HATS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">JACKETS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">SNECKERS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">WOMENS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
          <div className="menu-item">
            <div className="content">
              <h1 className="title">MENS</h1>
              <span className="subtitle">Shop Now</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default HomePage;
