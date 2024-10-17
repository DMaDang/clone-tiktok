import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { useState, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useDebounce } from '~/hooks';
import request from '~/ultils/request';
const cx = classNames.bind(styles);

function Search() {
   const [searchValue, setSearchValue] = useState();
   const [searchResult, setSearchResult] = useState([]);
   const [showResult, setShowResult] = useState(true);
   const [loading, setLoading] = useState(false);
   const debounced = useDebounce(searchValue, 500);
   const inputRef = useRef();
   const handleClear = () => {
      setSearchValue('');
      inputRef.current.focus();
   };
   const handleHideResult = () => {
      setShowResult(false);
   };
   useEffect(() => {
      if (!debounced || !debounced.trim()) {
         setSearchResult([]);
         return;
      }
      setLoading(true);
      request
         .get(`users/search?q=${encodeURIComponent(debounced)}&type=less`)
         .then((res) => {
            setSearchResult(res.data.data);
            setLoading(false);
         })
         .catch(() => {
            setLoading(false);
         });
   }, [debounced]);
   return (
      <div>
         <Tippy
            interactive
            visible={showResult && searchResult.length > 0}
            appendTo={() => document.body}
            render={(attrs) => (
               <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                  <PopperWrapper>
                     <h4 className={cx('search-title')}>Accounts</h4>
                     {searchResult.map((result) => (
                        <AccountItem key={result.id} data={result} />
                     ))}
                     <AccountItem />
                  </PopperWrapper>
               </div>
            )}
            onClickOutside={handleHideResult}
         >
            <div className={cx('search')}>
               <input
                  ref={inputRef}
                  placeholder="Tìm kiếm"
                  value={searchValue}
                  spellCheck={false}
                  onChange={(e) => setSearchValue(e.target.value.trimStart())}
                  onFocus={() => setShowResult(true)}
               />
               {!!searchValue && !loading && (
                  <button className={cx('clear')} onClick={handleClear}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
               )}
               {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
               <button className={cx('search-btn')}>
                  <FontAwesomeIcon className={cx('')} icon={faMagnifyingGlass} />
               </button>
            </div>
         </Tippy>
      </div>
   );
}

export default Search;
