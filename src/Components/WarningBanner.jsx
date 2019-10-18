import React, { Component } from 'react'

export default class WarningBanner extends Component {
    render() {
        if (!this.props.warn) {
            return null;
        }
        return (
            <div>
                Warning!
            </div>
        )
    }
}
