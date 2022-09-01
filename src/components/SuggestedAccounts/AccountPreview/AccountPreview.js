import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Button from '~/components/Button';
import styles from './AccountPreview.module.scss';
const cx = classNames.bind(styles);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://bcp.cdnchinhphu.vn/334894974524682240/2022/4/29/son-tung-mtp-08110778-1651217357607701319631.jpg"
                    alt="hi"
                />
                <Button primary className={cx('follow-btn')}>
                    Follow
                </Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>vinhdt</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>vinhdt</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>3.7M </strong>
                    <span className={cx('label')}>Likes</span>
                    <strong className={cx('value')}>3.7M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
