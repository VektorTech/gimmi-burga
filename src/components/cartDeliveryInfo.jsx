import React, { useState } from 'react';
import {
    Wrapper,
    Span
} from './cartDeliveryInfo.styles';

export const CartDeliveryInfo = ({address}) => {
    const [date, setDate] = useState("35mins");
    const [time, setTime] = useState();
    const [editing, toggleEdit] = useState(false);
    const [addr, setAddr] = useState(address);

    return (
    <Wrapper>
        <Span><input type="text" value={addr} readOnly={!editing} onChange={(e) => setAddr(e.target.value)} /></Span>
        <Span right onClick={() => toggleEdit(!editing)}>{ editing ? "Save" : "Edit" }</Span>
        <br />
        <Span>Choose Time</Span>

        <div>
        <select value={date} onChange={(e) => setDate(e.target.value)}>
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
        <select value={time} onChange={(e) => setTime(e.target.value)}>
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
}