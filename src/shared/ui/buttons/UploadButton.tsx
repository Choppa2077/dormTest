import { Button } from 'antd';
import style from './uploadButton.module.css';
import { FC } from 'react';
import { UploadButtonProps } from '../../types/UploadButtonProps';

const UploadButton: FC<UploadButtonProps> = ({ width, height, content }) => {
  return (
    <Button
      type="dashed"
      className={style.upload}
      style={{ width: width, height: height, maxWidth: width }}
    >
      <div className={style.contentImage}>
        <img src="/public/images/upload.png" />
        {content}
      </div>
    </Button>
  );
};

export default UploadButton;
