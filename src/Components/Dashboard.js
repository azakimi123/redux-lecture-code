import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getUser} from '../redux/reducer';
import {getPokemon} from '../redux/pokeReducer';

class Dashboard extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         user: { id: 1, name: 'Tony Stark', image: 'https://i1.wp.com/themarvelreport.com/wp-content/uploads/2019/05/Tony-Stark-Iron-Man.jpg?fit=1280%2C720', hobbies: ['Being Rich, Having a Super Suit, Shawarma'] }
    //     }
    // }

    componentDidMount = () => {
        this.props.getPokemon();
    }

    changeAvenger = () => {
        //axios request or anything to change the data
        let newAvenger = {
            id: 2,
            name: 'Thor',
            image: 'https://mcuexchange.com/wp-content/uploads/2018/06/thor.jpg',
            hobbies: ['Hammers', 'Lightning', 'Speaking Groot']
        }
        this.props.getUser(newAvenger)
    }

    render() {
        //this console.log shows us that we have accessed the api with the axios request in our reducer
        console.log(this.props)
        return (
            <div className='dashboard'>
                <h1>{this.props.reducer.user.name}</h1>
                <p className='hobbies'>Hobbies</p>
                {this.props.reducer.user.hobbies.map((hobby, i) => (
                    <p key={i}>{hobby}</p>
                ))}
                <button onClick={this.changeAvenger}>Change Avenger</button>
            </div>
        )
    }
}

//you can use redux.State.user or whatever other objects you have on state
//if keys and values are the same you can type it once {getUser: getUser}
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getUser, getPokemon})(Dashboard);
//if we don't have a mapStateToProps
//export default connect(null, {getUser})(Dashboard);