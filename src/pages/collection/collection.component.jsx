import React from "react";
import "./collection.styles.scss";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import NotFound from "../not-found/not-found.component";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectShopCollections } from "../../redux/shop/shop.selector";
import { createStructuredSelector } from "reselect";

const CollectionPage = ({ collections }) => {
  const { collectionId } = useParams();
  const existingCollection = collections[collectionId.toLowerCase()]
 
  return (
    <div className="collection-page">
        <h2 className="title">{existingCollection.title}</h2>
        <div className="items">
      {existingCollection ? (
        existingCollection.items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))
      ) : (
        <NotFound />
      )}
    </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections : selectShopCollections
});

export default connect(mapStateToProps)(CollectionPage);
