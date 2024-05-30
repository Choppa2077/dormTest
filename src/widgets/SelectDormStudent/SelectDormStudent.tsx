import { Button, Checkbox, MenuProps } from 'antd';
import UserDropdown from '../../entities/Users/components/UserDropdown';
import UserInputData from '../../entities/Users/components/UserData';
import { CloudOutlined } from '@ant-design/icons';
import style from './selectDormStudent.module.css';
import SubmitButton from '../../shared/ui/buttons/SubmitButton';

const SelectDormStudent = () => {
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

  const specialistsFENS: MenuProps = {
    items: [
      {
        key: '1',
        label: 'Information Systems',
        onClick: () => console.log('Option 1 clicked'),
      },
      {
        key: '2',
        label: 'Computer Science',
        onClick: () => console.log('Option 2 clicked'),
      },
      {
        key: '3',
        label: 'Mathematical and Computer Modelling',
        onClick: () => console.log('Option 3 clicked'),
      },
      {
        key: '4',
        label: 'Mathematics',
        onClick: () => console.log('Option 4 clicked'),
      },
      {
        key: '5',
        label: 'Multimedia Sciences',
        onClick: () => console.log('Option 5 clicked'),
      },
      {
        key: '6',
        label: 'Statistics and Data Science',
        onClick: () => console.log('Option 6 clicked'),
      },
    ],
  };
  return (
    <div>
      <div className="searchCont columnForRows">
        <div className="searchDiv">
          <div className="smallSearchDiv">
            <UserDropdown
              content="Select dormitory"
              menuProps={facultyItems}
              defaultSelectedKey="1"
              width="197.09px"
            />
            <UserDropdown
              content="Select room"
              menuProps={specialistsFENS}
              defaultSelectedKey="1"
              width="197.09px"
            />
          </div>
        </div>
      </div>
      <div className="searchCont columnForRows">
        <div className="searchDiv">
          <UserInputData
            content="Email"
            placeholder="Write your email"
            width="418.32px"
          />
        </div>
        <div className="searchDiv">
          <UserInputData
            content="Password"
            placeholder="Write password at least 8 character"
            width="418.32px"
          />
        </div>
        <div className="searchDiv">
          <div className="miniSearchDiv">
            <Checkbox defaultChecked={false} className="checkboxes" />
            <p className="smallText">Add to reserve list</p>
          </div>
        </div>
        <div className="searchDiv">
          <div className="smallerSearchDiv">
            <CloudOutlined />
            <Button className={style.buttonFile}>063 form</Button>
          </div>
        </div>
        <div className="searchDiv">
          <div className="bigDivRightStart">
            <SubmitButton
              label="Submit"
              onClick={() => console.log('Submit clicked')}
              width='208px'
              height='48px'
              borderRadius = "8px"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default SelectDormStudent;
