import React, { Component } from 'react'
import UserGreeting from './UserGreeting'
import GuestGreeting from './GuestGreeting'

export default class Greeting extends Component {
    render() {
        const { isLoggedIn } = this.props;
        if (isLoggedIn) {
            return <UserGreeting/>
        }
        else {
            return <GuestGreeting/>
        }
    }
}
