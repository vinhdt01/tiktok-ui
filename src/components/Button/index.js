import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';
const cx = classNames.bind(styles);
function Button({
    to,
    href,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    children,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    console.log(primary);
    const classes = cx('wrapper', { primary, outline, text, small, large });
    const props = {
        onClick,
        ...passProps,
    };
    console.log(passProps);

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}>
            <span>{children}</span>
        </Comp>
    );
}

export default Button;
