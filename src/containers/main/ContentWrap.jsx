import React from 'react';
import '../../page/main/wrap.css';


function ContentWrap(Component) {
    return class extends React.Component {
        render() {
            return <div className='content-wrap'>
                <Component {...this.props}/>
            </div>;
        }
    };
}

export default ContentWrap;