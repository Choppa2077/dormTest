import { MenuProps } from 'antd';
import UserInputData from '../../entities/Users/components/UserData';
import UserDropdown from '../../entities/Users/components/UserDropdown';
import SearchStudent from '../../features/StudentRequest/components/SearchStudent';
import { DatePicker } from 'antd';
import style from './GuestForm.module.css'

const GuestForm = () => {
  const { RangePicker } = DatePicker;
  const facultyItems: MenuProps = {
    items: [
      {
        key: '1',
        label: 'Law & Social Sciences',
        onClick: () => console.log('Option 1 clicked'),
      },
      {
        key: '2',
        label: ' Education & Humanities',
        onClick: () => console.log('Option 2 clicked'),
      },
      {
        key: '3',
        label: 'Engineering & Natural Sciences',
        onClick: () => console.log('Option 3 clicked'),
      },
      {
        key: '4',
        label: 'Business School',
        onClick: () => console.log('Option 4 clicked'),
      },
    ],
  };
  return (
    <>
      <SearchStudent content="Guest House" showInput={false} />
      <div className="searchCont">
        <div className="line"></div>
      </div>
      <div className="searchCont columnForRows">
        <div className="searchDiv">
          <UserInputData content="Name" placeholder="Anna" width="418.32px" />
          <UserInputData
            content="Surname"
            placeholder="Fetisova"
            width="418.32px"
          />
        </div>
        <div className="searchDiv">
          <UserDropdown
            content="Room type"
            menuProps={facultyItems}
            defaultSelectedKey="1"
            width="418.32px"
          />
        </div>
        <div className="searchDiv">
          <UserInputData
            content="Phone Number"
            placeholder="+7 777 777 77 77"
            width="418.32px"
          />
        </div>
        <div className="searchDiv">
          <RangePicker  className={style.datePicker}/>
        </div>
      </div>
    </>
  );
};

export default GuestForm;
