import React, { Component } from 'react'
import AuthForm from './AuthPage/AuthForm'

class AuthPage extends Component {

    componentDidMount() {
        if (this.props.withAuth) {
            this.props.history.push('servers')
        }
    }

    render() {
        const { history, login, withAuth, loginError, clearLoginError } = this.props

        return <div className="auth-page">
            <div className="auth-page_bg"/>
            <div className="auth-page_overlay"/>
            <AuthForm
              loginError={loginError}
              withAuth={withAuth}
              history={history}
              login={login}
              clearLoginError={clearLoginError}
            />
        </div>
    }
}

export default AuthPage