import React from 'react';

import Lever from '../lever/lever';
import './styles.css';

export default class Libra extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            left: 0,
            right: 0
        };
    }

    leftClick() {
        this.setState({
            left: this.state.left + 5,
            right: this.state.right - 5
        });
    }

    rightClick() {
        this.setState({
            left: this.state.left - 5,
            right: this.state.right + 5
        });
    }

    render() {
        return (
            <div className="libra">
                <Lever
                    bias={ this.state.left }
                    clickHandler = { this.leftClick.bind(this) }
                />
                <Lever
                    bias={ this.state.right }
                    clickHandler = { this.rightClick.bind(this) }
                />
            </div>
        );
    }

}
