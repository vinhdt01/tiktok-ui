import Button from '~/components/Button';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
function MenuItem({ data }) {
    const cx = classNames.bind(styles);

    console.log(data, 'nhu...');
    return (
        <Button leftIcon={data.icon} to={data.to} className={cx('memu-item')}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
