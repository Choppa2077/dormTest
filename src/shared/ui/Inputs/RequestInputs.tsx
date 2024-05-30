import { Input } from 'antd';
import { FC } from 'react';
import { RequstInputsProps } from '../../../types/RequstInputsProps';
import style from './requestInput.module.css'

const RequestInputs: FC<RequstInputsProps> = ({ placeholder, width }) => {
  return <Input placeholder={placeholder} className={style.searchInput} style={{width:width}} />;
};

export default RequestInputs;
