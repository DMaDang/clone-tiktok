import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper'
import Styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import Header from './Header';
import { useState } from 'react'

const cx = classNames.bind(Styles)
const defaultfn = () => {}

function Menu({children, items = [], onChange = defaultfn }) {
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
              placement="bottom-start"
              delay={[0, 700]}
            //   visible={true}
              interactive={true}
              render={(attrs) => (
                 <div className={cx('more-menu')} tabindex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && <Header title="Language" onBack={() =>{
                           setHistory(prev => prev.slice(0, prev.length-1))
                        }}/>}
                        {renderItems()}
                    </PopperWrapper>
                 </div>
              )}
           >
         
              {children}
           </Tippy>
     );
}

export default Menu;