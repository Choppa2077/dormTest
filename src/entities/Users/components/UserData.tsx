import { FC } from 'react';

import { UserInputDataProps } from '../types/UserInputDataProps';
import Label from '../../../shared/ui/label/Label';
import RequestInputs from '../../../shared/ui/Inputs/RequestInputs';
// import style from './userData.module.css'

const UserInputData: FC<UserInputDataProps> = ({ content, placeholder, width }) => {
  return (
    <div className="searchCont">
      <div className='columnFlex'>
        <Label content={content} />
        <RequestInputs placeholder={placeholder} width={width} />
      </div>
    </div>
  );
};

export default UserInputData;
