import React, { Component } from 'react'

export default class LogoutButton extends Component {
    render() {
        const { onClick } = this.props;
        return (
            <div>
                <button onClick={onClick}>Logout</button>
            </div>
        )
    }
}
