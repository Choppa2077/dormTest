import { Layout } from 'antd';
import RequestsHeader from '../../widgets/requestsHeader/RequestsHeader';
import GuestForm from '../../widgets/GuestForm/GuestForm';
import UploadButton from '../../shared/ui/buttons/UploadButton';
import style from './guestHouse.module.css';
import SubmitButton from '../../shared/ui/buttons/SubmitButton';

const GuestHouse = () => {
  return (
    <Layout>
      <RequestsHeader />
      <GuestForm />
      <div className={`${style.cont} searchCont`}>
        <UploadButton width="907px" height="280px" content="Upload ID Card" />
      </div>
      <div className="searchCont columnForRows">
        <div className="searchDiv">
          <div className="bigDivRightStart">
            <SubmitButton
              label="Submit"
              onClick={() => console.log('booking clicked')}
              width="208px"
              height="48px"
              borderRadius="8px"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
    </Layout>
  );
};

export default GuestHouse;
