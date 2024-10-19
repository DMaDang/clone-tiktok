import classNames from "classnames/bind"
import styles from './SuggestedAccounts.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCheckCircle,
} from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles)
function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img src="" className={cx('avatar')} alt="ahihi"/>
            <div className={cx('item-info')}>
                <p className={cx('name')}>
                    <strong>Phú</strong>
                    <FontAwesomeIcon className={cx('icon')} icon={faCheckCircle}/>
                </p>
                <p className={cx('nickname')}>nhokkk</p>
            </div>
        </div>
    )
}

export default AccountItem