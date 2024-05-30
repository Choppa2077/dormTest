import { FC } from 'react';
import styles from './logo.module.css';
import { LogoProps } from '../../../types/Logo';

const Logo: FC<LogoProps> = ({ width, height }) => {
  return (
    <div className={styles.logoDiv}>
      <img
        src="/public/images/sduLogo.png"
        className={styles.logo}
        style={{ width: width, height: height }}
      />
    </div>
  );
};

export default Logo;
