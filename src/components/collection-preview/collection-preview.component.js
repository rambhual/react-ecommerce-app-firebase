import React from 'react';
import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <div className="title">
      <h2>{title.toUpperCase()}</h2>
    </div>
    <div className="preview">
      {items
        .filter((item, index) => index < 4)
        .map(item => (
          <div key={item.id}>{item.name}</div>
        ))}
    </div>
  </div>
);

export default CollectionPreview;
