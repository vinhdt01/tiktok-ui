import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import classNames from 'classnames';
import images from '~/asses/images';
import styles from './Image.module.scss';
const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const handleError = () => {
        setFallback(customFallback);
    };
    return (
        <img
            ref={ref}
            src={fallback || src}
            className={classNames(styles.wrapper, className)}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
    customFallback: PropTypes.string,
};
export default Image;
