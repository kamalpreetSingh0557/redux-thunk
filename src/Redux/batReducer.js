const initialState = {
    bats : 20
}

const batReducer = (state = initialState, action) => {
    // Humnei new object bnaya hai rather than us object mein change krein because
    // we want ki object ka address change krein taaki REACT ko pta chle ki 
    // state change hui hai re-render kro 
    switch(action.type){
        case "BUY_BAT" : 
            return {...state, bats : state.bats-1}
        default : 
            return state ;            
    }
}

export default batReducer;

// Reducer ek component hai jismein hum "state" ko ek value assign kr rhe hain
