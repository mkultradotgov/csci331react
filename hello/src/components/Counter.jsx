import React, { useState } from 'react';
const Counter = (props) => {
	
	const [countState, setCountState] = useState(50)
	
	function incCount(){
		setCountState(countState+props.incBy);
	}
    return (
        <div>
            <div>{countState}</div>
            <button onClick={incCount}>+{props.incBy}</button>
        </div>
    )
}
export default Counter;