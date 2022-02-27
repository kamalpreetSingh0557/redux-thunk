import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { fetchUserss } from '../Redux/userActions';
import {connect} from 'react-redux';

function User({loading, error, users, fetchUsers}){
// No need to declare "states" locally[in Component] because Redux(Store) se globally available krva di "states"

    useEffect(async() => {
        fetchUsers();
    }, [])

    return(
        <>
            {
                loading ? <h1>Loading....</h1> : error != "" ? <h1>{error}</h1> :
                <ul>
                    {
                        users.map((user) => (
                            <li>{user.name}</li>
                        ))
                    }
                </ul>
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        loading : state.user.loading,
        error : state.user.error,
        users : state.user.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        fetchUsers : () => dispatch(fetchUserss())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User);