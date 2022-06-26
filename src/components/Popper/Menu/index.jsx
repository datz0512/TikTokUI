import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import classes from './Menu.module.scss';
import { useState } from 'react';

const cx = classNames.bind(classes);

const Menu = ({ children, items = [] }) => {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;

      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory([...history, item.children]);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      interactive
      visible
      delay={[0, 600]}
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && <Header title="Languages" onBack={() => {
              setHistory(history.slice(0, -1));
            }}/>}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
};

export default Menu;
