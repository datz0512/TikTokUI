import classNames from 'classnames';
import { useState, forwardRef } from 'react';
import images from '~/assets/images';
import classes from './Image.module.scss';

const Image = forwardRef(
  (
    { src, alt, className, fallback: customFallback = images.defaultImg, ...props },
    ref,
  ) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        className={classNames(classes.wrapper, className)}
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  },
);

export default Image;
