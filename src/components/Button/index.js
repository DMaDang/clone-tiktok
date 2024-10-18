import classNames from "classnames/bind"
import styles from './Button.module.scss'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

const cx = classNames.bind(styles)
function Button( {to, href, 
    outline=false, 
    primary=false, 
    text=false,
    small=false,
    large=false,
    medium=false,
    disable=false,
    rounded=false,
    className,
    leftIcon,
    rightIcon,
    itemMenu,
    children, onClick, ...passProps} ) {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps
    }
    if(disable){
        Object.keys(props).forEach((key) => {
            if(key.startsWith('on') && typeof props[key] === 'function'){
                delete props[key];
            }
        })
    }
    if(to) {
        props.to = to
        Comp = Link
    }else if(href) {
        props.href = href
        Comp = 'a'
    }
    const classes = cx('wrapper', {
        primary,
        outline,
        small,
        large,
        medium,
        text,
        disable,
        rounded,
        rightIcon,
        leftIcon,
        itemMenu,
        [className]: className,  
    }, )
    return(
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}

        </Comp>
    )
}

Button.propTypes = {
    to: PropTypes.string, 
    href: PropTypes.string, 
    outline: PropTypes.bool, 
    primary: PropTypes.bool, 
    disable: PropTypes.bool,
    rounded: PropTypes.bool,
    text: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    medium: PropTypes.bool,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    itemMenu: PropTypes.string,
    children: PropTypes.node, 
    onClick: PropTypes.func,

}
export default Button;