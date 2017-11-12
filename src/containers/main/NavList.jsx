import React from 'react';
import SearchComp from '../../component/main/SearchComp';
import '../../page/main/wrap.css';

function NavList(Component) {
    return class  extends React.Component {
        render() {
            return <div className='list-wrap'>
                <SearchComp/>
                <div className='list-hole'>
                    <Component {...this.props}/>
                </div>
            </div>;
        }
    };
}

export default NavList;