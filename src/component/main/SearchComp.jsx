import React from 'react';
import {Input} from 'antd';
import './searchComp.css';
const Search = Input.Search;

class SearchComp extends React.Component {
    render() {
        return <div className="search-comp-wrap">
            <Search placeholder="搜索" value={this.props.value}
                onSearch={value => this.props.bind(this, value)}
            />
        </div>;
    }
}

export default SearchComp;