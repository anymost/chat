import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {Picker} from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

class PickerWrap extends React.Component {
    componentWillMount() {
        this.el = document.createElement('div');
    }
    selectEmoji = value => {
        this.props.hidePicker();
        this.context.selectEmoji(value.id);
    };
    render() {
        return  ReactDOM.createPortal(
            <Picker
                onClick={this.selectEmoji}
                emojiSize={16}
                perLine={11}
                skin={1}
                set='apple'
            />,
            this.el);
    }
    componentDidMount() {
        this.container = document.querySelector('#pickerContainer');
        if (this.container) {
            this.container.appendChild(this.el);
        }
    }
    componentWillUnmount() {
        this.container.removeChild(this.el);
    }
}

PickerWrap.contextTypes = {
    selectEmoji: PropTypes.func
};

export default PickerWrap;