import { forwardRef } from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';
import Image from 'next/image';

const FancyImage = forwardRef(({ src, className }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'w-full relative after:absolute after:bg-primary after:rounded after:inset-0 md:after:bottom-1.5 after:mix-blend-color hover:after:opacity-0 after:transition-opacity after:duration-500 before:rounded before:absolute before:inset-0 before:border-2 before:border-primary before:translate-x-4 before:translate-y-3 before:transition-transform hover:before:translate-x-2 hover:before:translate-y-1 before:duration-300 before:ease-easing',
        className,
      )}
    >
      <Image src={src} className="rounded" />
    </div>
  );
});

FancyImage.propTypes = {
  src: PropTypes.object.isRequired,
  className: PropTypes.string,
};

FancyImage.displayName = 'FancyImage';

export default FancyImage;
