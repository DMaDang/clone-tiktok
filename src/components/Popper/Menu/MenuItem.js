import Button from '~/components/Button';
import styles from './Menu.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

function MenuItem({data, onClick}) {
    return ( 
        <Button className={cx('item-menu', {separate: data.separate})} onClick={onClick} to={data.to} leftIcon={data.icon} >
            {data.title}
        </Button>
        
     );
}

export default MenuItem;