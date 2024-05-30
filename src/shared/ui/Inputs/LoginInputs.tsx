import { Input } from 'antd';
import styles from './loginInput.module.css';

const LoginInputs = () => {
  return (
    <>
      <Input
        placeholder="Email"
        prefix={
          <img src="/public/images/user.png" className={styles.iconStyle} />
        }
        className={styles.indexInput}
      />

      <br />
      <Input.Password
        placeholder="Password"
        prefix={
          <img src="/public/images/lock.png" className={styles.iconStyle} />
        }
        className={styles.indexInput}
        visibilityToggle
      />
    </>
  );
};

export default LoginInputs;
