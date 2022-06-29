import { useEffect, useState, useRef } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import { ClearSearch, Loading, SearchIcon } from '~/components/Icons';
import AccountItem from '~/components/AccountItem';
import classes from './Search.module.scss';

const cx = classNames.bind(classes);

const Search = () => {
  const [searchValue, setSearchValue] = useState();
  const [searchResult, setSearchReasult] = useState([]);
  const [showResult, setShowResult] = useState(true);

  const inputRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setSearchReasult([1, 2, 3]);
    }, 0);
  }, []);

  const handleClear = () => {
    setSearchReasult([]);
    setSearchValue('');
    inputRef.current.focus();
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  return (
    <HeadlessTippy
      interactive
      // visible
      visible={showResult && searchResult.length > 0}
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
      onClickOutside={handleHideResult}
    >
      <div className={cx('search')}>
        <input
          ref={inputRef}
          value={searchValue}
          placeholder="Search accounts and videos"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && (
          <button className={cx('clear')} onClick={handleClear}>
            <ClearSearch />
          </button>
        )}
        {/* <button className={cx('loading')}>
          <Loading />
        </button> */}
        <button className={cx('search-btn')}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
};

export default Search;
