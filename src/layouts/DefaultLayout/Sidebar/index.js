import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import { HomeIcon, DiscoverIcon, FollowingIcon, FriendIcon, LiveIcon, MessageIcon } from '~/components/Icon';
import SuggestedAccounts from '~/components/SuggestedAccounts'

const cx = classNames.bind(styles);
function Sidebar() {
   return (
      <aside className={cx('wrapper')}>
         <Menu>
            <MenuItem title="For your" to={config.routes.home} icon={<HomeIcon />} />
            <MenuItem title="Discover" to={config.routes.discover} icon={<DiscoverIcon />} />
            <MenuItem title="Following" to={config.routes.following} icon={<FollowingIcon />} />
            <MenuItem title="Friend" to={config.routes.friend} icon={<FriendIcon />} />
            <MenuItem title="Live" to={config.routes.live} icon={<LiveIcon />} />
            <MenuItem title="Message" to={config.routes.message} icon={<MessageIcon />} />
         </Menu>
         <SuggestedAccounts label="Suggested Account"/>
         <SuggestedAccounts label="Following Account"/>
      </aside>
   );
}

export default Sidebar;
