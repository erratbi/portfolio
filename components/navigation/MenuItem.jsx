import React from "react";
import PropTypes from "prop-types";

MenuItem.propTypes = {
  number: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
};

function MenuItem({ children, number, link }) {
  return (
    <li className="menu-item text-lg lg:text-base">
      <span className="block mb-1 text-primary text-base lg:inline-block lg:mb-0 lg:mr-1 lg:text-sm">
        0{number}.
      </span>
      <a
        className="text-slate hover:text-primary transition-colors duration-200"
        href={link}
      >
        {children}
      </a>
    </li>
  );
}

export default MenuItem;
