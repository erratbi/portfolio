import cn from "classnames";
import { useState } from "react";
import PropTypes from "prop-types";

MenuToggle.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

const Line = ({ className }) => (
  <span
    className={cn(
      "h-0.5 block absolute right-0 bg-primary rounded transition-all duration-300",
      className
    )}
  />
);

function MenuToggle({ onClick, className }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
    onClick();
  };

  return (
    <button
      className={cn("relative w-9 h-6 block lg:hidden", className)}
      onClick={handleClick}
    >
      <Line className={cn("w-4/5 top-0", { "opacity-0": isOpen })} />
      <Line className={cn("w-full top-1/2", { "opacity-0": isOpen })} />
      <Line className={cn("w-3/4 top-full", { "opacity-0": isOpen })} />
      <Line
        className={cn("w-full transform opacity-0 rotate-0", {
          "opacity-100 rotate-45": isOpen,
        })}
      />
      <Line
        className={cn("w-full transform opacity-0 rotate-0", {
          "opacity-100 -rotate-45": isOpen,
        })}
      />
    </button>
  );
}

export default MenuToggle;
