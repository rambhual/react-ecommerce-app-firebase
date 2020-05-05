import React, { Fragment } from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <Fragment>
      <div className={`${size} menu-item`}>
        <div
          className="background-image"
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className="content">
          <h1 className="title">{title.toUpperCase()}</h1>
          <span className="subtitle">SHOP NOW</span>
        </div>
      </div>
    </Fragment>
  );
};
export default MenuItem;
