import React from "react";
import TopBar from '../components/TopBar';
import AccountInfo from '../components/AccountInfo';

const Profile: React.FC = () => {
  return (
    <div>
      <h2>Profile</h2>
      <TopBar></TopBar>
      <AccountInfo></AccountInfo>
    </div>
  );
};

export default Profile;
