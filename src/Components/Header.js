import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         user: {id: 1, name: 'Tony Stark', image: 'https://i1.wp.com/themarvelreport.com/wp-content/uploads/2019/05/Tony-Stark-Iron-Man.jpg?fit=1280%2C720'}
    //     }
    // }

    render(){
        console.log(this.props);
        return (
            <div className='main-header'>
                <p>Welcome, {this.props.user.name}</p>
                <nav>
                    <Link className='nav-links' to='/'>Home</Link>
                    <Link className='nav-links' to='/profile'>Profile</Link>
                </nav>
            </div>
        )
    }
}

//you can use redux.State.user or whatever other objects you have on state
const mapStateToProps = reduxState => reduxState.reducer;


export default connect(mapStateToProps)(Header);