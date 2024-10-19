import config from '~/config';
import HeaderOnly from '~/layouts/HeaderOnly';
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
import Live from '~/pages/Live';
import Message from '~/pages/Message';
import Friend from '~/pages/Friend';
import Discover from '~/pages/Discover';

const publicRoutes = [
   { path: config.routes.home, component: Home },
   { path: config.routes.following, component: Following },
   { path: config.routes.profile, component: Profile },
   { path: config.routes.live, component: Live },
   { path: config.routes.friend, component: Friend },
   { path: config.routes.message, component: Message },
   { path: config.routes.Discover, component: Discover },
   { path: config.routes.search, component: Search, layout: null },
   { path: config.routes.upload, component: Upload, layout: HeaderOnly },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
