import React from "react";
import "./directory-menu-.style.scss";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory-menu/directory-menu.selectors";
import { createStructuredSelector } from "reselect";
import MenuItem from "../menu-item/menu-item.component";

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ id, ...restOfSectionsProps }) => (
      <MenuItem key={id} {...restOfSectionsProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
