import cn from 'classnames';
import PropTypes from 'prop-types';

SectionTitle.propTypes = {
  number: PropTypes.number.isRequired,
  className: PropTypes.string,
};

function SectionTitle({ className, number, children }) {
  return (
    <h2
      className={cn(
        'flex items-center whitespace-nowrap text-2xl font-bold text-lighter-slate md:text-4xl after:block after:relative after:ml-3 after:h-px after:w-full after:relative after:bg-light-navy',
        className,
      )}
    >
      <span className="text-primary font-mono text-base mr-1 md:text-3xl">0{number}.</span>
      {children}
    </h2>
  );
}

export default SectionTitle;
