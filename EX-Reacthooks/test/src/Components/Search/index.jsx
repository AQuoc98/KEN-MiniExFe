import React, { useRef, useState } from "react";
import PropTypes from "prop-types";

Search.propTypes = {
  onSubmit: PropTypes.func,
};

Search.defaultProps = {
  onSubmit: null,
};

function Search(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const { onSubmit } = props;
  const typingTimeOutRef = useRef(null);
  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerm(value);

    if (!onSubmit) return;

    if (typingTimeOutRef.current) {
      clearTimeout(typingTimeOutRef.current);
    }

    typingTimeOutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };
      onSubmit(formValues);
    }, 300);
  }
  return (
    <form>
      <input type="text" onChange={handleSearchTermChange} value={searchTerm} />
    </form>
  );
}

export default Search;
