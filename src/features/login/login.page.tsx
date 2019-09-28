import React from 'react';
import 'normalize.css';
import styles from './Login.module.scss';
import logo from '../../resources/svg/logo.svg';
import LoginForm from './form/form';
import { Provider } from 'mobx-react';
import authStore from '../authentication/store';
import { SvgImage } from '../../common/icon';
import routeStore from '../../routing/store';

class LogInPage extends React.Component {

	public componentDidMount() {
		if(authStore.isLoggedIn) {
			routeStore.changeRouteToDefault();
		}
	}

	public render() {
		return (
			<Provider authStore={authStore}>
				<div className={styles.background}>
					<SvgImage path={logo} width={246} height={64} className={styles.logo} />
					<LoginForm />
				</div>
			</Provider>
		);
	}
}

export default LogInPage;
