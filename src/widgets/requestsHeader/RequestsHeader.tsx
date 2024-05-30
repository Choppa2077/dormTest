import {  Row, Col } from 'antd';
import styles from './requestsHeader.module.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const RequestsHeader = () => {
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState(location.pathname);
  const navigation = useNavigate();

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <header className={styles.header}>
        <Row>
          <Col
            span={8}
            className={`${styles.headerSection} ${
              activeRoute === '/login' ? styles.active : ''
            }`}
            onClick={() => navigation('/login')}
          >
            <Link to="/login" className={styles.linkText}>
              Log in
            </Link>
          </Col>
          <Col
            span={8}
            className={`${styles.headerSection} ${
              activeRoute === '/studentRegistration' ? styles.active : ''
            }`}
            onClick={() => navigation('/studentRegistration')}
          >
            <Link to="/studentRegistration" className={styles.linkText}>
              Student Registration
            </Link>
          </Col>
          <Col
            span={8}
            className={`${styles.headerSection} ${
              activeRoute === '/guestHouse' ? styles.active : ''
            }`}
            onClick={() => navigation('/guestHouse')}
          >
            <Link to="/guestHouse" className={styles.linkText}>
              Guest House
            </Link>
          </Col>
        </Row>
      </header>
      <div className={styles.line}></div>
    </>
  );
};

export default RequestsHeader;
