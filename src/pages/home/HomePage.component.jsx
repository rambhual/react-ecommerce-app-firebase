import React, { Fragment } from 'react';
import Directory from '../../components/directory';
import './Home.styled.scss';

const HomePage = () => {
  return (
    <Fragment>
      <div className="homepage">
        <Directory />
      </div>
    </Fragment>
  );
};
export default HomePage;
