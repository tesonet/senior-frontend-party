import React from 'react';
import Branding from '../Branding';
import Button from '../Button';
import Table from '../Table';
import { RouteComponentProps } from 'react-router';

const ServerList: React.FC<RouteComponentProps> = props => {
  const handleLogout = () => {
    localStorage.removeItem('token');
    props.history.replace('/');
  };

  const token = localStorage.getItem('token');
  if (!token) props.history.replace('/');

  return (
    <div>
      <div className={'flex justify-between'}>
        <Branding textColor={'text-black'} />
        <Button text={'Logout'} onClick={handleLogout} />
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
};

export default ServerList;
