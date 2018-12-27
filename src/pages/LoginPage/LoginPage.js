import React, { Component } from 'react'
import '../LoginPage/LoginPage.scss'
import UserService from '../../services/UserService.js'
import { inject, observer } from 'mobx-react';


@inject('store')
class LoginPage extends Component {

    @observer
    state = {
        typedUsername: '',
    }

    handleDetails = ev => {
        let typedUsername = this.input.value
        this.setState({ typedUsername })
    }

    handleLogin = (ev) => {
        ev.preventDefault()
        this.props.store.UserStore.signup(this.state.typedUsername)
        this.props.history.push('/contact')
    }

    render() {
        return (
            <div className="login-container">
                <h1>Please enter your name</h1>
                <form onSubmit={this.handleLogin}>
                    <input type="text" placeholder="Username" ref={(input) => this.input = input} onChange={this.handleDetails} />
                    <button>Sign up</button>
                </form>
            </div>
        )
    }
}

export default LoginPage