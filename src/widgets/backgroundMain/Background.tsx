import { Layout } from 'antd';
import styles from './background.module.css';
import { FC } from 'react';

const Background: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { Content } = Layout;

  return (
    <>
      <Layout style={{ height: '100vh' }}>
        <Content style={{ height: '100%' }} className={styles.content}>
          <img
            src="/public/images/indeximage.jpg"
            className={styles.fullPageBackground}
            alt="Background"
          />
          {children}
        </Content>
      </Layout>
    </>
  );
};

export default Background;
