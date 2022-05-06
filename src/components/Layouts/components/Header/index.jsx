import classNames from 'classnames/bind';
import classes from './Header.module.scss'

const cx = classNames.bind(classes)

const Header = () => {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* Logo */}
                {/* Search */}
            </div>
        </header>
    );
}
 
export default Header;