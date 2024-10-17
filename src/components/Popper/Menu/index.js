import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper'
import Styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import Header from './Header';
import { useState } from 'react'

const cx = classNames.bind(Styles)
const defaultfn = () => {}

function Menu({children, items = [], hideOnClick=false, onChange = defaultfn }) {
   const [history, setHistory] = useState([{data: items}]);
   const current = history[history.length - 1]
    const renderItems = () => {
        return current.data.map((item, index) => 
            {
               const isParent = !!item.children
               return <MenuItem data={item} key={index} onClick={() =>{
                  if(isParent) {
                     setHistory(prev => [...prev, item.children])
                  } else{
                     onChange(item);
                  }
               }} />
            }
        )
    }
    return ( 
           <Tippy
              placement="bottom-end"
              delay={[0, 700]}
              offset={[12, 8]}
              hideOnClick={hideOnClick}
              interactive={true}
              render={(attrs) => (
                 <div className={cx('more-menu')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title="Language" onBack={() =>{
                           setHistory(prev => prev.slice(0, prev.length-1))
                        }}/>}
                        <div className={cx('menu-scrollable')}>
                           {renderItems()}
                        </div>
                    </PopperWrapper>
                 </div>
              )}
           >
         
              {children}
           </Tippy>
     );
}

export default Menu;