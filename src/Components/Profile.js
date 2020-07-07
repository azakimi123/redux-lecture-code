import React, {Component} from 'react';
import {connect} from 'react-redux';

class Profile extends Component {
    render(){
        return (
            <div className='profile'>
                <img 
                    className='profile-image' 
                    src={this.props.user.image} 
                    alt={this.props.user.name}/>
                <p>{this.props.user.name}</p>
            </div>
        )
    }
}

const mapStateToProps = reduxState => reduxState.reducer;

export default connect(mapStateToProps)(Profile);