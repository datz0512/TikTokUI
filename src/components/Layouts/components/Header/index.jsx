import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import Button from '~/components/Button';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import classes from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
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
  SearchIcon,
  Settings,
  UploadIcon,
  ViewProfile,
} from '~/components/Icons';
import Image from '~/components/Image';

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

const Header = () => {
  const [searchResult, setSearchReasult] = useState([]);
  const currentUser = true;

  useEffect(() => {
    setTimeout(() => {
      setSearchReasult([]);
    }, 0);
  }, []);

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

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="tiktok" />
        {/* Search */}
        <HeadlessTippy
          interactive
          // visible
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Searchs accounts and videos" spellCheck={false} />
            <button className={cx('clear')}>
              {/* <FontAwesomeIcon icon={faCircleXmark} /> */}
            </button>
            {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}
            <button className={cx('search-btn')}>
              <SearchIcon />
            </button>
          </div>
        </HeadlessTippy>

        {/* Actions */}
        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy content="Message" placement="bottom">
                <button className={cx('action-btn')}>
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
              <Button className={cx('upload')} text>
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
