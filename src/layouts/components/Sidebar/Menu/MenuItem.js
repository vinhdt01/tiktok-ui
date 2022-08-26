import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);
function MenuItem({ title, to, icon }) {
    return (
        <>
            <NavLink to={to} title={title} className={cx('menu-item')}>
                {icon}
                <span className={cx('title')}>{title}</span>
            </NavLink>
        </>
    );
}
MenuItem.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};
export default MenuItem;
