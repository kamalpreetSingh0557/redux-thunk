import React,{useState} from 'react';
import { connect } from 'react-redux';

function Bat(props) {
    //const [bat,setBat] = useState(20) //local to the component
    //console.log(props);
    //console.log(props.bats);
    return (
        <div>
            <h1>Bats : {props.Bats}</h1>
            {/* <h1>Bats:{bat}</h1> */}
            {/* <button onClick={()=>setBat(bat-1)}>Buy Bat</button> */}
            <button onClick={props.buyBat}>Buy Bat</button>
        </div>
    )
}

// "mapStateToProps" ka kaam hai "component" ko "state" provide krna
// ye hmare "component" ko state se koi bhi value provide krata hai
// kisi "component" ko "Store" se "state/property" as a "props" leni ho to uske liye "mapStateToProps" use krte hain
// "connect" method "state" deta hai "mapStateToProps" ko
const mapStateToProps = (state) => {
    // iske andar humein states define krte hain
    // states se value le ke aatein hain
    return{
        Bats : state.bat.bats
    }
}

// "mapDispatchToProps" ka kaam hai "component" ko "dispatch" provide krana
//  ye dispatch krta hai action ko to reducer
// dispatch ka kaam hai [uske andar likhe object] action ko reducer tk leke jaane ks
// "mapDispatchToProps" ko "connect" ne "dispatch" diya hai
const mapDispatchToProps = (dispatch) => {
    // states ki value change krte hain
    // iske andar hum function define krate hain and
    // un functon ki defination ke andar hum action dispatch krate hain
    return{
        buyBat : () => dispatch({type :"BUY_BAT"})
    }

}
    
export default connect(mapStateToProps, mapDispatchToProps)(Bat);
