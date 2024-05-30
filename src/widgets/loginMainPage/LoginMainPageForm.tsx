import { Button } from 'antd';
import SubmitButton from '../../shared/ui/buttons/SubmitButton';
import styles from './loginMainPage.module.css';
import LoginInputs from '../../shared/ui/Inputs/LoginInputs';
import Logo from '../../shared/ui/logo/Logo';


const LoginMainPageForm = () => {
  return (
    <>
      <div className={styles.indexForm}>
        <br />
        <Logo width="250px" height="250px" />
        <br />
        <br />
        <div className={styles.indexInputDiv}>
          <LoginInputs />

          <br />
          <SubmitButton
            label="Log in"
            onClick={() => console.log('Button clicked')}
            width="532px"
            height="80px"
            borderRadius="20px"
          />

          <br />
          <div className={styles.line}></div>

          <br />
          <div className={styles.divButtons}>
            <Button className={styles.secondaryButton}>
              Student Registration
            </Button>
            <Button className={styles.secondaryButton}>Guest House</Button>
          </div>

          <br />
        </div>
      </div>
    </>
  );
};

export default LoginMainPageForm;
