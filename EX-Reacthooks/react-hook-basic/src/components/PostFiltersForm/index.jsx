import React from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useRef } from "react";

PostFilterform.propTypes = {
  onSubmit: PropTypes.func,
};

PostFilterform.defaultProps = {
  onSubmit: null,
};

function PostFilterform(props) {
  const { onSubmit } = props;
  const [searchTerm, setSearchTerms] = useState("");
  const typingTimeoutRef = useRef(null);

  function handleSearchTermChange(e) {
    const value = e.target.value;
    setSearchTerms(value);

    if (!onSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        searchTerm: value,
      };
      onSubmit(formValues);
    }, 300);
  }

  return (
    <form>
      <input type="text" value={searchTerm} onChange={handleSearchTermChange} />
    </form>
  );
}

export default PostFilterform;
