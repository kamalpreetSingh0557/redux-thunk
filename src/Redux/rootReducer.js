import { combineReducers } from "redux";
import ballReducer from "./ballReducer";
import batReducer from "./batReducer";
import userReducer from "./userReducer";

// ye isliye bnaya because store mein sirf ek hi "Componet ka reducer" as a firstParameter leta hai 
// but humein to sb ke reducer Store mein chaiye isliye unhe 
// root reducer mein declare krke "root" reducer ko store mein as a parameter bhej diya
const rootReducer = combineReducers({
    bat : batReducer,
    ball : ballReducer,
    user : userReducer
})

export default rootReducer;