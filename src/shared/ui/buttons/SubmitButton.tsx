import { Button } from 'antd';
import { FC } from 'react';
import { ButtonsProps } from '../../types/Buttons';
import style from './buttons.module.css'


const SubmitButton: FC<ButtonsProps> = ({
  label,
  onClick,
  width,
  height,
  borderRadius,
}) => {
  return (
    <>
      <Button
        className={style.submitButton}
        onClick={onClick}
        style={{ width: width, height: height, borderRadius: borderRadius }}
      >
        {label}
      </Button>
    </>
  );
};

export default SubmitButton;
