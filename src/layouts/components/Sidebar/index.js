import classNames from 'classnames/bind';
import config from '~/config';
import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, UserGroupIcon, LiveIcon } from '~/components/Icons';
function Sidebar() {
    const cx = classNames.bind(styles);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />}></MenuItem>
                <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />}></MenuItem>
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />}></MenuItem>
            </Menu>
        </aside>
    );
}

export default Sidebar;
