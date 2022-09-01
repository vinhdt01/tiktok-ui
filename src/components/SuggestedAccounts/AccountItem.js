import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';
const cx = classNames.bind(styles);
function AccountItem({ label }) {
    const renderPreview = (props) => (
        <div tabIndex="-1" {...props}>
            <PopperWrapper>
                <div className={cx('preview')}>
                    <AccountPreview />
                </div>
            </PopperWrapper>
        </div>
    );
    return (
        <div>
            <Tippy interactive placement="bottom-start" offset={[-20, 0]} delay={[800, 0]} render={renderPreview}>
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
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {
    label: PropTypes.string,
};
export default AccountItem;
