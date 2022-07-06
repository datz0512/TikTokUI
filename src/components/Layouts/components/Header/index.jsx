import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import Button from '~/components/Button';
import classes from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import {
    Analytics,
    Feedback,
    GetCoin,
    InboxIcon,
    Keyboard,
    Languages,
    Logout,
    MessageIcon,
    MoreBtn,
    Settings,
    UploadIcon,
    ViewProfile,
} from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import routesConfig from '~/config/routes';

const cx = classNames.bind(classes);

const MENU_ITEMS = [
    {
        icon: <Languages />,
        title: 'English',
        children: {
            title: 'Languages',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Vietnamese',
                },
            ],
        },
    },
    {
        icon: <Feedback />,
        title: 'Feedback and help',
        // to: '/feedback',
    },
    {
        icon: <Keyboard />,
        title: 'Keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <ViewProfile />,
        title: 'View profile',
    },
    {
        icon: <GetCoin />,
        title: 'Get coins',
    },
    {
        icon: <Analytics />,
        title: 'View Analytics',
    },
    {
        icon: <Settings />,
        title: 'Settings',
    },
    ...MENU_ITEMS,
    {
        icon: <Logout />,
        title: 'Log out',
        separate: true,
    },
];

const Header = () => {
    const currentUser = 1;

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="tiktok" />
                </Link>

                {/* Search */}
                <Search />

                {/* Actions */}
                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Button leftIcon={<UploadIcon />} outline upload>
                                Upload
                            </Button>
                            <Tippy content="Message" placement="bottom">
                                <button className={cx('action-btn', 'message')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button leftIcon={<UploadIcon />} outline upload>
                                Upload
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://nghethuat365.com/wp-content/uploads/2021/06/Gai-xxinh-nguc-khung.jpg"
                                alt="hotgirl"
                                fallback="https://kenh14cdn.com/thumb_w/660/2020/5/28/0-1590653959375414280410.jpg"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <MoreBtn />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
