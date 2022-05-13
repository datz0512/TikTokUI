import classNames from 'classnames/bind';
import classes from './Popper.module.scss';

const cx = classNames.bind(classes);

const Wrapper = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            {children}
        </div>
    );
}
 
export default Wrapper;