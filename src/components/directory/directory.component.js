import React, { Fragment, useContext } from 'react';
import { DirectoryContext } from '../../context/directory.context';
import MenuItem from '../menu-item';
import './directory.styles.scss';

const Directory = () => {
  const { directory } = useContext(DirectoryContext);
  return (
    <Fragment>
      <div className="directory-menu">
        {directory.map(({ id, title, imageUrl, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    </Fragment>
  );
};
export default Directory;
