import { MenuProps } from 'antd';
import UserInputData from '../../entities/Users/components/UserData';
import UserDropdown from '../../entities/Users/components/UserDropdown';
import SearchStudent from '../../features/StudentRequest/components/SearchStudent';
// import style from './searchIIN.module.css';

const SearchIIN = () => {
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
      <SearchStudent content="Registration of students"  showInput={true}/>
      <div className="searchCont">
        <div className="line"></div>
      </div>
      <div className="searchCont columnForRows">
        <div className="searchDiv">
          <UserInputData
            content="Full Name"
            placeholder="Anna Fetisova"
            width="418.32px"
          />
          <UserInputData
            content="Phone Number"
            placeholder="+7 777 777 77 77"
            width="418.32px"
          />
        </div>
      </div>
      <div className="searchCont columnForRows">
        <div className="searchDiv">
          <UserDropdown
            content="Faculty"
            menuProps={facultyItems}
            defaultSelectedKey="1"
            width="418.32px"
          />
          <UserDropdown
            content="Specialist"
            menuProps={specialistsFENS}
            defaultSelectedKey="1"
            width="418.32px"
          />
        </div>
        <div className="searchDiv">
          <div className="smallSearchDiv">
            <UserInputData
              content="Enrollment year"
              placeholder="2021"
              width="197.09px"
            />
            <UserInputData
              content="Gender"
              placeholder="Male"
              width="197.09px"
            />
          </div>
        </div>
        <div className="searchDiv">
          <div className="averageSearchDiv">
            <UserDropdown
              content="Country"
              menuProps={facultyItems}
              defaultSelectedKey="1"
              width="197.09px"
            />
            <UserDropdown
              content="Region"
              menuProps={specialistsFENS}
              defaultSelectedKey="1"
              width="197.09px"
            />
            <UserDropdown
              content="City"
              menuProps={specialistsFENS}
              defaultSelectedKey="1"
              width="197.09px"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="searchCont">
        <div className="line"></div>
      </div>
      <br />
    </div>
  );
};

export default SearchIIN;
