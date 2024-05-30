import { FC } from 'react';
import { LabelProps } from '../../../types/LabelProps';
import style from './label.module.css';

const Label: FC<LabelProps> = ({ content }) => {
  return <p className={style.labelP}>{content}</p>;
};

export default Label;
