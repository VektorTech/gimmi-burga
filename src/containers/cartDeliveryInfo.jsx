import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setCartAddress } from "../redux/actions/cart.actions";
import {
    Wrapper,
    Span,
    AddressInput
} from './cartDeliveryInfo.styles';

const CartDeliveryInfo = ({address, setCartAddress}) => {
    const [date, setDate] = useState("35mins");
    const [time, setTime] = useState();
    const [editing, toggleEdit] = useState(false);

    return (
    <Wrapper>
        <Span>
            <AddressInput
                id="addrInput" 
                placeholder="Address" 
                type="text" 
                value={address} 
                readOnly={!editing} 
                onChange={(e) => setCartAddress(e.target.value)}/>
        </Span>
        <Span right onClick={ () => {
            document.getElementById('addrInput').focus();
            toggleEdit(!editing); } }>{ editing ? "Save" : "Edit" }</Span>
        <br />
        <Span>Choose Time</Span>

        <div>
        <select style={{width:'50%'}} value={date} onChange={(e) => setDate(e.target.value)}>
        {
            (() => {
                const datesArr = [ 
                    <option key={"35"}>{"35mins"}</option>,
                    <option key={"today"}>{"Today"}</option> 
                ];
                for(let i=1;i<=7;i++){
                    const opts = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
                    let _date = new Date( Date.now()+(i*86.4*Math.pow(10,6)) ).toLocaleDateString(undefined, opts);
                    datesArr.push( 
                        <option key={i} value={_date}>
                            { _date }
                        </option> 
                    );
                }
                return datesArr;
            })()
        }
        </select>
        <select style={{width:'50%'}} value={time} onChange={(e) => setTime(e.target.value)}>
        {
            (() => {
                const getTimeList = (start=0, timesArr=[]) => {
                    for(let i=5+start;i<29;i++){
                        let _time = new Date( i*60*60*1000 ).toLocaleTimeString('en-US');
                        timesArr.push(
                        <option>{ _time }</option>
                        );
                    }
                    return timesArr
                }
                if(date==="35mins"){
                    return;
                } else if(date==="Today"){
                    return getTimeList( new Date().getHours() );
                } else {
                    return getTimeList();
                }
            })()
        }
        </select>
        </div>
    </Wrapper>);
};

export default connect(
    ({cart}) => ({address: cart.address}), 
    dispatch=>({setCartAddress:address=>dispatch(setCartAddress(address))})
)(CartDeliveryInfo);