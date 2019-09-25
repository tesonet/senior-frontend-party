import React from 'react';

import ServersList from './ServersList';
import LogoutButton from './LogoutButton';
import { ReactComponent as Logo } from '../assets/images/logo-testio-small.svg';
import './ServersListPage.scss';

const ServersListPage = () => {
    return (
        <>
            <div className="page-header">
                <Logo className="page-header__logo" />
                <LogoutButton className="page-header__button" />
            </div>
            <ServersList />
        </>
    );
};

export default ServersListPage;
