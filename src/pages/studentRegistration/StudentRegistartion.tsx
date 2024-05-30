import { Layout } from 'antd';
import RequestsHeader from '../../widgets/requestsHeader/RequestsHeader';
import SearchIIN from '../../widgets/SearchIIN/SearchIIN';
import SelectDormStudent from '../../widgets/SelectDormStudent/SelectDormStudent';

const StudentRegistartion = () => {
  return (
    <Layout>
      <RequestsHeader />
      <SearchIIN />
      <SelectDormStudent/>
    </Layout>
  );
};

export default StudentRegistartion;
