import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        const { onClick } = this.props;
        return (
            <div>
                <button onClick={onClick}>Login</button>
            </div>
        )
    }
}
