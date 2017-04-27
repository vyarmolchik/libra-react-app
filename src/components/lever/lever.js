import React from 'react';
import PropTypes from 'prop-types';

import './styles.css';

export default class Lever extends React.Component {

    constructor(props) {
        super (props);

        this.state = {
            weight: 0
        };
    }

    onClickHandler() {
        this.props.clickHandler();
        this.setState({
            weight: this.state.weight + 1
        });
    }

    render() {
        let lStyle;
        const bias = this.props.bias;
        console.log(this.props.bias);
        lStyle = {
            top: `${bias}px`
        };
        return (
            <div className="lever" style={ lStyle } onClick={ this.onClickHandler.bind(this) }>
                { this.state.weight }
              </div>
        );
    }

}

Lever.propTypes = {
    bias: PropTypes.number.isRequired,
    clickHandler: PropTypes.func.isRequired
};
