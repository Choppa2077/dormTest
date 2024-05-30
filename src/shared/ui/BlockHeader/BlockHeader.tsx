import React, { ReactNode } from 'react';

interface BlockHeaderProps {
  children: ReactNode; // Define children prop
}

const BlockHeader: React.FC<BlockHeaderProps> = ({ children }) => {
  return (
    <div className="searchCont">
      <div className="searchDiv">
        <p className="searchText">Registration of students</p>
      </div>
      {children}
    </div>
  );
};

export default BlockHeader;
