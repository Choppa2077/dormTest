import { Layout } from 'antd';
import RequestsHeader from '../../widgets/requestsHeader/RequestsHeader';
import { Content } from 'antd/es/layout/layout';
import styles from './login.module.css';
import SubmitButton from '../../shared/ui/buttons/SubmitButton';
import Logo from '../../shared/ui/logo/Logo';
import LoginInputs from '../../shared/ui/Inputs/LoginInputs';

const Login = () => {
  return (
    <Layout>
      <RequestsHeader />
      <Content style={{ marginTop: '72px' }}>
        <Logo width="187.5px" height="187.5px" />
        <br />
        <div className={styles.indexInputDiv}>
          <LoginInputs />
          <br />
          <SubmitButton
            label="Log in"
            onClick={() => console.log('Log in clicked')}
            width="532px"
            height="80px"
            borderRadius="15px"
          />
        </div>
      </Content>
    </Layout>
  );
};

export default Login;
