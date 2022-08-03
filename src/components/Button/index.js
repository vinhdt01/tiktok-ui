import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    primary = false,
    outline = false,
    disabled = false,
    small = false,
    large = false,
    text = false,
    rounded = false,
    children,
    className,
    leftIcon,
    rightIcon,

    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const classes = cx('wrapper', { [className]: className, primary, outline, text, rounded, disabled, small, large });
    const props = {
        onClick,

        ...passProps,
    };
    //remove event listeners when button have disabled properties
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
};
export default Button;
