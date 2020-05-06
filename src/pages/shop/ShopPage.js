import React, { Fragment, useContext } from 'react';
import { ShopContext } from '../../context/shop.context';
import CollectionPreview from '../../components/collection-preview';
const Shop = () => {
  const { shops } = useContext(ShopContext);
  console.log(shops);

  return (
    <Fragment>
      <div className="shop-page">
        {shops.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    </Fragment>
  );
};

export default Shop;
