import cn from "classnames";
import MenuItem from "./MenuItem";
import OutlinedButton from "components/misc/OutlinedButton";
import PropTypes from "prop-types";

const menuItems = [
  { link: "#", text: "Qui Suis-je ?" },
  { link: "#", text: "Expérience" },
  { link: "#", text: "Portfolio" },
  { link: "#", text: "Contact" },
];

Menu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  className: PropTypes.string,
};

function Menu({ isVisible, className }) {
  return (
    <nav>
      <ol
        className={cn(
          "transform font-mono text-center flex flex-col space-y-7 bg-light-navy fixed inset-y-0 right-0 w-3/4 pt-36 drop-shadow-lg z-10 transition-transform duration-500 ease-easing",
          className,
          "lg:transform-none lg:bg-transparent lg:static lg:flex-row lg:items-center lg:space-y-0 lg:space-x-7 lg:w-full lg:pt-0",
          { "translate-x-full": !isVisible }
        )}
      >
        {menuItems.map(({ link, text }, i) => (
          <MenuItem number={i + 1} link={link} key={i}>
            {text}
          </MenuItem>
        ))}
        <li>
          <OutlinedButton
            className="lg:text-sm lg:px-5 font-sans"
            onClick={() => {}}
          >
            Mon CV
          </OutlinedButton>
        </li>
      </ol>
    </nav>
  );
}

export default Menu;
