import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from './SuggestedAccounts.module.scss';
const cx = classNames.bind(styles);
function AccountItem({ label }) {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://bcp.cdnchinhphu.vn/334894974524682240/2022/4/29/son-tung-mtp-08110778-1651217357607701319631.jpg"
                alt="hi"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>vinhdt</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>vinhdt</p>
            </div>
        </div>
    );
}
AccountItem.propTypes = {
    label: PropTypes.string.isRequired,
};
export default AccountItem;
