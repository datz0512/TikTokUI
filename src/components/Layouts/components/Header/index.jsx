import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleXmark, faSpinner, faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(classes);

const Header = () => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt='tiktok'/>
        </div>
        <div className={cx('search')}>
            <input placeholder='Searchs accounts and videos' spellCheck={false} />
            <button className={cx('clear')}>
                <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('search-btn')}>
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </div>
        <div className={cx('actions')} />
      </div>
    </header>
  );
};

export default Header;
