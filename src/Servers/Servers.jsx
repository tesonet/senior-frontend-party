import React  from 'react';
import { Redirect } from 'react-router-dom';

import useToken from '../hooks/use-token';
import useServers from '../hooks/use-servers';
import routes from '../routes';

import './Servers.css';
import logo from '../img/logo-testio-list.svg';

export const Servers = () => {
  const {token, resetToken} = useToken();
  const {servers, sortServers, serversLoading} = useServers();

  if (!token) {
    return <Redirect to={routes.login} />
  }

  return (
    <div className="servers-list">
      <div className="header">
       <img src={logo} className="list-logo" alt="logo" />
       <button onClick={()=>{resetToken()}} className="logout-button">Logout</button>
      </div>

      {serversLoading && <div className="servers-loading">Servers Data Loading...</div>}

      {!serversLoading && <table className="servers-table">
        <thead>
          <tr>
            <th onClick={() => sortServers('name')} className="name-column">Server</th>
            <th onClick={() => sortServers('distance')}>Distance</th>
          </tr>
        </thead>
        <tbody>
          {servers.map(({ name, distance }, key)=>(
            <tr key={key}>
              <td>{name}</td>
              <td>{distance}</td>
            </tr>
          ))}
        </tbody>
      </table>}
    </div>
  );
}
