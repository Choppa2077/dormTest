import { Input } from 'antd';
import style from './searchStudents.module.css';
import { FC } from 'react';
import { SearchStudentsProps } from '../types/SearchStudentsProps';

const SearchStudent: FC<SearchStudentsProps> = ({ content, showInput }) => {
  return (
    <div className="searchCont">
      <div className={style.searchDiv}>
        <p className={style.searchText}>{content}</p>
        {showInput && (
          <Input
            placeholder="Search by IIN"
            prefix={
              <img
                src="/public/images/search.png"
                className={style.iconStyle}
              />
            }
            className={style.searchInput}
          />
        )}
      </div>
    </div>
  );
};

export default SearchStudent;
