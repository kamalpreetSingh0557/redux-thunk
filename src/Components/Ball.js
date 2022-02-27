import React,{useState} from 'react';
import {connect} from 'react-redux';
import { buyBall } from '../Redux/ballActions';
// agr humein koi arguement bhejna ho to usse "payload" mein bhejenge
function Ball({ball, buyBall, sellBall}){
    const [qty, setQty] = useState(1);
    return(
        <>
            <h1>Balls : {ball}</h1>
            <input type="number" value={qty} onChange={(e)=>setQty(e.target.value)} />
            <button onClick={()=>buyBall(qty)} >Buy Ball</button>
            <button onClick={sellBall} >Sell Ball</button>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        ball : state.ball.balls
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        buyBall : (qty) => dispatch(buyBall(qty)),
        sellBall : () => dispatch({type : "SELL_BALL"})
        //sellBall : (qty) => dispatch({type : "SELL_BALL", payload : qty})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Ball);