import cn from "classnames";
import React from "react";
import PropTypes from "prop-types";

OutlinedButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};

function OutlinedButton({ onClick, children, className }) {
  return (
    <button
      className={cn(
        "border rounded-sm px-8 py-2.5 text-primary border-primary hover:text-navy hover:bg-primary transition-colors",
        className
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default OutlinedButton;
