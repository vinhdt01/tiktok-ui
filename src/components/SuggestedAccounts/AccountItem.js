import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestedAccounts.module.scss';
const cx = classNames.bind(styles);
function AccountItem({ label }) {
    return <div className={cx('account-item')}>AccountItem </div>;
}
AccountItem.propTypes = {
    label: PropTypes.string.isRequired,
};
export default AccountItem;
