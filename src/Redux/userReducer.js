import * as actionTypes from './actions';
// Reducer ko "rootreducer" ke andar bhi as a "key" denge and us key ko mapStateToProps mein "state.key" se access krenge

const initialState = {
    loading : false,
    error : "",
    users : []
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_REQ : 
            return {...state, loading : true}
        case actionTypes.FETCH_SUC :
            return {...state, loading:false, users : [...action.payload]}             
        case actionTypes.FETCH_FAIL :
            return {...state, loading:false, err : action.payload} 
        default : return state                                       
    }
}

export default userReducer;