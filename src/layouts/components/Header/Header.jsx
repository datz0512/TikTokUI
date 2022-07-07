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
import Image from '~/components/Image/Image';
import Search from '../Search/Search';
import config from '~/config';

const cx = classNames.bind(classes);

const MENU_ITEMS = [
    {
        icon: <Languages />,
        title: 'English',
        children: {
            title: 'Language',
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
                    code: 'العربية',
                    title: 'العربية',
                },
                {
                    code: 'বাঙ্গালি (ভারত)',
                    title: 'বাঙ্গালি (ভারত)',
                },
                {
                    code: 'Cebuano (Pilipinas)',
                    title: 'Cebuano (Pilipinas)',
                },
                {
                    code: 'Čeština (Česká republika)',
                    title: 'Čeština (Česká republika)',
                },
                {
                    code: 'Deutsch',
                    title: 'Deutsch',
                },
                {
                    code: 'Ελληνικά (Ελλάδα)',
                    title: 'Ελληνικά (Ελλάδα)',
                },
                {
                    code: 'Español',
                    title: 'Español',
                },
                {
                    code: 'Suomi (Suomi)',
                    title: 'Suomi (Suomi)',
                },
                {
                    code: 'Filipino (Pilipinas)',
                    title: 'Filipino (Pilipinas)',
                },
                {
                    code: 'Français',
                    title: 'Français',
                },
                {
                    code: 'עברית (ישראל)',
                    title: 'עברית (ישראל)',
                },
                {
                    code: 'हिंदी',
                    title: 'हिंदी',
                },
                {
                    code: 'Magyar (Magyarország)',
                    title: 'Magyar (Magyarország)',
                },
                {
                    code: 'Bahasa Indonesia (Indonesia)',
                    title: 'Bahasa Indonesia (Indonesia)',
                },
                {
                    code: 'Italiano (Italia)',
                    title: 'Italiano (Italia)',
                },
                {
                    code: '日本語（日本）',
                    title: '日本語（日本）',
                },
                {
                    code: 'Basa Jawa (Indonesia)',
                    title: 'Basa Jawa (Indonesia)',
                },
                {
                    code: 'ខ្មែរ (កម្ពុជា)',
                    title: 'ខ្មែរ (កម្ពុជា)',
                },
                {
                    code: '한국어 (대한민국)',
                    title: '한국어 (대한민국)',
                },
                {
                    code: 'Bahasa Melayu (Malaysia)',
                    title: 'Bahasa Melayu (Malaysia)',
                },
                {
                    code: 'မြန်မာ (မြန်မာ)',
                    title: 'မြန်မာ (မြန်မာ)',
                },
                {
                    code: 'Nederlands (Nederland)',
                    title: 'Nederlands (Nederland)',
                },
                {
                    code: 'Polski (Polska)',
                    title: 'Polski (Polska)',
                },
                {
                    code: 'Português (Brasil)',
                    title: 'Português (Brasil)',
                },
                {
                    code: 'Română (Romania)',
                    title: 'Română (Romania)',
                },
                {
                    code: 'Русский (Россия)',
                    title: 'Русский (Россия)',
                },
                {
                    code: 'Svenska (Sverige)',
                    title: 'Svenska (Sverige)',
                },
                {
                    code: 'ไทย (ไทย)',
                    title: 'ไทย (ไทย)',
                },
                {
                    code: 'Türkçe (Türkiye)',
                    title: 'Türkçe (Türkiye)',
                },
                {
                    code: 'Українська (Україна)',
                    title: 'Українська (Україна)',
                },
                {
                    code: 'اردو',
                    title: 'اردو',
                },
                {
                    code: 'Tiếng Việt (Việt Nam)',
                    title: 'Tiếng Việt (Việt Nam)',
                },
                {
                    code: '简体中文',
                    title: '简体中文',
                },
                {
                    code: '繁體中文',
                    title: '繁體中文',
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
                <Link to={config.routes.home} className={cx('logo-link')}>
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
                                <button className={cx('message', 'action-btn')}>
                                    <MessageIcon />
                                    <span className={cx('badge')}>4</span>
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>1</span>
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
