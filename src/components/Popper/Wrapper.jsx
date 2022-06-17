import classNames from 'classnames/bind';
import classes from './Popper.module.scss';

const cx = classNames.bind(classes);

const Wrapper = ({ children, className }) => {
    return (
        <div className={cx('wrapper', className)}>
            {children}
        </div>
    );
}
 
export default Wrapper;