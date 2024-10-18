import classNames from 'classnames/bind'
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Image from '~/components/Image';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles)
function AccountItem( {data, onClick} ) {
    if (!data) {
        return null; 
    }
    return ( 
        <Link to={`/@${data.nickname}`} className={cx('wrapper') }>
            <Image className={cx('avatar')} src={data.avatar} alt="ảnh" />
            <div className={cx('info')} onClick={onClick}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    { data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
     );
}
AccountItem.propTypes = { 
     data: PropTypes.object,

}
export default AccountItem;