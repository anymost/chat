import React from 'react';
import PropTypes from 'prop-types';
import '../../containers/chat/chatWrap.css';

function ImageWrap(props){
    const style = {
        display: props.isImageShow ? 'block' : 'none'
    };
    return<div style={style} onClick={props.hideImage} className='image-wrap'>
        <img src={props.url} alt={'image-wrap'}/>
    </div>;
}

ImageWrap.propTypes = {
    url: PropTypes.string,
    isImageShow: PropTypes.bool,
    hideImage: PropTypes.func
};


export default ImageWrap;