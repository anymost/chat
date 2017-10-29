import React from 'react';

class ErrorHandler extends React.Component {
    componentDidCatch(error, info) {
        console.log(`error is ${JSON.stringify(error)}`);
        console.log(`stack is ${info.componentStack}`);
    }
    render() {
        return <div>{this.props.children}</div>;
    }
}

export default ErrorHandler;