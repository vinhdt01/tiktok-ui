import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

function Wrapper({ children, className }) {
    const cx = classNames.bind(styles);
    return <div className={cx('wrapper', className)}>{children}</div>;
}
Wrapper.propTypes = {
    children: PropTypes.string.isRequired,
    className: PropTypes.string,
};
export default Wrapper;
