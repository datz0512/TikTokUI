import classNames from 'classnames/bind';
import Button from '~/components/Button';
import classes from './Menu.module.scss';

const cx = classNames.bind(classes);

const MenuItem = ({ data, onClick }) => {
  return (
    <Button className={cx('menu-item')} leftIcon={data.icon} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  );
};

export default MenuItem;
