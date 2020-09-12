import React from "react";
import PropTypes from "prop-types";

PropList.propTypes = {
  lists: PropTypes.array,
};

PropList.defaultProps = {
  lists: [],
};

function PropList(props) {
  const { lists } = props;
  return (
    <ul>
      {lists.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
}

export default PropList;
