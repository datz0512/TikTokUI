import classNames from 'classnames/bind';
import Button from '~/components/Button';
import classes from './Menu.module.scss';

const cx = classNames.bind(classes);

const MenuItem = ({ data, onClick }) => {
  const classes = cx('menu-item', {
    separate: data.separate,
  });
  return (
    <Button className={classes} leftIcon={data.icon} to={data.to} onClick={onClick}>
      {data.title}
    </Button>
  );
};

export default MenuItem;
